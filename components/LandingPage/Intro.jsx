"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  FaCheckCircle,
  FaCar,
  FaUser,
  FaSync,
  FaClipboardList,
} from "react-icons/fa";
import intro from "@/public/img/bg.png";
import "aos/dist/aos.css";
import Aos from "aos";

const IntroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className=" w-full   ">
      {/* Intro Image and Text */}
      <Image
        src={intro}
        className="w-full "
        data-aos="fade-in"
        alt="Driving School"
      />
      <div
        data-aos="fade-right"
        data-aos-delay="1500"
        className="absolute top-20   left-10 sm:top-32 sm:left-24 md:top-28 md:left-24 lg:top-40 lg:left-36 xl:top-38 xl:left-52 2xl:left-80 2xl:top-72     text-black"
      >
        <h1 className="  text-xs  sm:text-xl md:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-monaBold leading-snug">
          The truest drive <br /> comes from doing <br /> what you love.
        </h1>
        <div className="  md:mt-3 lg:mt-5 ">
          <div className="feature flex items-center sm:mb-2">
            <FaCheckCircle className="text-blue-600 flex mr-2 text-xsmall  lg:text-sm" />
            <span className="text-xsmall md:text-xs   lg:text-xs xl:text-base font-sans font-bold">
              Training for driving category B, C, and C+E
            </span>
          </div>
          <div className="feature flex items-center sm:mb-2">
            <FaCheckCircle className="text-blue-600 flex text-xsmall mr-2 text-xs  lg:text-sm" />
            <span className="text-xsmall md:text-xs   lg:text-xs xl:text-base font-sans font-bold">
              Refresher courses for all drivers
            </span>
          </div>
          <div className="feature flex items-center mb-1  lg:mb-5">
            <FaCheckCircle className="text-blue-600 text-xsmall  flex mr-2 text-xs  lg:text-sm" />
            <span className="text-xsmall md:text-xs   lg:text-xs xl:text-base font-sans font-bold">
              99.8% pass of state exams
            </span>
          </div>
        </div>
        <div className="buttons flex space-x-2 ">
          <button className=" p-1 bg-orange-500 text-xsmall md:text-xs  lg:text-xs xl:text-base xl:px-6 xl:py-3 xl:mt-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <a href="/courses">Courses & Pricing</a>
          </button>
          {/* <button className="  p-1  text-xsmall md:text-xs   lg:text-xs xl:text-base lg:px-6 xl:px-6 lg:py-2 bg-black xl:mt-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-200 ease-in-out">
            About Us
          </button> */}
        </div>
      </div>

      {/* Stats Section */}
      <div
        data-aos="fade-in"
        className="container   bg-default   p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center mx-auto lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 "
      >
        <div className="stat flex">
          <div className="icon">
            <FaUser className="text-orange-500 text-2xl sm:text-3xl md:text-2xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">
              8100+
            </h2>
            <p className="text-xs  xl:text-base font-bold font-sans">
              Students are trained <br /> every year by our instructors
            </p>
          </div>
        </div>
        <div className="stat flex">
          <div className="icon">
            <FaClipboardList className="text-orange-500 text-2xl sm:text-3xl md:text-2xl mx-auto mb-1 mt-1 mr-3" />
          </div>
          <div className="info">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-monaBold">
              81.27
            </h2>
            <p className="text-xs  xl:text-base font-bold font-sans">
              Our students pass <br /> the state exam the first time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
