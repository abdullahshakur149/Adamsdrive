"use client"; // Make the component a Client Component
import logo from "@/public/img/Loginlogo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import React, { useEffect,useState } from 'react';
import contactimage from "@/public/img/images/images/contactus.png";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
const ContactUs = () => {
    // const [courseCategory,setcourseCategory] = useState();
    // const [courses,setcourses] = useState();

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            offset: 100,  // Offset from the original trigger point
            easing: 'ease-in-out',  // Easing function for animations
        });
        // const getData = async ()=>{
        //     try {
        //         const response = await axios.get("http://localhost:3000/api/courses/allCourses/");
        //         console.log(response)    
        //     } catch (error) {
        //         console.log(error);
        //     }
            
        // }
        // getData();
    }, []);
    


  
   
    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='text-center relative bg-default py-12'>
            <Image src={contactimage} className='absolute object-cover w-full h-full' />
            <div data-aos="fade-up" className="content relative mt-20 w-10/12 md:w-8/12 mx-auto">
                <h1 data-aos="fade-down" className="text-blue-500 font-extrabold font-mona text-sm md:text-md mb-5">Contact Us</h1>
                <h1 data-aos="fade-up" className="text-4xl font-monaBold">If you have any questions,<br /> feel free to contact</h1>

                <div className="py-12 px-4">
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                        {/* Contact Form Section (8 columns) */}
                        <div data-aos="fade-right" className="bg-white p-8 rounded-2xl shadow-lg flex-1 md:w-8/12 mb-8">
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <span className="mr-2"><FaMapMarkerAlt /></span> Online Form
                            </h2>
                            <p data-aos="fade-left" className="text-gray-600 mt-2 mb-8 text-start font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed porttitor, tristique velit eget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select City" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Email address" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="I want to sign for a course" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select Category" className="p-3 border rounded-lg w-full" />
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
                        <div data-aos="zoom-in" className="w-full md:w-4/12 bg-blue-500/95 text-start text-white rounded-lg p-10 font-sans mb-8">
                            <div className="mb-8">
                                <div className="flex items-center mb-3">
                                    <FaMapMarkerAlt className="text-white text-xl" />
                                    <h3 className="text-lg font-semibold ml-2">Our address</h3>
                                </div>
                                <p className="text-sm leading-6">
                                    100 Orchard St,<br />
                                    New York, NY 10002,<br />
                                    USA
                                </p>
                                <div className="mt-4 text-sm">
                                    <p><strong>Monday - Friday</strong><br />08:00 AM - 06:00 PM</p>
                                    <p className="mt-3"><strong>Saturday</strong><br />08:00 AM - 06:00 PM</p>
                                </div>
                                <p className="mt-4 lg:text-sm text-xs">
                                    <a href="mailto:office@muffingroup.com" className="hover:underline">office@muffingroup.com</a><br />
                                    +91-8010300865
                                </p>
                                <div className="flex mt-4 lg:space-x-3">
                                    <a href="#" className="text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaFacebook className="text-xl" />
                                    </a>
                                    <a href="#" className="text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaTwitter className="text-xl" />
                                    </a>
                                    <a href="#" className="text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </div>
                            </div>

                            {/* Help Desk Section */}
                            <div data-aos="flip-up" className="w-full mt-8 rounded-lg">
                                <p className="text-sm">
                                    Our help desk is available for you<br />every day, 07:00 AM - 10:00 PM
                                </p>
                                <div className="flex justify-center items-center mt-3">
                                    <p className=" text-xl xl:text-4xl lg:text-3xl font-bold"><span className=" xl:text-sm font-monaBold">+91</span><br /> 8010200666</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer data-aos="fade-up" className="py-8 px-4">
                        <div className="max-w-5xl mx-auto flex flex-col space-y-4 md:space-y-0">
                            <div className="flex space-x-2 mt-6 mb-5">
                                <div className="w-8 h-8 rounded-full">
                                    <Image src={logo} />
                                </div>
                                <span className="text-xl font-monaBold text-blue-600">Adam's Drive</span>
                                <button
                                    onClick={scroll}
                                    className="absolute right-5 bg-orange-500 text-white p-3 rounded-l-2xl rounded-b-none rounded-t-2xl shadow-lg"
                                    aria-label="Scroll to top"
                                >
                                    <FaArrowUp />
                                </button>
                            </div>

                            <div className="flex flex-wrap  space-x-6 text-gray-900 font-bold text-sm">
                                <a className="hover:underline" href="#courses">Courses & Pricing</a>
                                <a className="hover:underline" href="#about">About us</a>
                                <a className="hover:underline" href="#instructors">Our instructors</a>
                                <a className="hover:underline" href="#news">News</a>
                                <a className="hover:underline" href="#testimonials">Testimonials</a>
                                <a className="hover:underline" href="#contact">Contact us</a>
                            </div>
                        </div>

                        <div className="mt-2 text-gray-500 text-sm text-start">
                            © 2024 Adam's Drive All Rights Reserved. Muffin group
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
