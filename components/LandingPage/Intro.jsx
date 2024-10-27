import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaCar, FaUser, FaSync, FaClipboardList } from 'react-icons/fa';
import intro from '@/public/img/images/images/intro.gif';

const IntroSection = () => {
  return (
    <div className=" w-full ">
      {/* Intro Image and Text */}
      <Image src={intro} className="w-full relative" alt="Driving School" />
      <div className="absolute top-12 left-2 sm:top-14 sm:left-4 md:top-20 md:left-24 lg:top-44 lg:left-40 xl:top-48 xl:left-64 2xl:left-80 2xl:top-1/4   text-black">
      
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl 2xl:text-5xl font-monaBold leading-snug">
          The truest drive <br /> comes from doing <br /> what you love.
        </h1>
        <div className="mt-5 ">
          <div className="feature flex items-center mb-2">
            <FaCheckCircle className="text-blue-600 flex mr-2 text-xs sm:text-sm md:text-sm" />
            <span className="text-xs sm:text-sm md:text-base lg:text-sm font-sans font-bold">
              Training for driving category B, C, and C+E
            </span>
          </div>
          <div className="feature flex items-center mb-2">
            <FaCheckCircle className="text-blue-600 flex mr-2 text-xs sm:text-sm md:text-sm" />
            <span className="text-xs sm:text-sm md:text-base lg:text-sm font-sans font-bold">
              Refresher courses for all drivers
            </span>
          </div>
          <div className="feature flex items-center mb-6 md:mb-8 lg:mb-5">
            <FaCheckCircle className="text-blue-600 flex mr-2 text-xs sm:text-sm md:text-sm" />
            <span className="text-xs sm:text-sm md:text-base lg:text-sm font-sans font-bold">
              99.8% pass of state exams
            </span>
          </div>
        </div>
        <div className="buttons flex space-x-2 ">
          <button className="p-2 sm:p-2 md:p-2 bg-orange-500 text-xs sm:text-sm lg:text-xs xl:text-sm xl:px-6 xl:py-3 xl:mt-10 text-white font-bold rounded-lg shadow-lg">
            Courses & Pricing
          </button>
          <button className="p-2 sm:p-2 md:p-2 text-xs sm:text-sm  lg:text-xs xl:text-sm xl:px-6 bg-black xl:mt-10 text-white font-bold rounded-lg shadow-lg">
            About Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto bg-default  p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div className="stat flex">
          <div className="icon">
            <FaUser className="text-orange-500 text-2xl sm:text-3xl md:text-4xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">8649</h2>
            <p className="text-xs sm:text-sm md:text-base font-bold font-sans">
              Students are trained <br /> every year by our instructors
            </p>
          </div>
        </div>
        <div className="stat flex">
          <div className="icon">
            <FaCar className="text-orange-500 text-2xl sm:text-3xl md:text-4xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">76</h2>
            <p className="text-xs sm:text-sm md:text-base font-bold font-sans">
              Category B and C Vehicles <br /> available for our students
            </p>
          </div>
        </div>
        <div className="stat flex">
          <div className="icon">
            <FaClipboardList className="text-orange-500 text-2xl sm:text-3xl md:text-4xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">99.8%</h2>
            <p className="text-xs sm:text-sm md:text-base font-bold font-sans">
              Our students pass <br /> the state exam the first time
            </p>
          </div>
        </div>
        <div className="stat flex">
          <div className="icon">
            <FaSync className="text-orange-500 text-2xl sm:text-3xl md:text-4xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">3472</h2>
            <p className="text-xs sm:text-sm md:text-base font-bold font-sans">
              Our students drive so many <br /> kilometers every day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
