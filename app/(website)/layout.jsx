import React from "react";
import "@/app/globals.css";
import ContactWidget from "@/components/ad/ContactWidget";
import "react-toastify/dist/ReactToastify.css";
import Toaster from "@/components/shared/Toaster";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white  font-mona text-black">
        <ContactWidget />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
