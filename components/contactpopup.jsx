"use client";

import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import 'aos/dist/aos.css';
import axios from 'axios';
const Contactpopup = () => {
    const [courses, setcourses] = useState([]);
    const [fillteredcourse, setfilteredcourse] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/courses/allCourses/");
                setcourses(response.data.data);
                // console.log(courses);  
            } catch (error) {
                console.log(error);
            }

        }
        getData();


    }
        , [])
    // console.log(courses);

    const setCategory = (Category) => {
        if (Category === "hourly") {
            const hourlyCourse = courses.filter((courses) => courses.courseCategory === "hourly")
            setfilteredcourse(hourlyCourse)
            console.log("Hourly Courses", hourlyCourse);

        }
        if (Category === "intensive") {
            const intensivecourses = courses.filter((courses) => courses.courseCategory === "intensive")
            setfilteredcourse(intensivecourses);
            console.log("intensive Courses", intensivecourses);
        }

    }
    const GetCourse = (Course) => {
       console.log(Course);

    }
    return (
        <div className='text-center   py-12'>

            <div data-aos="fade-up" className="content  mt-20 w-10/12 md:w-8/12 mx-auto">
                <h1 className="text-4xl text-white font-monaBold">Contact Us</h1>
                5
                <div className="py-12 px-4">
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                        {/* Contact Form Section (8 columns) */}
                        <div data-aos="fade-right" className="bg-white p-8 rounded-2xl shadow-lg flex-1 md:w-8/12 mb-8">
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <span className="mr-2 "><FaMapMarkerAlt /></span>
                            </h2>
                            <p data-aos="fade-left" className="text-gray-600 mt-2 mb-8 text-start font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed porttitor, tristique velit eget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select City" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Email address" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg w-full" />
                                <select id='course' onChange={(e) => setCategory(e.target.value)} className='p-3 border rounded-lg w-full'>
                                    <option className='p-3 border rounded-lg w-full' value="" disabled selected hidden>Select a Category</option>
                                    <option className='p-3 border rounded-lg w-full' value="hourly">Hourly</option>
                                    <option className='p-3 border rounded-lg w-full' value="intensive">Intensive</option>

                                </select>
                                {/* <input type="text" placeholder="Select Category" className="p-3 border rounded-lg w-full" /> */}



                                <select id='hourlycourse' className={`p-3 border transition-all duration-200 ease-in ${fillteredcourse ? "flex":"hidden "} rounded-lg w-full`} onChange={(e)=>GetCourse(e.target.value)}>
                                <option className='p-3 border rounded-lg w-full text-black text-xs'  disabled selected hidden>Select a Course</option>

                                    {
                                        fillteredcourse.map((course, index) => {
                                           return <option key={index} className='p-3 border text-xs rounded-lg w-full'  placeholder="" value={course.courseTitle} >{course.courseTitle}</option>

                                            
                                        })


                                    }
                                   

                                    
                                </select>
                                {/* <select id='course' className='p-3 border rounded-lg w-full'>
                                    <option className='p-3 border rounded-lg w-full' value="" disabled selected hidden>Select a Category</option>
                                    <option className='p-3 border rounded-lg w-full' value="hourly">Hourly</option>
                                    <option className='p-3 border rounded-lg w-full' value="intensive">Intensive</option>

                                </select>                             */}
                            </div>
                            <textarea placeholder="Your message..." className="p-3 border rounded-lg w-full mb-4" rows="4"></textarea>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="privacyPolicy" className="mr-2" />
                                <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
                                    I understand, and a <span className="text-blue-500">Privacy Policy</span> data class required area.
                                </label>
                            </div>
                            <button className="bg-orange-500 flex justify-start text-white py-2 px-6 rounded-lg font-semibold">Send Message</button>
                        </div>

                        {/* Address Section (4 columns) */}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contactpopup