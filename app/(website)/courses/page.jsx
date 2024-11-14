"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import ContactUs from '@/components/LandingPage/ContactUs';

const Courses = () => {
    const [Course, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoursesData = async () => {
            try {
                const response = await axios.get('/api/courses/');
                if (response.data) {
                    setCourses(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching courses data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, []);

    if (loading) return <div className='flex font-bold text-4xl justify-center items-center mt-60'>Loading courses...</div>;

    return (
        <div className="w-11/12 mx-auto ">
            <Navbar />
            <div className="content bg-gradient-to-r rounded-xl from-gray-300 to-gray-200">
            <h1 data-aos="fade-up" className='text-3xl lg:text-4xl font-monaBold text-center mt-16 p-4 text-blue-700 '>
                intensive Courses<br /> 
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8 p-5 mt-10 ">
                {Course.map((course) => (
                    <div 
                        key={course.courseId}
                        className="relative rounded-3xl bg-white h-auto border shadow-lg flex flex-col p-6 sm:p-8 lg:p-10 mt-14 max-w-sm md:max-w-md"
                        style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} // Ensures the button stays at the bottom
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-center text-cyan-700 mb-4">
                                {course.courseTitle}
                            </h3>
                            
                            <p className="text-gray-700 text-base mb-4 text-center">
                                {course.courseDescription}
                            </p>
                        </div>
                        
                        <div className="text-center mt-4">
                            <Link 
                                href={`/courses/${course.courseId}`} 
                                className="inline-flex items-center w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-semibold"
                            >
                                <span className="mr-2">Learn More</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <div className="footer mt-10">
                <ContactUs />
            </div>
        </div>
    );
};

export default Courses;
