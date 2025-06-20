"use client"; // Make the component a Client Component
import logo from "@/public/img/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { FaUser, FaClipboardList } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import contactimage from "@/public/img/images/images/contactus.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [selectedData, setSelectedData] = useState({
    name: "",
    postalcode: "",
    email: "",
    phonenumber: "",
    courseCategory: "",
    courseTitle: "",
    message: "",
    privacyUnderstand: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
    });

    const getData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axios.get(`${url}/courses/allCourses/`);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getData();
  }, []);

  const setCourseCategory = (courseCategory) => {
    const filtered = courses.filter(
      (course) => course.courseCategory === courseCategory
    );
    setFilteredCourse(filtered);
    setSelectedData((prevData) => ({ ...prevData, courseCategory }));
  };

  const Submit = async (e) => {
    e.preventDefault();

    const { name, email, courseTitle, message, privacyUnderstand } =
      selectedData;
    if (!name || !email || !courseTitle || !message || !privacyUnderstand) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await axios.post(`${url}/contact/`, selectedData);

      if (response.data.success === true) {
        toast.success("Your message has been sent successfully!");
        setSelectedData({
          name: "",
          postalcode: "",
          email: "",
          phonenumber: "",
          courseCategory: "",
          courseTitle: "",
          message: "",
          privacyUnderstand: false,
        });
        setFilteredCourse([]);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-center relative bg-default py-12">
      <Image
        src={contactimage}
        alt="Contact Us"
        className="absolute object-cover w-full h-full"
      />
      <div
        data-aos="fade-up"
        className="content relative mt-20 w-10/12 md:w-8/12 mx-auto"
      >
        <h1
          data-aos="fade-down"
          className="text-blue-500 font-extrabold text-sm md:text-md mb-5"
        >
          Contact Us
        </h1>
        <h1 data-aos="fade-up" className="text-4xl font-bold mt-4 mb-4">
          If you have any questions,
          <br /> feel free to contact us
        </h1>
        <div className="px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
            {/* Contact Form Section */}
            <form
              onSubmit={Submit}
              className="flex-1 bg-white p-8 rounded-lg shadow-lg text-start"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center gap-6">
                {/* 246+ Stat */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-full">
                  <FaUser className="text-orange-500 text-3xl mr-3" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">246+</h2>
                    <p className="text-xs xl:text-base font-bold">
                      Over 246+ have passed so far and counting!
                    </p>
                  </div>
                </div>

                {/* 89% Stat */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-full">
                  <FaClipboardList className="text-orange-500 text-3xl mr-3" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">89%</h2>
                    <p className="text-xs xl:text-base font-bold">
                      Our students pass the state exam the first time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Form Inputs */}
                <input
                  type="text"
                  placeholder="Your name"
                  className="p-3 border rounded-lg w-full"
                  value={selectedData.name}
                  onChange={(e) =>
                    setSelectedData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Enter postalcode"
                  className="p-3 border rounded-lg w-full"
                  value={selectedData.postalcode}
                  onChange={(e) =>
                    setSelectedData((prevData) => ({
                      ...prevData,
                      postalcode: e.target.value,
                    }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-3 border rounded-lg w-full"
                  value={selectedData.email}
                  onChange={(e) =>
                    setSelectedData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg w-full"
                  value={selectedData.phonenumber}
                  onChange={(e) =>
                    setSelectedData((prevData) => ({
                      ...prevData,
                      phonenumber: e.target.value,
                    }))
                  }
                />
                <select
                  className="p-3 border rounded-lg w-full"
                  value={selectedData.courseCategory}
                  onChange={(e) => setCourseCategory(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select a course category
                  </option>
                  <option value="hourly">Hourly</option>
                  <option value="intensive">Intensive</option>
                </select>
                {filteredCourse.length > 0 && (
                  <select
                    className="p-3 border rounded-lg w-full"
                    value={selectedData.courseTitle}
                    onChange={(e) =>
                      setSelectedData((prevData) => ({
                        ...prevData,
                        courseTitle: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled hidden>
                      Select a Course
                    </option>
                    {filteredCourse.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.courseTitle}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <textarea
                placeholder="Your message..."
                className="p-3 border rounded-lg w-full mb-4"
                rows="4"
                value={selectedData.message}
                onChange={(e) =>
                  setSelectedData((prevData) => ({
                    ...prevData,
                    message: e.target.value,
                  }))
                }
              />
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2"
                  checked={selectedData.privacyUnderstand}
                  onChange={(e) =>
                    setSelectedData((prevData) => ({
                      ...prevData,
                      privacyUnderstand: e.target.checked,
                    }))
                  }
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-gray-500 text-sm"
                >
                  I understand and agree to the{" "}
                  <span className="text-blue-500">Privacy Policy</span>.
                </label>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold w-full"
              >
                Send Message
              </button>
            </form>

            {/* Address Section */}
            <div className="w-full md:w-1/3 bg-blue-500/95 text-white p-6 rounded-lg text-start">
              <h3 className="text-lg font-semibold mb-4">
                <FaMapMarkerAlt className="mr-2 inline-block text-white" /> Our
                Address
              </h3>
              <p className="text-sm leading-6 mb-4">North West London </p>
              <p className="mt-4">
                Please contact us on
                <br />
                +07423843474
              </p>
              <div className="flex mt-4 space-x-3">
                <a href="#" className="text-blue-300 p-2 bg-white rounded-full">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-300 p-2 bg-white rounded-full">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-300 p-2 bg-white rounded-full">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-gray-500">
            <div className="flex justify-between items-center px-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-blue-600">
                  Lane View Driving School
                </span>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-orange-500 p-3 rounded-full text-white shadow-lg"
                aria-label="Scroll to Top"
              >
                <FaArrowUp />
              </button>
            </div>
            <div className="mt-6 text-center">
              <ul className="flex justify-center space-x-6 text-sm font-semibold">
                <li>
                  <a href="#courses" className="hover:underline">
                    Courses & Pricing
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs">
                © 2024 Lane View Driving School. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
