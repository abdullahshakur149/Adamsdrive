"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const UserData = () => {
  const fetchUsers = async () => {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await axios.get(`${url}/intensiveorders`);
    console.log(response.data.orders);
    return response.data.orders;
  };

  const {
    data: userData,
    isLoading: queryLoading,
    error,
  } = useQuery(["UserInformation"], fetchUsers, {
    keepPreviousData: true,
  });

  if (queryLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <h1 className="flex justify-center text-3xl mt-10 font-bold text-gray-800">
        Intensive Courses
      </h1>
      <div className="min-h-full w-full mt-8">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-4 border-b text-left">ID</th>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                {/* <th className="py-3 px-4 border-b text-left">Phone</th> */}
                <th className="py-3 px-4 border-b text-left">Address</th>
                <th className="py-3 px-4 border-b text-left">Course Title</th>
                <th className="py-3 px-4 border-b text-left">Course Price</th>
                <th className="py-3 px-4 border-b text-left">Payment Status</th>
                <th className="py-3 px-4 border-b text-left">Date Created</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 text-xs font-monaBold">
              {userData?.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  {/* <td className="py-3 px-4 border-b">{user.phonenumber}</td> */}
                  <td className="py-3 px-4 border-b">{user.address}</td>
                  <td className="py-3 px-4 border-b">{user.courseid.courseTitle}</td>
                  <td className="py-3 px-4 border-b">{`$${user.courseid.coursePrice}`}</td>
                  <td className="py-3 px-4 border-b">
                    {user.paymentStatus === "true" ? (
                      <span className="text-green-600 font-semibold bg-green-100 py-1 px-2 rounded-md">
                        Paid
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold bg-red-100 py-1 px-2 rounded-md">
                        Unpaid
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserData;
