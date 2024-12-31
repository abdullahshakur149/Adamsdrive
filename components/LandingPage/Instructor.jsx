"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { FaFacebook, FaInstagram, FaClipboardList, FaTwitter,  FaArrowRight, FaArrowLeft } from "react-icons/fa";
import image from "@/public/img/Loginlogo.png";
import bgimage from '@/public/img/images/images/course&price.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Instructors = () => {
  const [currentindex, setcurrentindex] = useState(0);
  const [isFading, setisFading] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [isLGScreen, setIsLGScreen] = useState(false);
  useEffect(() => {
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        offset: 100,  // Offset from the original trigger point
        easing: 'ease-in-out',  // Easing function for animations
    });
}, []);
  const [instructors, setInstructors] = useState([
    {
      image: <Image src={image} alt="Rogan Massey" width={100} height={100} className="mx-auto" />,
      name: "Rogan Massey",
      status: "Practical Instructor",
      description: "Hey, my name is Massey and I am a very good instructor.",
      boardIcon: <FaClipboardList />,
      effectivenessPercent: "99.7%",
      effectivenessDesc: "Effectiveness of passing stats exam",
      facebookIcon: <FaFacebook />,
      twitterIcon: <FaTwitter />,
      instagramIcon: <FaInstagram />,
    },
  
  ]);
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
      setIsLGScreen(window.innerWidth >= 1280);

    };

    handleResize(); // Call on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show one card when screen width is md
  const instructor = isLGScreen
  ? instructors.slice(currentindex, currentindex + 3)
  : isMdScreen
  ? instructors.slice(currentindex, currentindex + 2)
  : instructors.slice(currentindex, currentindex + 1);

  const changecard = (newindex) => {
    setisFading(true);
    setTimeout(() => {
      setcurrentindex(newindex);
      setisFading(false);
    }, 500);
  }

  return (
    <div data-aos="fade-up" className="relative mt-40 ">
      <Image
        src={bgimage}
        className="absolute top-0 left-0  w-full h-full object-cover"
        alt="Course Pricing Background"
        layout="fill"
      />      
      <div className="text-center mt-20 relative">
        <h1 className="text-md text-blue-500 font-monaBold mt-4">Our Instructors</h1>
        <h1 className="text-4xl font-monaBold text-center mt-3 mb-8">
          It's only you who chooses
          <br /> who will be your instructor
        </h1>
      </div>
      <div className="instructors flex justify-center relative">
        {/* Left Arrow */}
        <div className="my-auto mx-auto  z-50 -translate-x-10 sm:-translate-x-20 lg:translate-x-0  ">
          {currentindex !== 0 && (
            <button
              className="text-xl bg-blue-500 z-50    text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={() => changecard(currentindex - 1)}
            >
              <FaArrowLeft />
            </button>
          )}
        </div>

        {/* Instructor Cards */}
        <div className="flex justify-center  w-1/3 transition-opacity duration-500">
          {instructor.map((instructor, index) => (
            <div
              key={index}
              className={`m-1 transition-opacity   duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
            >
              <div className="w-full bg-white rounded-3xl relative mt-10  h-auto border shadow-md flex-col p-14">
                <div className="image absolute -top-8 left-0 right-0 rounded-3xl ">{instructor.image}</div>
                <div className="status text-blue-600 font-monaBold text-xl pt-5 text-center mb-7">
                  {instructor.name}
                  <br />
                  <span className="text-xs text-neutral-400">{instructor.status}</span>
                </div>

                <div className="description text-center">
                  <div className="description1 mb-5 font-mona font-bold">
                    {instructor.description}
                  </div>
                  <div className="icon flex justify-center mb-5 text-orange-500 text-3xl">
                    {instructor.boardIcon}
                  </div>
                  <div className="icon flex justify-center font-monaBold text-3xl">
                    {instructor.effectivenessPercent}
                  </div>
                  <div className="icon flex justify-center font-sans text-sm text-gray-400 mb-5">
                    {instructor.effectivenessDesc}
                  </div>

                  <div className="social-icons flex justify-center">
                    <button className="m-2 text-neutral-600 bg-gray-300 p-4 rounded-3xl">
                      {instructor.facebookIcon}
                    </button>
                    <button className="m-2 text-neutral-600 bg-gray-300 p-4 rounded-3xl">
                      {instructor.twitterIcon}
                    </button>
                    <button className="m-2 text-neutral-600 bg-gray-300 p-4 rounded-3xl">
                      {instructor.instagramIcon}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>

        {/* Right Arrow */}
        <div className="my-auto mx-auto z-50 translate-x-10 sm:translate-x-20 lg:translate-x-0   ">
          {currentindex !== instructors.length - 1 && (
             <button
             className="text-xl bg-blue-500 z-50   text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
             onClick={() => changecard(currentindex + 1)}
           >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center z-50 mt-6 mb-10">
        {instructors.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-2 z-50 rounded-full cursor-pointer ${currentindex === index ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => changecard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
