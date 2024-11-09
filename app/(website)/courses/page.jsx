"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';
import axios from 'axios';

const Courses = () => {
    const [Course, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoursesData = async () => {
            try {
                const response = await axios.get('/api/courses/');
                console.log(response.data)
                if (response.data) {
                    setCourses(response.data.courses);
                }
            } catch (error) {
                console.error("Error fetching courses data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, []);

    if (loading) return <div className='mx-auto my-auto'>Loading courses...</div>;

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar />
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {Course.map((course) => (
                    <div key={course.courseId} className="p-4 border rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">{course.courseTitle}</h3>
                        <p className="mt-1 text-gray-600">{course.courseDescription}</p>
                        <p className="mt-1 text-gray-500">Category: {course.courseCategory}</p>
                        <p className="mt-1 text-gray-500">Price: ${course.coursePrice}</p>
                        <p className="mt-1 text-gray-500">Duration: {course.duration} hours</p>
                        {course.bestSeller && <span className="text-red-500 font-bold">Best Seller</span>}
                        <Link className="text-blue-500 mt-3 inline-block" href={`/courses/${course.courseId}`}>
                             Learn More
                        </Link>
                    </div>
                ))} */}
            </div>
            </div>
            
        </div>
    );
};

export default Courses;
