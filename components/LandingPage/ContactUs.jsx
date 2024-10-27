"use client" // Make the component a Client Component
import logo from "@/public/img/Loginlogo.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react'
import contactimage from "@/public/img/images/images/contactus.png";
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const ContactUs = () => {
    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className=' text-center relative bg-default  py-12'>
            <Image src={contactimage} className='absolute object-cover w-full' />
            <div className="content relative mt-20 w-8/12 mx-auto ">
                <h1 className="text-blue-500 font-extrabold font-mona text-sm text-md mb-5">Contact Us</h1>
                <h1 className="text-4xl font-monaBold">If you have any questions,<br></br> feel free to contact</h1>

                <div className=" py-12 px-4 ">
                    <div className="max-w-5xl mx-auto flex flex-wrap ">
                        {/* Contact Form Section (8 columns) */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg flex-1 w-8/12">
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <span className="mr-2"><FaMapMarkerAlt /></span> Online Form
                            </h2>
                            <p className="text-gray-600 mt-2 mb-8 text-start font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed porttitor, tristique velit eget.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select City" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Email address" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="I want to sign for a course" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select Category" className="p-3 border rounded-lg w-full" />
                            </div>
                            <textarea placeholder="Your message..." className="p-3 border rounded-lg w-full mb-4" rows="4"></textarea>
                            <div className="flex items-center  mb-4">
                                <input type="checkbox" id="privacyPolicy" className="mr-2" />
                                <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
                                    I understand, and a <span className="text-blue-500">Privacy Policy</span> data class required area.
                                </label>
                            </div>
                            <button className="bg-orange-500 flex justify-start  text-white py-2 px-6 rounded-lg font-semibold">Send Message</button>
                        </div>

                        {/* Address Section (4 columns) */}
                        <div className="w-72 bg-blue-500/95 text-start  text-white rounded-lg p-10 font-sans">
                            <div className="mb-8">
                                {/* Icon and Title */}
                                <div className="flex items-center mb-3">
                                    <FaMapMarkerAlt className="text-white text-xl" />
                                    <h3 className="text-lg font-semibold ml-2">Our address</h3>
                                </div>

                                {/* Address */}
                                <p className="text-sm leading-6">
                                    100 Orchard St,<br />
                                    New York, NY 10002,<br />
                                    USA
                                </p>

                                {/* Opening Hours */}
                                <div className="mt-4 text-sm">
                                    <p><strong>Monday - Friday</strong><br />08:00 AM - 06:00 PM</p>
                                    <p className="mt-3"><strong>Saturday</strong><br />08:00 AM - 06:00 PM</p>
                                </div>

                                {/* Contact */}
                                <p className="mt-4 text-sm">
                                    <a href="mailto:office@muffingroup.com" className="hover:underline">office@muffingroup.com</a><br />
                                    +91-8010300865
                                </p>

                                {/* Social Icons */}
                                <div className="flex mt-4 space-x-3">
                                    <a href="#" className=" text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaFacebook className="text-xl" />
                                    </a>
                                    <a href="#" className=" text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaTwitter className="text-xl" />
                                    </a>
                                    <a href="#" className=" text-blue-600 bg-blue-300 p-2 rounded-3xl">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </div>

                            </div>

                            {/* Help Desk Section */}
                            <div className="w-full  mt-8  rounded-lg">
                                <p className="text-sm">
                                    Our help desk is available for you<br />every day, 07:00 AM - 10:00 PM
                                </p>
                                <div className="flex justify-center items-center mt-3">
                                    <p className="text-4xl font-bold"><span className="text-sm font-monaBold">+91</span><br></br> 8010200666</p>
                                </div>
                            </div>


                        </div>

                    </div>

                    <footer className=" py-8 px-4 ">
                        <div className="max-w-5xl mx-auto flex flex-col     space-y-4 md:space-y-0">
                            {/* Logo and Text */}
                            <div className="flex  space-x-2 mt-6 mb-5">
                                <div className="w-8 h-8  rounded-full">
                                    <Image src={logo} /></div> {/* Placeholder for logo image */}
                                <span className="text-xl font-monaBold text-blue-600">Adam's Drive</span>
                                <button
                                    onClick={scroll}
                                    className=" absolute right-5  bg-orange-500 text-white p-3 rounded-l-2xl  rounded-b-none rounded-t-2xl shadow-lg"
                                    aria-label="Scroll to top"
                                >
                                    <FaArrowUp />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex space-x-6 text-gray-900 font-bold   text-sm">
                                <a href="#courses">Courses & Pricing</a>
                                <a href="#about">About us</a>
                                <a href="#instructors">Our instructors</a>
                                <a href="#news">News</a>
                                <a href="#testimonials">Testimonials</a>
                                <a href="#contact">Contact us</a>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className=" mt-2  text-gray-500 text-sm text-start">
                            © 2024 BeDriver - BeTheme. All Rights Reserved. Muffin group

                        </div>

                        {/* Scroll-to-Top Button */}

                    </footer>

                </div>
            </div>

        </div>
    )
}

export default ContactUs