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
      {/* Navbar for larger screens - unchanged */}
      <div className="hidden lg:flex md:mt-5 justify-between items-center">
        <div className="flex items-center">
          <div className="md:ml-5">
            <Link href="/">
              <Image src={logo} className="w-20 md:w-32" alt="logo" />
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

        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <div className="flex items-center text-gray-700">
            <FaPhoneAlt className="text-yellow-700/75 mr-2 text-lg lg:text-xl" />
            <Link
              href="tel:07423843474"
              className="font-monaBold text-base md:text-sm lg:text-base xl:text-xl"
            >
              +07423843474
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile toggle button */}
      <div className="lg:hidden flex items-center justify-between p-4 w-full">
        <Link href="/">
          <Image src={logo} className="w-12" alt="logo" />
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          {sidebarOpen ? (
            <FaTimes className="text-black" size={24} />
          ) : (
            <FaBars className="text-black" size={24} />
          )}
        </button>
      </div>

      {/* Updated Sidebar content */}
      <div
        className={`fixed backdrop-blur-2xl sidebar top-0 right-0 z-50 h-full w-80 bg-white/95 text-black transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button at top right */}
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Menu"
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaTimes size={24} className="text-gray-600" />
        </button>

        {/* Centered logo section */}
        <div className="flex justify-center pt-12 pb-8">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <Image src={logo} className="w-40 " alt="logo" />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="px-6">
          <ul className="space-y-6">
            {Links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-300 transition-all duration-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="text-lg font-medium">{link.pathname}</span>
                </Link>
                {/* Phone number under Contact Us */}
                {link.pathname === "Contact Us" && (
                  <div className="flex items-center space-x-2 mt-2 px-4">
                    <FaPhoneAlt className="text-yellow-700/75 text-sm" />
                    <Link
                      href="tel:07423843474"
                      className="text-gray-600 text-base"
                    >
                      07423843474
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer section */}
        <div className="absolute bottom-8 left-0 right-0 text-center px-6">
          <div className="h-px bg-gray-200 w-full mb-6"></div>
          <p className="text-sm text-gray-500">
            © 2024 LaneView Driving School. All rights reserved.
          </p>
        </div>
      </div>

      {/* Overlay - updated with smooth transition */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
