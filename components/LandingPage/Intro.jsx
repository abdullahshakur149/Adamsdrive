import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaCar, FaUser,  FaSync, FaClipboardList } from 'react-icons/fa';
import intro from '@/public/img/images/images/intro.gif';

const IntroSection = () => {
  return (
    <div className="relative w-full bg-blue-50">
      {/* Intro Image and Text */}
      <Image src={intro} className="w-full relative" alt="Driving School" />
      <div className="absolute md:top-20 md:left-40 3xl:top-28 3xl:left-40 text-black">
        <h1 className=" md:text-4xl 3xl:text-5xl font-monaBold leading-snug">
          The truest drive <br /> comes from doing <br /> what you love.
        </h1>
        <div className="mt-8">
          <div className="feature flex items-center mb-2">
            <FaCheckCircle className="text-blue-600 flex mr-3 text-sm" />
            <span className="text-md font-sans font-bold">Training for driving category B, C, and C+E</span>
          </div>
          <div className="feature flex items-center mb-2">
            <FaCheckCircle className="text-blue-600 flex mr-3 text-sm" />
            <span className="text-md font-sans font-bold">Refresher courses for all drivers</span>
          </div>
          <div className="feature flex items-center mb-10 ">
            <FaCheckCircle className="text-blue-600 flex mr-3 text-sm" />
            <span className="text-md font-sans font-bold">99.8% pass of state exams</span>
          </div>
        </div>
        <div className="buttons flex space-x-4">
          <button className="p-3 bg-orange-500 text-sm text-white font-bold rounded-lg shadow-lg">
            Courses & Pricing
          </button>
          <button className="p-3 text-sm bg-black text-white font-bold rounded-lg shadow-lg">
            About Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-20 p-6 grid grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="stat flex ">
        <div className="icon">
          <FaUser className="text-orange-500 text-4xl mx-auto mb-1 mt-1 mr-3" />            
          </div>
          <div className="info">
          <h2 className="text-4xl font-monaBold">8649</h2>
          <p className='font-bold font-sans text-sm'>Students are trained <br></br> every year by our instructors</p>
          </div>
          
        </div>
        <div className="stat flex ">
        <div className="icon">
          <FaCar className="text-orange-500 text-4xl mx-auto mb-1 mt-1 mr-3" />            
          </div>
          <div className="info">
          <h2 className="text-4xl font-monaBold">76</h2>
          <p className='font-bold font-sans text-sm'>Category B and C Vehicles <br></br> available for our students</p>
          </div>
          
        </div>
        <div className="stat flex ">
        <div className="icon">
          <FaClipboardList className="text-orange-500 text-4xl mx-auto mb-1 mt-1 mr-3" />            
          </div>
          <div className="info">
          <h2 className="text-4xl font-monaBold">99.8%</h2>
          <p className='font-bold font-sans text-sm'>Our students pass <br></br> the state exam the first time</p>
          </div>
          
        </div>
        <div className="stat flex ">
        <div className="icon">
          <FaSync className="text-orange-500 text-4xl mx-auto mb-1 mt-1 mr-3" />            
          </div>
          <div className="info">
          <h2 className="text-4xl font-monaBold">3472</h2>
          <p className='font-bold font-sans text-sm '>Our students drive so many <br></br> kilometers every day</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
