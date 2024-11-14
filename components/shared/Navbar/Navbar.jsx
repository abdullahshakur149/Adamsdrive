"use client";
import React, { useState } from "react";
import logo from "@/public/img/Loginlogo.png";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { FaBars, FaPhoneAlt, FaTimes,FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ Courses:false });

  const Links = [
    { pathname: "Courses and Pricing", path: "/courses",isDropdown:true,sublinks:[
      {pathname: "ALL Courses", path: "/courses",},
      {pathname: "Hourly Courses", path: "/pick-up",},
    ] 
    },
    { pathname: "About Us", path: "#" },
    { pathname: "Our Instructors", path: "#" },
    { pathname: "News", path: "#" },
    { pathname: "Testimonials", path: "#" },
    { pathname: "Contact Us", path: "/contactus" },
  ];

  const handleDropdownToggle = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div className="w-full">
      {/* Navbar for larger screens */}
      <div className="hidden lg:flex md:mt-5  justify-between items-center">
        {/* Logo and Links */}
        <div className="flex items-center">
          <div className="md:ml-5">
            <Link href="/">
              <Image src={logo} className="w-16 md:w-20" alt="logo" />
            </Link>
          </div>
          <div className="xl:ml-10 lg:ml-3">
            <ul className="flex md:space-x-2 lg:space-x-4">
              {Links.map((link, idx) => (
                <li key={idx}
                className="relative group"
                onMouseEnter={() => link.isDropdown && handleDropdownToggle(link.pathname.toLowerCase())}
                onMouseLeave={() => link.isDropdown && handleDropdownToggle(link.pathname.toLowerCase())}>
                  <Link
                    href={link.path}
                    className=" links md:text-xs xl:text-base  text-zinc-900 font-semibold hover:text-blue-500 transition"
                  >
                    {link.pathname}
                  </Link>
                  {link.isDropdown && (
                    <FaChevronDown className=" max-md:ml-5 ml-1 text-black inline" onClick={()=>setDropdownOpen(true)} />
                  )}
                  {link.isDropdown && dropdownOpen[link.pathname.toLowerCase()] && (
                    <div className="absolute top-full left-0  w-40 z-50 bg-gray-800 text-white rounded shadow-lg">
                      {link.sublinks.map((sublink, subIdx) => (
                        <Link key={subIdx} href={sublink.path} className="block px-4 py-2 hover:bg-gray-700">
                          {sublink.pathname}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Number and Login Button */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <div className="flex items-center text-gray-700">
            <FaPhoneAlt className="text-yellow-700/75 mr-2 text-lg lg:text-xl" />
            <Link href="#" className="font-monaBold text-base md:text-sm lg:text-base xl:text-xl">
              +91-802342523
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="bg-blue-600 text-white xl:px-7 xl:py-3 rounded-lg text-sm md:text-base lg:text-base hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar and toggle button for mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 w-full">
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
        className={`fixed sidebar top-0 right-0 z-50 h-full w-80 bg-gray-900 text-white p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="#">
            <Image src={logo} className="w-10" alt="logo" />
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
                onClick={() => link.isDropdown ? handleDropdownToggle(link.pathname.toLowerCase()) : setSidebarOpen(false)}
              >
                {link.pathname}
              </Link>
              {link.isDropdown && dropdownOpen[link.pathname.toLowerCase()] && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.sublinks.map((sublink, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sublink.path}
                      className="block pl-4 p-2 text-white hover:bg-gray-700 rounded"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {sublink.pathname}
                    </Link>
                  ))}
                </div>
              )}
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
          className="fixed inset-0 z-50 bg-black  opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
