"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBackward, FaFacebook, FaForward, FaInstagram, FaPaperclip, FaTwitter } from "react-icons/fa";
import image from "@/public/img/Loginlogo.png";

const Instructors = () => {
  const [currentindex, setcurrentindex] = useState(0);
  const [isFading,setisFading] = useState(false);
  const [instructors, setInstructors] = useState([
    {
      image: <Image src={image} alt="Rogan Massey" width={100} height={100} className="mx-auto" />,
      name: "Rogan Massey",
      status: "Practical Instructor",
      description: "Hey, my name is Massey and I am a very good instructor.",
      boardIcon: <FaPaperclip />,
      effectivenessPercent: "99.7%",
      effectivenessDesc: "Effectiveness of passing stats exam",
      facebookIcon: <FaFacebook />,
      twitterIcon: <FaTwitter />,
      instagramIcon: <FaInstagram />,
    },
    {
      image: <Image src={image} alt="Rogan Massey" width={100} height={100} className="mx-auto" />,
      name: "Rogan ",
      status: "Practical Instructor",
      description: "Hey, my name is Massey and I am a very good instructor.",
      boardIcon: <FaPaperclip />,
      effectivenessPercent: "99.7%",
      effectivenessDesc: "Effectiveness of passing stats exam",
      facebookIcon: <FaFacebook />,
      twitterIcon: <FaTwitter />,
      instagramIcon: <FaInstagram />,
    },
    {
      image: <Image src={image} alt="Rogan Massey" width={100} height={100} className="mx-auto" />,
      name: "Rogan Mass",
      status: "Practical Instructor",
      description: "Hey, my name is Massey and I am a very good instructor.",
      boardIcon: <FaPaperclip />,
      effectivenessPercent: "99.7%",
      effectivenessDesc: "Effectiveness of passing stats exam",
      facebookIcon: <FaFacebook />,
      twitterIcon: <FaTwitter />,
      instagramIcon: <FaInstagram />,
    },
    {
      image: <Image src={image} alt="Rogan Massey" width={100} height={100} className="mx-auto" />,
      name: "Rogan Masse",
      status: "Practical Instructor",
      description: "Hey, my name is Massey and I am a very good instructor.",
      boardIcon: <FaPaperclip />,
      effectivenessPercent: "99.7%",
      effectivenessDesc: "Effectiveness of passing stats exam",
      facebookIcon: <FaFacebook />,
      twitterIcon: <FaTwitter />,
      instagramIcon: <FaInstagram />,
    },
  ]);

  // Display only the first instructor
  const instructor = instructors.slice(currentindex,currentindex+3);
    
  const changecard = (newindex)=>{
    setisFading(true);
    setTimeout(() => {
      setcurrentindex(newindex);
      setisFading(false);
    }, 500);
  }

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-md text-blue-500 font-monaBold mt-4">Courses & Pricing</h1>
        <h1 className="text-4xl font-monaBold text-center mt-3 mb-8">
          It's only you who chooses
          <br /> who will be your instructor
        </h1>
      </div>
      <div className="instructors flex justify-center">
        <div className="my-auto">
        {currentindex!==0 && (<button className="text-xl" onClick={()=>changecard(currentindex-1)}><FaBackward className="text-blue-500 p-2 text-5xl rounded-3xl bg-gray-400"/></button>) }  
        </div>
      
        <div className="flex justify-center  w-3/4 transition-opacity duration-500">
          {instructor.map((instructor, index) => (
            <div
              key={index}
              className={`md:w-2/6 w-full  m-1 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
            >
              <div className="w-full bg-white rounded-lg  h-auto border  shadow-md flex-col p-14">
                <div className="image">{instructor.image}</div>
                <div className="status text-blue-600 font-monaBold text-2xl pt-5 text-center mb-7">
                  {instructor.name}
                  <br />
                  <span className="text-xs text-neutral-400">{instructor.status}</span>
                </div>

                <div className="description text-center ">
                  
                    <div className="description1 mb-5 font-mona font-bold">
                      {instructor.description}
                    </div>
                    <div className="icon flex justify-center mb-5">
                      {instructor.boardIcon}
                    </div>
                    <div className="icon flex justify-center font-monaBold text-3xl ">
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

      <div className="my-auto ml-6">
      {currentindex!==instructors.length-1 && (<button className="text-xl" onClick={()=>changecard(currentindex+1)}><FaForward className="text-blue-500 p-2 text-5xl rounded-3xl bg-gray-400"/></button>) }        </div>
      
      </div>
      
      <div className="flex justify-center mt-6 mb-10">
        {instructors.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${
              currentindex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => changecard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
