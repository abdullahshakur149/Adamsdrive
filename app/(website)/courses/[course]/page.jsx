// pages/courses/[course]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseDetails = () => {
    const { course: courseId } = useParams();  // Extract courseId from URL params
    const [courseDetail, setCourseDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoursesData = async () => {
            try {
                const response = await axios.get('/api/courses');  // Fetch all courses
                const courses = response.data.courses;

                const matchedCourse = courses.find((c) => c.courseId === courseId);  // Find course by courseId
                setCourseDetail(matchedCourse);
            } catch (error) {
                console.error("Error fetching course details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, [courseId]);

    if (loading) return <div>Loading course details...</div>;
    if (!courseDetail) return <div>Course not found.</div>;

    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="text-3xl font-bold">{courseDetail.courseTitle}</h1>
            <p className="mt-4 text-gray-600">{courseDetail.courseDescription}</p>
            <p className="mt-2 text-gray-500">Category: {courseDetail.courseCategory}</p>
            <p className="mt-2 text-gray-500">Price: ${courseDetail.coursePrice}</p>
            <p className="mt-2 text-gray-500">Duration: {courseDetail.duration} hours</p>
            {courseDetail.bestSeller && <span className="text-red-500 font-bold">Best Seller</span>}
            {courseDetail.fastTrackIncluded && <p className="mt-2 text-green-500">Fast Track Included</p>}
            {courseDetail.fastTrackTest && <p className="mt-2 text-green-500">Fast Track Test Available</p>}
        </div>
    );
};

export default CourseDetails;
