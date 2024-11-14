"use client";
import React, { useState, useEffect } from 'react';
import Contactpopup from '../contactpopup';

const Ad = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className='relative '>
        {popup && (
        <div
          className="fixed inset-0 z-50 bg-black  opacity-70"
        ></div>
      )}
      {popup && (
        <div className='container fixed mx-auto  m-10 inset-0 z-50   flex justify-center items-center'>
          <button
            className='close absolute top-4 right-4 text-4xl text-white'
            aria-label="Close"
            onClick={() => setPopup(false)}
          >
            ×
          </button>
          <div className="popup-area lg:w-8/12 w-full   p-6  ">
            <Contactpopup />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Ad;
