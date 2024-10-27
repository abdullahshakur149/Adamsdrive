"use client";
import React, { useState } from "react";
import logo from "@/public/img/Loginlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Links = [
    { pathname: "Courses and Pricing", path: "#" },
    { pathname: "About Us", path: "#" },
    { pathname: "Our Instructors", path: "#" },
    { pathname: "News", path: "#" },
    { pathname: "Testimonials", path: "#" },
    { pathname: "Contact Us", path: "#" },
  ];

  return (
    <div className="w-full">
      {/* Navbar for larger screens */}
      <div className="hidden md:flex md:mt-5 md:p-2 justify-between items-center">
        {/* Logo and Links */}
        <div className="flex items-center">
          <div className="md:ml-5">
            <Link href="#">
              <Image src={logo} className="w-16 md:w-20" alt="logo" />
            </Link>
          </div>
          <div className="ml-10">
            <ul className="flex space-x-4">
              {Links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-sm md:text-base text-zinc-900 font-semibold hover:text-blue-500 transition"
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
            <Link href="#" className="font-bold text-base md:text-lg lg:text-xl">
              +91-802342523
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar and toggle button for mobile */}
      <div className="md:hidden flex items-center justify-between p-4 w-full">
        <Link href="#">
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
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-gray-900 text-white p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="#">
            <Image src={logo} className="w-12" alt="logo" />
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4">
          {Links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className="block p-2 hover:bg-gray-700 rounded"
                onClick={() => setSidebarOpen(false)}
              >
                {link.pathname}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link href="#" className="block text-lg mb-4">
            +91-802342523
          </Link>
          <Link
            href="/login"
            className="block bg-blue-500 px-4 py-2 text-center text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => setSidebarOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
