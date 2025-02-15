"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

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
  // courses and pricing fixed

  return (
    <div className="relative w-full min-h-screen py-16 md:py-24 lg:py-32">
      <Image
        src={"/img/images/images/course&price.gif"}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Course Pricing Background"
        fill
        priority
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h3
            data-aos="fade-in"
            className="text-blue-500 font-bold text-sm md:text-base lg:text-lg mb-4"
          >
            Courses & Pricing
          </h3>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Best Sellers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {bestcourses.map((course, index) => (
            <div
              key={course.courseId}
              className="bg-white rounded-3xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:scale-102"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="text-blue-600 font-bold text-3xl md:text-4xl text-center mb-8">
                £{course.coursePrice}
              </div>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-4 mb-8">
                {/* Course Description */}
                <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaCheckCircle className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <span className="ml-4 font-medium text-gray-700">
                    {course.courseDescription}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                  <span className="ml-4 font-medium text-gray-700">
                    Duration: {course.duration} hours
                  </span>
                </div>

                {/* Fast Track Test */}
                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                  <span className="ml-4 font-medium text-gray-700">
                    Fast Track Test:{" "}
                    {course.fastTrackTest ? "Included" : "Not Included"}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-center font-medium">
                  Category:{" "}
                  <span className="text-blue-600">{course.courseCategory}</span>
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/Info"
                  onClick={() => handleBookNow(course)}
                  className="inline-block w-full md:w-auto px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseandPricing;
