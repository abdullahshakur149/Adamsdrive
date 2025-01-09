"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import axios from "axios";
import { FaArrowRight, FaClock, FaCheckCircle, FaMoneyBill } from "react-icons/fa";
import ContactUs from "@/components/LandingPage/ContactUs";
import Image from "next/image";

import courseprice from "@/public/img/images/images/course&price.gif";
import steeringImage from "@/public/Steeringpicture.png";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Courses = () => {
  const [Course, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axios.get(`${url}/courses/`);
        if (response.data) {
          setCourses(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching courses data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  if (loading)
    return (
      <div className="flex font-bold text-4xl justify-center items-center mt-60">
        Loading courses...
      </div>
    );

  return (
    <div>
      {/* Background Image */}
      <Image
        src={courseprice}
        className="fixed -z-50 object-cover top-0 w-screen h-screen"
        alt="Background"
      />

      <div className="w-11/12 mx-auto">
        <Navbar />

        {/* Course Section */}
        {/* Course Section */}
        <div className="content rounded-xl">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-monaBold text-center mt-16 p-4 text-blue-700"
          >
            Intensive Courses
          </h1>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-center  w-2/3 mx-auto text-gray-600">
            Discover intensive driving courses for all levels,<br></br>tailored to your needs and schedule!
          </p>

          {/* Link Button */}
          <div className="flex justify-center mt-6">
            <Link
              href="/pick-up"
              className="bg-orange-500 text-white font-semibold text-sm md:text-lg py-2 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Checkout Hourly Courses
            </Link>
          </div>

          {/* Main Course Info */}
          <div className="courseInfo flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
            {/* Image Section */}
            <div className="w-full lg:order-1 order-2 lg:w-6/12">
              <Image
                src={steeringImage}
                alt="Steering image"
                className="w-full h-auto object-cover p-4 md:p-10"
              />
            </div>

            {/* Carousel Section */}
            <div className="w-full lg:order-2 order-1 lg:w-5/12">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation  
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
              >
                {Course.map((course) => (
                  <SwiperSlide key={course.courseId}>
                    <div className="relative rounded-3xl p-16 bg-white/50 border shadow-lg md:p-8 flex flex-col items-center gap-4 text-center">
                      {/* Title Section */}
                      <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700">
                        {course.Duration}
                      </h2>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {course.courseTitle}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-lg text-gray-600 max-w-md">
                        {course.courseDescription}
                      </p>

                      {/* Icons and Highlights */}
                      <div className="flex justify-center gap-6 mt-4">
                        <div className="flex flex-col items-center">
                          <FaClock className="text-blue-500 text-3xl md:text-4xl" />
                          <span className="mt-2 text-sm font-medium">
                            {course.fastTrackIncluded ? "Fast Track Included" : ""}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          {course.bestSeller ? <FaMoneyBill className="text-blue-500 text-3xl md:text-4xl" />: ""}
                          <span className="mt-2 text-sm font-medium">
                            {course.bestSeller ? "Best Seller" : ""}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <FaCheckCircle className="text-blue-500 text-3xl md:text-4xl" />
                          <span className="mt-2 text-sm font-medium">
                            {course.fastTrackTest ? "Test Available" : ""}
                          </span>

                        </div>
                      </div>

                      {/* Price */}
                      <p className="text-2xl md:text-4xl font-bold text-blue-600 mt-4">
                        £ {course.coursePrice}
                      </p>

                      {/* Book Now Button */}
                      <Link
                        href={`/courses/${course.courseId}`}
                        className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 mt-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 text-sm md:text-lg font-semibold"
                      >
                        <span className="mr-2">Book Now</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Hourly Courses Section */}

        </div>


        {/* Footer */}
        <div className="footer mt-10">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Courses;
