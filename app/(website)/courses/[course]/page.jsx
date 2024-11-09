// pages/courses/[course]/page.jsx
'use client';
import Navbar from '@/components/shared/Navbar/Navbar';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CourseDetails = () => {
    const { course: courseId } = useParams();
    const [courseDetail, setCourseDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [postcode, setPostcode] = useState('');

    useEffect(() => {
        const fetchCoursesData = async () => {
            try {
                const response = await axios.get('/api/courses');
                const courses = response.data.data;

                const matchedCourse = courses.find((c) => c.courseId === courseId);
                setCourseDetail(matchedCourse);
            } catch (error) {
                console.error("Error fetching course details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, [courseId]);

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handleGetPrices = () => {
        console.log("Postcode:", postcode);
    };

    const handleBookNow = () => {
        // Implement booking logic here, or navigate to a booking page.
        console.log("Book Now clicked");
    };

    if (loading) return <div className='flex justify-center items-center mt-60 text-3xl font-monaBold'>Loading Course...</div>;
    if (!courseDetail) return <div className="text-center mt-20 text-red-500">Course not found.</div>;

    return (
        <div className="w-11/12 mx-auto">
                            <Navbar />

<div className="lg:w-1/3 mx-auto    mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {/* "Find lesson pricing near you" Section */}


            {/* Course Title */}
            <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">{courseDetail.courseTitle}</h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6">{courseDetail.courseDescription}</p>

            {/* Course Details */}
            <div className="flex flex-col  gap-4">
                <div className="flex">
                    <span className="text-gray-600 pr-3 font-semibold">Category:</span>
                    <span className="text-gray-800 font-bold">{courseDetail.courseCategory}</span>
                </div>



                <div className="flex ">
                    <span className="text-gray-600 pr-3 font-semibold">Duration:</span>
                    <span className="text-gray-800 font-bold">{courseDetail.duration} hours</span>
                </div>

                <div className="fasttrack-inclued w-2/3 font-monaBold mx-auto ">
                    {/* Fast Track Options */}
                    {courseDetail.fastTrackIncluded && (
                        <div className="text-center py-2 m-2   bg-green-100 text-green-800 rounded-lg mt-4">
                            Fast Track Included
                        </div>
                    )}

                    {courseDetail.fastTrackTest && (
                        <div className="text-center py-2 bg-green-100 text-green-800 rounded-lg">
                            Fast Track Test Available
                        </div>
                    )}
                </div>
                {/* Best Seller Badge */}
                {courseDetail.bestSeller && (
                    <div className="text-center py-2 mt-4 lg:w-1/3 mx-auto font-monaBold  bg-yellow-100 text-yellow-800 rounded-lg font-semibold">
                        Best Seller
                    </div>
                )}


                <div className="p-4  bg-blue-50 rounded-lg mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Find lesson pricing near you:</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-grow">
                            <FaMapMarkerAlt className="absolute top-2.5 left-3 text-blue-500" />
                            <input
                                type="text"
                                placeholder="Postcode"
                                value={postcode}
                                onChange={handlePostcodeChange}
                                className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <button
                            onClick={handleGetPrices}
                            className="bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600"
                        >
                            GET PRICES
                        </button>
                    </div>
                </div>

                {/* "Prices from £580" and "Book Now" Button */}
                <div className="p-4 bg-blue-50 rounded-lg mb-6 text-center">
                    <p className="text-xl font-semibold text-gray-700 mb-4">Prices from</p>
                    <p className="text-3xl font-bold text-blue-800">£{courseDetail.coursePrice}</p>
                    <button
                        onClick={handleBookNow}
                        className="mt-4 w-full lg:w-1/3 bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>
        </div>
            </div>
        
    );
};

export default CourseDetails;
