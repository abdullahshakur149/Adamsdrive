"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Page = () => {
  const fetchUsers = async () => {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await axios.get(`${url}/hourlyOrder`);
    console.log(response.data.orders);
    return response.data.orders;
  };

  const {
    data: userData,
    isLoading: queryLoading,
    error,
  } = useQuery(["HourlyOrderInformation"], fetchUsers, {
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
        Hourly Orders
      </h1>
      <div className="min-h-full w-full mt-8">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-4 border-b text-left">ID</th>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Phone</th>
                <th className="py-3 px-4 border-b text-left">Postal Code</th>
                <th className="py-3 px-4 border-b text-left">Course Selected</th>
                <th className="py-3 px-4 border-b text-left">Course Price</th>
                <th className="py-3 px-4 border-b text-left">Date Created</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-monaBold">
              {userData?.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.phonenumber}</td>
                  <td className="py-3 px-4 border-b">{user.Postalcode}</td>
                  <td className="py-3 px-4 border-b">{user.courseSelected}</td>
                  <td className="py-3 px-4 border-b font-semibold text-blue-600">
                    ${user.coursePrice}
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

export default Page;
