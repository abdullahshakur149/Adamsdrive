"use client";
import "@/app/globals.css";
import { useState } from "react";
import DashNav from "@/components/dashboard/dashnavbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashsidebar from "@/components/dashboard/Dashsidebar";


const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  const [togglebutton, settogglebutton] = useState(false);
  const Toggle = () => {76
    settogglebutton(!togglebutton);
  };
  return (
    <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={` bg-white text-black`}>
            <div className="absolute inset-0 -z-10 w-full h-full hidden md:flex md:w-auto md:h-auto">
              
            </div>
            <div className="flex ">
              <Dashsidebar togglebutton={togglebutton} />
              <div className="flex flex-col w-screen h-screen  ">
                <DashNav settogglebutton={Toggle} />
                {children}
              </div>
            </div>
          </body>
        </html>
    </QueryClientProvider>
  );
}
