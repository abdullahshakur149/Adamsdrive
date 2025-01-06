"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "@/public/img/driving.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import "@/app/globals.css";
import blueicon from "@/public/img/images/images/blueicons.png";
const Advantage_Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="flex lg:flex-row flex-col m-5 exp md:mt-96 lg:-mt-0 xl:mt-20"
    >
      <div className="xl:flex hidden">
        <Image
          src={blueicon}
          className="absolute z-20 opacity-75 object-cover -top-14 xl:left-60 2xl:left-96"
        />
      </div>
      <div className="relative xl:w-6/12 w-full xl:flex hidden">
        <Image
          src={logo}
          alt="aboutus"
          className="object-cover w-full rounded-l-2xl"
        />
      </div>

      <div className="w-full xl:w-6/12 bg-white rounded-r-3xl shadow-lg flex flex-col p-6 md:p-10">
        {/* About Us Title */}
        <div className="text-center mt-6 lg:mt-12">
          <h1 className="text-sm md:text-base text-blue-500 font-bold mt-4">
            About Lane View Driving School
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-monaBold mt-3 mb-8">
            Our advantage is unmatched experience <br /> and exceptional
            training
          </h2>
        </div>

        {/* History Section */}
        <div className="history flex flex-col md:flex-row items-center md:items-start pl-0 md:pl-10 mt-6 md:mt-16 mx-auto space-y-6 md:space-y-0">
          {/* Since 1992 Section */}
          <div className="w-full lg:w-6/12 flex flex-col items-center md:items-start md:p-2">
            <span className="text-blue-600 font-bold text-xs md:text-sm">
              Since
            </span>
            <span className="text-blue-600 font-monaBold text-5xl md:text-6xl xl:text-7xl">
              2020
            </span>

            <div className="mt-5 md:mt-7 mb-5 md:mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold">
                With a high amount of experience, Lane View Driving School has
                helped thousands achieve safe and confident driving skills.
              </p>
              <p className="mt-4 md:mt-10 text-xs md:text-sm font-semibold">
                Our students enjoy a 89% higher pass rate than the national
                average, making us a trusted choice for new drivers.
              </p>
            </div>
          </div>

          {/* Additional Text Section */}
          <div className="w-full md:w-6/12 md:p-2 md:pr-6 text-center md:text-left">
            <p className="font-semibold text-xs md:text-sm">
              We provide expert instructors, tailored lessons, and flexible
              scheduling to suit every learner's needs.
            </p>
            <p className="mt-4 md:mt-10 text-xs md:text-sm">
              Lane view offers student discounts, affordable pricing plans, and
              comprehensive courses for beginners and experienced drivers alike.
            </p>
            <p className="mt-4 md:mt-10 text-xs md:text-sm">
              Join us and experience driving lessons that prioritize your
              safety, confidence, and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage_Experience;
