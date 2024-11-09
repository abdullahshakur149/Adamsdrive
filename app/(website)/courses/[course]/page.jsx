// pages/courses/[course]/page.jsx
'use client';
import Navbar from '@/components/shared/Navbar/Navbar';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactUs from '@/components/LandingPage/ContactUs';

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
        console.log("Book Now clicked");
    };

    if (loading) return <div className='flex justify-center items-center mt-60 text-3xl font-monaBold'>Loading Course...</div>;
    if (!courseDetail) return <div className="text-center mt-20 text-red-500">Course not found.</div>;

    return (

<>
        <div className="w-11/12 mx-auto">
            <Navbar />
            </div>

            <div className="w-11/12 lg:w-3/4 mx-auto ">
                {/* Course Title */}

                <div className="data mt-20">
                    <h1 className="text-5xl font-bold text-blue-600 text-center lg:text-left mb-6">{courseDetail.courseTitle}</h1>

                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Left Column: Course Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-grow">
                            <p className="text-lg text-gray-700 mb-6">{courseDetail.courseDescription}</p>

                            <div className="flex flex-col gap-4">
                                <div className="flex ">
                                    <span className="text-gray-600 font-semibold mr-2">Category:</span>
                                    <span className="text-gray-800 text-xl font-monaBold">{courseDetail.courseCategory}</span>
                                </div>
                                <div className="flex ">
                                    <span className="text-gray-600 font-semibold mr-2">Duration:</span>
                                    <span className="text-gray-800 text-xl font-monaBold">{courseDetail.duration} hours</span>
                                </div>

                                {courseDetail.fastTrackIncluded && (
                                    <div className="text-center py-2 bg-green-100 text-green-800 rounded-lg font-semibold">
                                        Fast Track Included
                                    </div>
                                )}
                                {courseDetail.fastTrackTest && (
                                    <div className="text-center py-2 bg-green-100 text-green-800 rounded-lg font-semibold">
                                        Fast Track Test Available
                                    </div>
                                )}
                                {courseDetail.bestSeller && (
                                    <div className="text-center py-2 bg-yellow-100 text-yellow-800 rounded-lg font-semibold">
                                        Best Seller
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Booking Section */}
                        <div className="w-full lg:w-1/3 space-y-6">
                            {/* "Find lesson pricing near you" Section */}
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">Find lesson pricing near you:</h2>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-2/3">
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
                                        className="bg-pink-500 text-white  lg:px-2 lg:py-3 rounded-md font-semibold hover:bg-pink-600"
                                    >
                                        GET PRICES
                                    </button>
                                </div>
                            </div>

                            {/* "Prices from £580" and "Book Now" Button */}
                            <div className="p-4 bg-white rounded-lg shadow-md text-center">
                                <p className="text-xl font-semibold text-gray-700 mb-2">Prices from</p>
                                <p className="text-3xl font-bold text-blue-800">£{courseDetail.coursePrice}</p>
                                <button
                                    onClick={handleBookNow}
                                    className="mt-4 w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="footer mt-10">
            <ContactUs/>
            </div>
            
            </>

    );
};

export default CourseDetails;
