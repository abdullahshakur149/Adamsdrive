"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const ContactPage = () => {
  // Fetching contact data
  const fetchContacts = async () => {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await axios.get(`${url}/contact`);
    console.log(response.data); 
    return response.data;
  };

  const {
    data: contactData,
    isLoading: queryLoading,
    error,
  } = useQuery(["ContactInformation"], fetchContacts, {
    keepPreviousData: true,
  });

  // Display loading state
  if (queryLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    );
  }

  // Main page content
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <h1 className="flex justify-center text-3xl mt-10 font-bold text-gray-800">
        Contact Messages
      </h1>
      <div className="min-h-full w-full mt-8">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-4 border-b text-left">ID</th>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">City</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                {/* <th className="py-3 px-4 border-b text-left">Phone</th> */}
                <th className="py-3 px-4 border-b text-left">Course Title</th>
                <th className="py-3 px-4 border-b text-left">Message</th>
                <th className="py-3 px-4 border-b text-left">Privacy Consent</th>
                <th className="py-3 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-monaBold">
              {contactData?.map((contact, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b">{contact.name}</td>
                  <td className="py-3 px-4 border-b">{contact.city}</td>
                  <td className="py-3 px-4 border-b">{contact.email}</td>
                  {/* <td className="py-3 px-4 border-b">{contact.phonenumber}</td> */}
                  <td className="py-3 px-4 border-b">
                    {contact.courseTitle?.courseTitle}
                  </td>
                  <td className="py-3 px-4 border-b">{contact.message}</td>
                  <td className="py-3 px-4 border-b">
                    {contact.privacyUnderstand === "true" ? "Yes" : "No"}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {new Date(contact.createdAt).toLocaleDateString()}
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

export default ContactPage;
