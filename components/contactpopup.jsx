"use client";

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "aos/dist/aos.css";
import axios from "axios";

const Contactpopup = () => {
    const [courses, setcourses] = useState([]);
    const [fillteredcourse, setfilteredcourse] = useState([]);
    const [selectedData, setselectedData] = useState({
        name: "",
        email: "",
        city: "",
        phonenumber: "",
        Category: "",
        CourseTitle: "",
        Message: "",
        privacyUnderstand: ""
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/courses/allCourses/"
                );
                setcourses(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const setCategory = (Category) => {
        if (Category === "hourly") {
            const hourlyCourse = courses.filter(
                (courses) => courses.courseCategory === "hourly"
            );
            setfilteredcourse(hourlyCourse);
            setselectedData({ ...selectedData, Category: Category })
            console.log("Hourly Courses", hourlyCourse);
        }
        if (Category === "intensive") {
            const intensivecourses = courses.filter(
                (courses) => courses.courseCategory === "intensive"
            );
            setfilteredcourse(intensivecourses);
            setselectedData({ ...selectedData, Category: Category })
            console.log("intensive Courses", intensivecourses);
        }
    };

    const Submit = async (e) => {
        e.preventDefault();
        console.log(selectedData);
        // Validate data before submitting
        if (!selectedData.name || !selectedData.email || !selectedData.CourseTitle || !selectedData.Message) {
            alert("Please fill out all required fields.");
            return;
        }

        // ALAKA da biya uncomment ka 


        // try {
        //     // Send the form data to the backend
        //     const response = await axios.post("/api/contacts", selectedData);

        //     if (response.status === 200) {
        //         alert("Your message has been sent successfully!");
        //         // Optionally, reset form fields after successful submission
        //         setselectedData({
        //             name: "",
        //             email: "",
        //             city: "",
        //             phonenumber: "",
        //             Category: "",
        //             CourseTitle: "",
        //             Message: "",
        //         });
        //     } else {
        //         alert("Something went wrong. Please try again later.");
        //     }
        // } catch (error) {
        //     console.error("Error submitting form:", error);
        //     alert("Error submitting form. Please try again later.");
        // }
    };



    return (
        <div className="text-center py-12">
            <div
                data-aos="fade-up"
                className="content mt-10 w-11/12 md:w-8/12 mx-auto"
            >
                <h1 className="text-2xl md:text-4xl text-white font-monaBold">
                    Contact Us
                </h1>
                <div className="py-8 px-4">
                    <form onSubmit={Submit} className="max-w-5xl mx-auto flex flex-wrap justify-center">
                        {/* Contact Form Section */}
                        <div
                            data-aos="fade-right"
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex-1 w-full md:w-8/12 mb-8"
                        >
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <span className="mr-2">
                                    <FaMapMarkerAlt />
                                </span>
                            </h2>
                            <p
                                data-aos="fade-left"
                                className="text-gray-600 mt-2 mb-6 text-sm md:text-base text-start font-bold"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                                porttitor, tristique velit eget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="p-3 border rounded-lg w-full"
                                    onChange={(e) => setselectedData({ ...selectedData, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Select City"
                                    className="p-3 border rounded-lg w-full"
                                    onChange={(e) => setselectedData({ ...selectedData, city: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="p-3 border rounded-lg w-full"
                                    onChange={(e) => setselectedData({ ...selectedData, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="p-3 border rounded-lg w-full"
                                    onChange={(e) => setselectedData({ ...selectedData, phonenumber: e.target.value })}
                                />
                                <select
                                    id="course"
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="p-3 border rounded-lg w-full"
                                >
                                    <option
                                        className="p-3 border rounded-lg w-full"
                                        value=""
                                        disabled
                                        selected
                                        hidden
                                    >
                                        Select a Category
                                    </option>
                                    <option
                                        className="p-3 border rounded-lg w-full"
                                        value="hourly"
                                    >
                                        Hourly
                                    </option>
                                    <option
                                        className="p-3 border rounded-lg w-full"
                                        value="intensive"
                                    >
                                        Intensive
                                    </option>
                                </select>
                                <select
                                    id="hourlycourse"
                                    className={`p-3 border transition-all duration-200 ease-in ${fillteredcourse ? "flex" : "hidden"
                                        } rounded-lg w-full`}
                                    value={selectedData.CourseTitle}
                                    onChange={(e) => setselectedData({ ...selectedData, CourseTitle: e.target.value })}
                                >
                                    <option
                                        className="p-3 border rounded-lg w-full text-black text-xs"
                                        disabled
                                        selected
                                        hidden
                                    >
                                        Select a Course
                                    </option>
                                    {fillteredcourse.map((course, index) => {
                                        return (
                                            <option
                                                key={index}
                                                className="p-3 border text-xs rounded-lg w-full"
                                                placeholder=""
                                                value={course.courseTitle}
                                            >
                                                {course.courseTitle}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <textarea
                                placeholder="Your message..."
                                className="p-3 border rounded-lg w-full mb-4"
                                rows="4"
                                onChange={(e) => setselectedData({ ...selectedData, Message: e.target.value })}

                            ></textarea>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="privacyPolicy"
                                    className="mr-2"
                                    checked={selectedData.privacyUnderstand || false}
                                    onChange={(e) =>
                                        setselectedData({
                                            ...selectedData,
                                            privacyUnderstand: e.target.checked,
                                        })
                                    }
                                />
                                <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
                                    I understand, and a{" "}
                                    <span className="text-blue-500">Privacy Policy</span> data
                                    class required area.
                                </label>
                            </div>

                            <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactpopup;
