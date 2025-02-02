import React from "react";
import "@/app/globals.css";
import ContactWidget from "@/components/ad/ContactWidget";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white  font-mona text-black">
        <ContactWidget />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
