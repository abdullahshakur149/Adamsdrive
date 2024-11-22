"use client";
import React, { useState } from "react";
import { Trash2, ArrowBigRight } from "lucide-react";
import { useQuery } from "react-query";
import axios from "axios";
import Link from "next/link";

const UserData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchUsers = async (page = 1, limit = itemsPerPage) => {
    const response = await axios.get(`/api/users?page=${page}&limit=${limit}`);
    return response.data;
  };

  const {
    data: userData,
    isLoading: queryLoading,
    error,
  } = useQuery(
    ["UserInformation", currentPage],
    () => fetchUsers(currentPage),
    {
      keepPreviousData: true,
    }
  );

  if (queryLoading) {
    return (
      <div className="ml-auto mr-auto">
       </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleNextPage = () => {
    if (currentPage < userData.pagination.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <div className="flex justify-center md:text-3xl mt-10 font-bold">
        Registered Users
      </div>
      <div className="min-h-full w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full mt-10 font-sans  border border-gray-200">
            <thead>
              <tr className="">
                <th className="py-2 px-2 md:px-4 border-b text-left">ID</th>
                <th className="py-2 px-2 md:px-4 border-b text-left">Name</th>
                <th className="py-2 px-2 md:px-4 border-b text-left">Email</th>
                <th className="py-2 px-2 md:px-4 border-b text-left">
                  Date Created
                </th>
                <th className="py-2 px-2 md:px-4 border-b text-left">Role</th>
                <th className="py-2 px-2 md:px-4 border-b text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-2 md:px-4">{index + 1}</td>
                  <td className="py-2 px-2 md:px-4">{user.username}</td>
                  <td className="py-2 px-2 md:px-4">{user.email}</td>
                  <td className="py-2 px-2 md:px-4">{user.createdAt}</td>
                  <td className="py-2 px-2 md:px-4">{user.role}</td>
                  <td className="py-2 px-2 md:px-4 text-center">
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className="text-blue-500 hover:text-blue-700 mx-1">
                        <ArrowBigRight size={22} />
                      </button>
                    </Link>
                    <button className="text-red-500 hover:text-red-700 mx-1">
                      <Trash2 size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            {currentPage > 1 && (
              <button
                className="py-2 px-4 hover:bg-black text-white hover:text-white"
                onClick={handlePreviousPage}
              >
                Previous
              </button>
            )}
            {currentPage < userData.pagination.totalPages && (
              <button
                className="py-2 px-4 hover:bg-black text-white hover:text-white"
                onClick={handleNextPage}
              >
                Next
              </button>
            )}
          </div>
          <p className="text-center mt-4 text-white">
            Page {currentPage} of {userData.pagination.totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
