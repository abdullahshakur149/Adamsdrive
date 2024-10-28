"use client"
import React, { useState } from 'react'
import driving from "@/public/img/driving.jpg";
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight,   } from 'react-icons/fa';
import opinion from "@/public/img/images/images/opinions.gif";
const Testimonials = () => {
  const [testimonials] = useState([
    {
      image: <Image src={driving} alt="Jessica" width={60} height={60} className="rounded-full" />,
      desc: "Only with Adam's Drive I was able to pass my dream driving license! The instructor's knowledge, approach to the student, modern cars were the key elements of my little success!",
      name_city: "Jessica, Chicago"
    },
    {
      image: <Image src={driving} alt="Abdullah" width={60} height={60} className="rounded-full" />,
      desc: "Only with Adam's Drive I was able to pass my dream driving license! The instructor's knowledge, approach to the student, modern cars were the key elements of my little success!",
      name_city: "Abdullah Shakur, Hayatabad"
    },
    {
      image: <Image src={driving} alt="Ali" width={60} height={60} className="rounded-full" />,
      desc: "Only with Adam's Drive I was able to pass my dream driving license! The instructor's knowledge, approach to the student, modern cars were the key elements of my little success!",
      name_city: "Ali Ameen, Hayatabad"
    },
    {
      image: <Image src={driving} alt="Khamaar" width={60} height={60} className="rounded-full" />,
      desc: "Only with Adam's Drive I was able to pass my dream driving license! The instructor's knowledge, approach to the student, modern cars were the key elements of my little success!",
      name_city: "Khamaar Shah, Hayatabad"
    }
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialss = testimonials.slice(currentIndex, currentIndex+testimonials.length-1)  
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white text-center relative mb-12 mt-0 ">
      <Image src={opinion} className=' absolute md:flex hidden '/>
      <h1 className="text-blue-500 font-extrabold font-mona text-sm text-md mb-5">Testimonials</h1>
      <h1 className="text-4xl font-monaBold">The opinions of our students<br></br> confirm our effectiveness</h1>

      <div className="relative  mx-auto mt-10">
        <div className="testimonial flex flex-col items-center space-y-5">
          <div className="flex space-x-2">
            {testimonialss.map((testimonial, index) => (
              <div
                key={index}
                className={` transition-all duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}
              >
                {testimonial.image}
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-700 text-center max-w-lg ">
            {testimonials[currentIndex].desc}
          </p>
          <span className="text-blue-500 font-bold">{testimonials[currentIndex].name_city}</span>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-44
         md:inset-y-0 md:left-24 lg:left-36 xl:left-80 left-0 flex items-center">
          <button onClick={handlePrev} className="text-sm bg-gray-200  text-gray-500 p-1 rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaArrowLeft size={20} />
          </button>
        </div>
        <div className="absolute inset-y-44 md:inset-y-0 md:right-24 lg:right-36 xl:right-80 right-0 flex items-center">
          <button onClick={handleNext} className="text-sm bg-gray-200  text-gray-500 p-1 rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
