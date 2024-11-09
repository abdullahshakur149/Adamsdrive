"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';

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

    if (loading) return <div className='flex justify-center items-center mt-60 text-3xl font-monaBold'>Loading courses...</div>;

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar />
                <div className="mt-10 grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {Course.map((course) => (
                        <div key={course.courseId} className="px-10 lg:w-9/12 py-10 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            {/* Course Title */}
                            <h3 className="text-xl font-semibold text-center text-blue-700 mb-2 font-monaBold">{course.courseTitle}</h3>

                            {/* Course Description */}
                            <p className="text-gray-950 text-base mb-4">{course.courseDescription}</p>

                            {/* Course Category */}
                            {/* <p className="text-gray-500 text-sm mb-4">Category: <span className="text-blue-600">{course.courseCategory}</span></p> */}

                            {/* Duration */}
                            <div className="mb-4">
                                <span className="text-gray-700 font-semibold">Duration: </span>
                                <span className="text-blue-600">{course.duration} hours</span>
                            </div>

                            {/* Learn More Link */}
                            <Link
                                href={`/courses/${course.courseId}`}
                                className="inline-flex items-center px-2 py-2 bg-blue-600 text-white  hover:bg-blue-500 transition duration-300"
                            >
                                <span className='hover:mr-2 duration-300 ease-in-out p-2'>Learn More</span>
                                <FaArrowRight className="ml-2"/>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
