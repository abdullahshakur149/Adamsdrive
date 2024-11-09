"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';
import Image from 'next/image';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import driving from "@/public/img/images/images/intro.gif";

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

    if (loading) return <div className='flex justify-center items-center mt-40'>Loading courses...</div>;

    // Define color options for each card
    const colorClasses = [
        { border: 'border-blue-600', bg: 'bg-blue-600' },
        { border: 'border-red-600', bg: 'bg-red-600' },
        { border: 'border-green-600', bg: 'bg-green-600' },
        { border: 'border-yellow-600', bg: 'bg-yellow-600' },
        { border: 'border-purple-600', bg: 'bg-purple-600' },
    ];

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar />
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Course.map((course, index) => {
                        const colorClass = colorClasses[index % colorClasses.length];
                        
                        return (
                            <div 
                                key={course.courseId} 
                                className={`relative bg-white ${colorClass.border} border-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
                            >
                                {/* Course Image */}
                                <div className="w-full h-48 relative">
                                    <Image
                                        src={driving}
                                        alt={course.courseTitle}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Course Title */}
                                    <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">{course.courseTitle}</h3>

                                    {/* Course Description */}
                                    <p className="text-gray-700 text-base mb-4 line-clamp-3">{course.courseDescription}</p>

                                    {/* Learn More Link */}
                                    <Link
                                        href={`/courses/${course.courseId}`}
                                        className={`inline-flex items-center w-full px-6 py-3 ${colorClass.bg} text-white rounded-lg hover:bg-opacity-80 transition duration-300 text-lg font-semibold`}
                                    >
                                        <span className='mr-2'>Learn More</span>
                                        <FaArrowRight />
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

export default Courses;
