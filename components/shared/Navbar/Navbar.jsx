"use client";
import React, { useState } from "react";
import logo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Links = [
    { pathname: "Intensive Courses", path: "/courses" },
    { pathname: "Hourly Courses", path: "/pick-up" },
    { pathname: "Contact Us", path: "/contactus" },
  ];

  return (
    <div className="w-full">
      {/* Navbar for larger screens */}
      <div className="hidden lg:flex md:mt-5 justify-between items-center">
        {/* Logo and Links */}
        <div className="flex items-center">
          <div className="md:ml-5">
            <Link href="/">
              <Image src={logo} className="w-20 md:w-32 " alt="logo" />
            </Link>
          </div>
          <div className="xl:ml-10 lg:ml-3">
            <ul className="flex md:space-x-2 lg:space-x-4">
              {Links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="links md:text-xs xl:text-base text-zinc-900 font-semibold hover:text-blue-500 transition"
                  >
                    {link.pathname}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Number and Login Button */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <div className="flex items-center text-gray-700">
            <FaPhoneAlt className="text-yellow-700/75 mr-2 text-lg lg:text-xl" />
            <span className="font-monaBold text-base md:text-sm lg:text-base xl:text-xl">
              +07423843474
            </span>
          </div>
          <div>
            {/* <Link
              href="/login"
              className="bg-blue-600 text-white xl:px-7 xl:py-3 rounded-lg text-sm md:text-base lg:text-base hover:bg-blue-700 transition"
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>

      {/* Sidebar and toggle button for mobile */}
      <div className="lg:hidden  flex items-center justify-between p-4 w-full">
        <Link href="/">
          <Image src={logo} className="w-12" alt="logo" />
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? (
            <FaTimes className="text-black" size={24} />
          ) : (
            <FaBars className="text-black" size={24} />
          )}
        </button>
      </div>

      {/* Sidebar content */}
      <div
        className={`fixed backdrop-blur-2xl sidebar top-0 right-0 z-50 h-full w-80  text-black p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Image src={logo} className="w-10" alt="logo" />
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4">
          {Links.map((link, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <Link
                href={link.path}
                className="block p-2 hover:bg-gray-200 rounded"
                onClick={() => setSidebarOpen(false)}
              >
                {link.pathname}
              </Link>
              {/* Add the phone number next to "Contact Us" */}
              {link.pathname === "Contact Us" && (
                <div className="flex items-center text-black">
                  <span className=" text-base"> 07423843474</span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Rest of the content (if needed) */}
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
