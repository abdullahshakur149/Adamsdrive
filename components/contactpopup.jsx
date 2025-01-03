"use client";

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "aos/dist/aos.css";
import axios from "axios";

const Contactpopup = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourse, setFilteredCourse] = useState([]);
    const [selectedData, setSelectedData] = useState({
        name: "",
        city: "",
        email: "",
        phonenumber: "",
        courseCategory: "",
        courseTitle: "",
        message: "",
        privacyUnderstand: false,
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/courses/allCourses/"
                );
                setCourses(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const setCourseCategory = (courseCategory) => {
        const filtered = courses.filter((course) => course.courseCategory === courseCategory);
        setFilteredCourse(filtered);
        setSelectedData({ ...selectedData, courseCategory });
    };

    const Submit = async (e) => {
        e.preventDefault();

        // Validate required fields
        const { name, email, courseTitle, message, privacyUnderstand } = selectedData;
        if (!name || !email || !courseTitle || !message || !privacyUnderstand) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            const url = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await axios.post(`${url}contact/`, selectedData);
            if (response.status === 200) {
                alert("Your message has been sent successfully!");
                setSelectedData({
                    name: "",
                    city: "",
                    email: "",
                    phonenumber: "",
                    courseCategory: "",
                    courseTitle: "",
                    message: "",
                    privacyUnderstand: false,
                });
                setFilteredCourse([]);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again later.");
        }
    };

    return (
        <div className="text-center py-12">
            <div data-aos="fade-up" className="content mt-10 w-11/12 md:w-8/12 mx-auto">
                <h1 className="text-2xl md:text-4xl text-white font-monaBold">Contact Us</h1>
                <div className="py-8 px-4">
                    <form onSubmit={Submit} className="max-w-5xl mx-auto flex flex-wrap justify-center">
                        <div
                            data-aos="fade-right"
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex-1 w-full md:w-8/12 mb-8"
                        >
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                            </h2>
                            <p
                                data-aos="fade-left"
                                className="text-gray-600 mt-2 mb-6 text-sm md:text-base text-start font-bold"
                            >
                                Please fill in the form to reach out to us. We’ll get back to you shortly.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="p-3 border rounded-lg w-full"
                                    value={selectedData.name}
                                    onChange={(e) =>
                                        setSelectedData({ ...selectedData, name: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Select City"
                                    className="p-3 border rounded-lg w-full"
                                    value={selectedData.city}
                                    onChange={(e) =>
                                        setSelectedData({ ...selectedData, city: e.target.value })
                                    }
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="p-3 border rounded-lg w-full"
                                    value={selectedData.email}
                                    onChange={(e) =>
                                        setSelectedData({ ...selectedData, email: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="p-3 border rounded-lg w-full"
                                    value={selectedData.phonenumber}
                                    onChange={(e) =>
                                        setSelectedData({ ...selectedData, phonenumber: e.target.value })
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
                                            setSelectedData({ ...selectedData, courseTitle: e.target.value })
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
                                    setSelectedData({ ...selectedData, message: e.target.value })
                                }
                            ></textarea>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="privacyPolicy"
                                    className="mr-2"
                                    checked={selectedData.privacyUnderstand}
                                    onChange={(e) =>
                                        setSelectedData({
                                            ...selectedData,
                                            privacyUnderstand: e.target.checked,
                                        })
                                    }
                                />
                                <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
                                    I understand, and a{" "}
                                    <span className="text-blue-500">Privacy Policy</span> data class
                                    required area.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactpopup;
