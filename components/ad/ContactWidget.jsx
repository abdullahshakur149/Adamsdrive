"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import Contactpopup from "../contactpopup";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(true);

  useEffect(() => {
    const checkAndUpdateVisit = () => {
      const lastVisit = localStorage.getItem("lastVisitTime");
      const currentTime = new Date().getTime();

      // Check if it's first visit or if 24 hours have passed
      if (
        !lastVisit ||
        currentTime - parseInt(lastVisit) > 24 * 60 * 60 * 1000
      ) {
        setHasVisited(false);
        setIsOpen(true);
      }

      // Update the last visit timestamp
      localStorage.setItem("lastVisitTime", currentTime.toString());
    };

    checkAndUpdateVisit();
  }, []);

  return (
    <>
      {/* Floating action button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact Us"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed bottom-0 right-0 z-40 w-full md:w-[450px] bg-gray-50 
          transform transition-transform duration-300 ease-in-out rounded-t-xl shadow-lg
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "85vh" }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content wrapper with scroll */}
        <div
          className="h-full overflow-y-auto"
          style={{ maxHeight: "calc(85vh - 60px)" }}
        >
          <Contactpopup />
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ContactWidget;
