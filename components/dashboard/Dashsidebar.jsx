"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import navbarlogo from "@/public/img/logo.jpeg"
import { FaHome, FaShopify, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Dashsidebar = ({ togglebutton,settogglebutton }) => {
  const path = usePathname();
  return (
    <div className="min-h-screen flex">
      <div
        className={`md:w-72 md:translate-x-0 border-2 hover:border-blue-400 transition-all duration-300 ease-in-out ${
          togglebutton
            ? "transform transition-transform duration-300 translate-x-0 w-72"
            : "transition-all duration-300 max-sm:w-0  -translate-x-96"
        } text-white bg-transparent`}
      >
        <Link  className="border-b mx-auto" href="/dashboard">
          <Image
            src={navbarlogo}
            alt="navbar-logo"
            className="w-32 mx-auto mt-3 md:mt-5"
            layout="intrinsic" // Ensures the image respects the width and height props
          />
        </Link>

        <div className="ul flex flex-col flex-wrap translate-x-5 translate-y-11">
          <Link onClick={()=>settogglebutton(!togglebutton)}
            href="/dashboard"
            className={`mb-1 p-2 text-black hover:bg-blue-400 hover:text-white duration-100 ease-in-out w-52 rounded-lg flex text-lg ${
              path === "/dashboard" ? "bg-blue-400" : ""
            }`}
          >
            <FaHome className="mr-1 mt-1" />
            Dashboard
          </Link>
          <Link onClick={()=>settogglebutton(!togglebutton)}
            href="/dashboard/intensive"
            className={`mb-1 p-2 text-black hover:bg-blue-400 hover:text-white duration-100 ease-in-out w-52 rounded-lg flex text-lg ${
              path === "/dashboard/users" ? "bg-blue-400" : ""
            }`}
          >
            <FaShopify className="mr-1 mt-1" />
            intensive  Placed
          </Link>
          <Link onClick={()=>settogglebutton(!togglebutton)}
            href="/dashboard/hourlyorder"
            className={`mb-1 p-2 text-black hover:bg-blue-400 hover:text-white duration-100 ease-in-out w-56 rounded-lg flex text-lg ${
              path === "/dashboard/orders" ? "bg-blue-400" : ""
            }`}
          >
            <FaShopify className="mr-1 mt-1" />
           Hourly Order Placed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashsidebar;
