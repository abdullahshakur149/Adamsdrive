"use client"
import React, { useState } from 'react';
import "./Navbar.css";
import logo from "@/public/img/adamsdrive.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Links = [
    { pathname: "Number1", path: "/number1" },
    { pathname: "Number2", path: "/number2" },
    { pathname: "Number3", path: "/number3" },
  ];

  return (
    <div>
      {/* Navbar for larger screens */}
      <div className='container md:mt-2 md:p-2 md:flex hidden justify-between'>
        <div className="Logo-Links flex justify-center items-center">
          <div className="Navbar-logo translate-x-5">
            <Link href='#'><Image src={logo} className='w-16' alt='logo' /></Link>
          </div>

          <div className="Navbar-links translate-x-10">
            <ul className='flex'>
              {Links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className='p-2'>{link.pathname}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="number-Login flex justify-center items-center">
          <div className="number m-2">
            <Link href='#'>+91-802342523</Link>
          </div>
          <div className="login-btn m-2">
            <Link href='/login' className='bg-blue-500 px-4 py-2 text-white rounded-lg'>Login</Link>
          </div>
        </div>
      </div>

      {/* Sidebar and toggle button for mobile */}
      <div className={`md:hidden ${sidebarOpen ?"hidden":"flex" } items-center p-4 justify-between  w-full text-white transform transition-transform duration-300`}>
        <Link href='#'>
          <Image src={logo} className='w-12' alt='logo' />
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Menu">
          
          {sidebarOpen ? <FaTimes className='text-black' size={24} /> : <FaBars className='text-black' size={24} />}
        </button>
      </div>

      {/* Sidebar content */}
      <div className={`sidebar fixed top-0 z-50  right-0 h-full w-80 bg-gray-900 text-white p-6 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <Link href='#'>
            <Image src={logo} className='w-12' alt='logo' />
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4">
          {Links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.path} className='block p-2 hover:bg-gray-700 rounded' onClick={() => setSidebarOpen(false)}>
                {link.pathname}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link href='#' className="block text-lg mb-4">+91-802342523</Link>
          <Link href='/login' className='block bg-blue-500 px-4 py-2 text-center text-white rounded-lg' onClick={() => setSidebarOpen(false)}>
            Login
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
