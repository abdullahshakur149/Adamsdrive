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
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute -top-16 left-1/4 z-10">
            <Image
              src={blueicon}
              alt="Blue Icon"
              className="opacity-75 object-contain"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={logo}
              alt="aboutus"
              className="object-cover w-full h-full rounded-l-2xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <div className="text-center lg:text-left mb-8 md:mb-12">
            <h3 className="text-blue-500 font-bold text-sm md:text-base mb-4">
              About Lane View Driving School
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Our advantage is unmatched experience{" "}
              <br className="hidden md:block" />
              and exceptional training
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* History Section */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left mb-6">
                <span className="text-blue-600 text-sm font-bold">Since</span>
                <div className="text-blue-600 text-5xl md:text-6xl font-bold">
                  2020
                </div>
              </div>
              <p className="text-sm md:text-base mb-4">
                With a high amount of experience, Lane View Driving School has
                helped thousands achieve safe and confident driving skills.
              </p>
              <p className="text-sm md:text-base">
                Our students enjoy a 89% higher pass rate than the national
                average, making us a trusted choice for new drivers.
              </p>
            </div>

            {/* Additional Information */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <p className="text-sm md:text-base">
                We provide expert instructors, tailored lessons, and flexible
                scheduling to suit every learner's needs.
              </p>
              <p className="text-sm md:text-base">
                Lane view offers student discounts, affordable pricing plans,
                and comprehensive courses for beginners and experienced drivers
                alike.
              </p>
              <p className="text-sm md:text-base">
                Join us and experience driving lessons that prioritize your
                safety, confidence, and success!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage_Experience;
