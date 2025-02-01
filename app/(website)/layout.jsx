import React from "react";
import "@/app/globals.css";
import ContactWidget from "@/components/ad/ContactWidget";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white  font-mona text-black">
        <ContactWidget />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
