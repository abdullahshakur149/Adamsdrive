// pages/courses/[course]/page.jsx
'use client';
import Navbar from '@/components/shared/Navbar/Navbar';
import 'aos/dist/aos.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Aos from 'aos';
import icon1 from "@/public/img/images/images/icon1.png";
import icon2 from "@/public/img/images/images/11.png";
import axios from 'axios';
import { useParams } from 'next/navigation';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactUs from '@/components/LandingPage/ContactUs';
import Link from 'next/link';
const CourseDetails = () => {
    const { course: courseId } = useParams();
    const [courseDetail, setCourseDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [postcode, setPostcode] = useState('');
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false
        });
    }, []);

    const [bestcourses, setbestcourses] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/api/bestsellers");
                setbestcourses(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

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
        console.log(courseDetail);
        localStorage.setItem("coursedetail",JSON.stringify(courseDetail));
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
                    <h1 className="lg:text-5xl font-bold  rounded-xl  text-blue-600 text-center lg:text-left mb-6">{courseDetail.courseTitle}</h1>

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
                            <Link href={"/Info"} className="p-4 bg-white rounded-lg shadow-md text-center">
                                <p className="text-xl font-semibold text-gray-700 mb-2">Prices from</p>
                                <p className="text-3xl font-bold text-blue-800">£{courseDetail.coursePrice}</p>
                                <button
                                    onClick={handleBookNow}
                                    className="mt-4 w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
                                >
                                    BOOK NOW
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bestseller relative mt-32">
                <h1 data-aos="fade-up" className='text-3xl lg:text-4xl font-monaBold text-center mt-3 '>
                    Best Sellers<br /> 
                </h1>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8 p-5">
                    {bestcourses.map((course, index) => {
                        // Choose an icon based on the index for variety
                        const icon = [icon1, icon2][index % 2];
                        return (
                            <div key={course.courseId} className='rounded-3xl lg:w-2/3 bg-white h-auto border shadow-lg flex flex-col p-6 sm:p-8 lg:p-10 mt-14 max-w-sm md:max-w-md' data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                            <div className="image absolute -top-12 left-0 right-0 rounded-3xl">
                                <Image src={icon} alt={course.courseTitle} width={60} height={100} className="mx-auto" />
                            </div>
                        
                            <div className="price text-blue-600 font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-10 mt-10">
                                ${course.coursePrice}
                            </div>
                            <hr className="border-gray-300 mb-8" />
                        
                            {/* Enhanced Features Section */}
                            <div className="features space-y-4 mb-8">
                                <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                                    <FaCheckCircle className='text-blue-600 m-1 text-4xl' />
                                    <span className="font-semibold">{course.courseDescription}</span>
                                </div>
                                <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                                    <FaCheckCircle className='text-blue-600 m-1 text-xl' />
                                    <span className="font-semibold">Duration: {course.duration} hours</span>
                                </div>
                                <div className="desc flex items-center text-gray-700 text-md bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
                                    <FaCheckCircle className='text-blue-600 m-1 text-xl' />
                                    <span className="font-semibold">Fast Track Test: {course.fastTrackTest ? "Included" : "Not Included"}</span>
                                </div>
                            </div>
                        
                            {/* Enhanced Category Section */}
                            <div className="desc2 text-center p-4 bg-blue-100 border-2 border-blue-300 rounded-lg hover:bg-blue-200 transition">
                                <p className='text-gray-800 font-semibold text-md'>
                                    Category: <span className="text-blue-600">{course.courseCategory}</span>
                                </p>
                            </div>
                        
                            <div className="btn text-center mt-16">
                                <Link href={"/Info"} className='px-4 py-4 font-semibold text-white text-xl bg-orange-500 rounded-lg hover:bg-orange-600 transition'>
                                    Book Now
                                </Link>
                            </div>
                        </div>
                        
                        );
                    })}
                </div>
            </div>
            <div className="footer mt-10">
            <ContactUs/>
            </div>
            
            </>

    );
};

export default CourseDetails;
