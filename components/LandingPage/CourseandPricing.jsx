"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import bgimage from "@/public/img/images/images/course&price.gif";
import "aos/dist/aos.css";
import Aos from "aos";
import icon1 from "@/public/img/images/images/icon1.png";
import icon2 from "@/public/img/images/images/11.png";
import axios from "axios";
import Link from "next/link";

const CourseandPricing = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [bestcourses, setbestcourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axios.get(`${url}/bestsellers`);
        setbestcourses(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleBookNow = (course) => {
    if (course) {
      const courseData = {
        courseCategory: course.courseCategory,
        courseTitle: course.courseTitle,
        coursePrice: course.coursePrice,
        courseDuration: course.duration,
        courseid: course._id,
      };
      localStorage.setItem("coursedetail", JSON.stringify(courseData));
    }
  };

  return (
    <div className="main-container relative w-full h-screen  mt-5   md:mt-52  md:mb-64  xl:mt-10 2xl:-mt-20 ">
      <Image
        src={bgimage}
        className="absolute top-0 left-0 w-full h-full object-contain"
        alt="Course Pricing Background"
        fill
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-00 bg-opacity-50 flex flex-col justify-center items-center ">
        <h1
          data-aos="fade-in"
          className="sm:text-xs lg:text-md text-blue-500 font-monaBold max-sm:mt-52 md:mt-40"
        >
          Courses & Pricing
        </h1>
        <h1
          data-aos="fade-up"
          className="text-3xl lg:text-5xl mt-6 font-monaBold text-center  md:mb-10 lg:mb-20"
        >
          Best Sellers
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8 p-5">
          {bestcourses.map((course, index) => {
            // Choose an icon based on the index for variety
            const icon = [icon1, icon2][index % 2];
            return (
              <div
                key={course.courseId}
                className="rounded-3xl lg:w-2/3 bg-white h-auto border shadow-lg flex flex-col p-6 sm:p-8 lg:p-10 mt-14 max-w-sm md:max-w-md"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                {/* <div className="image absolute -top-12 left-0 right-0 rounded-3xl">
                  <Image
                    src={icon}
                    alt={course.courseTitle}
                    width={60}
                    height={100}
                    className="mx-auto"
                  />
                </div> */}

                <div className="price text-blue-600 font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-10 mt-10">
                  £ {course.coursePrice}
                </div>
                <hr className="border-gray-300 mb-8" />

                {/* Enhanced Features Section */}
                <div className="features space-y-4 mb-8">
                  <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                    <FaCheckCircle className="text-blue-600 m-1 text-4xl" />
                    <span className="font-semibold">
                      {course.courseDescription}
                    </span>
                  </div>
                  <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                    <FaCheckCircle className="text-blue-600 m-1 text-xl" />
                    <span className="font-semibold">
                      Duration: {course.duration} hours
                    </span>
                  </div>
                  <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                    <FaCheckCircle className="text-blue-600 m-1 text-xl" />
                    <span className="font-semibold">
                      Fast Track Test:{" "}
                      {course.fastTrackTest ? "Included" : "Not Included"}
                    </span>
                  </div>
                </div>

                {/* Enhanced Category Section */}
                <div className="desc2 text-center p-4 bg-blue-100 border-2 border-blue-300 rounded-lg hover:bg-blue-200 transition">
                  <p className="text-gray-800 font-semibold text-md">
                    Category:{" "}
                    <span className="text-blue-600">
                      {course.courseCategory}
                    </span>
                  </p>
                </div>

                <div className="btn text-center mt-16">
                  <Link
                    onClick={() => handleBookNow(course)}
                    href="/Info"
                    className="px-4 py-4 font-semibold text-white text-xl bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseandPricing;
