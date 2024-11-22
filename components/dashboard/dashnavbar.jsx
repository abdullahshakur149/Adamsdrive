"use client";
import React, { useState } from "react";
import Link from "next/link";

const DashNav = ({ settogglebutton }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <div>
      <header className="flex  h-14 items-center gap-4 border-b border-blue-300 hover:border-blue-900 transition-all duration-300 ease-in-out bg-muted/40  lg:h-[65px]  ">
        <button
          onClick={settogglebutton}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-red-950 hover:bg-accent hover:text-accent-foreground h-10 w-10 shrink-0 md:hidden"
          aia-label="Toggle navigation menu"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:Rmbta:"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
        <div className="w-full flex-1"></div>
        <button
          onClick={toggleUserMenu}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 w-10 rounded-full bg-primary hover:bg-blue-400 mr-10 transition ease-in duration-200 "
          aria-label="Toggle user menu"
          type="button"
          id="radix-:R1mbta:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
          </svg>
          <span className="sr-only">Toggle user menu</span>
        </button>
        {isUserMenuOpen && (
          <div className="absolute top-16 right-4 w-48  shadow-md rounded-md">
            <Link
              href="/profile"
              className="block  px-4 py-2 text-sm  hover:bg-blue-500 "
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm   hover:bg-blue-500 "
            >
              Settings
            </Link>
            <button className="block w-full text-left  px-4 py-2 text-sm  hover:bg-blue-500 ">
              Logout
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default DashNav;
