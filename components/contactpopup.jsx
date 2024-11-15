"use client"; 

import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

import 'aos/dist/aos.css';
const Contactpopup = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 800, // Animation duration in milliseconds
    //         offset: 100,  // Offset from the original trigger point
    //         easing: 'ease-in-out',  // Easing function for animations
    //     });
    // }, []);

    // useEffect(()=>{
    //     const getData = ()=>{
    //         const response = 
    //     }
    // }
    // ,[])
    return (
        <div className='text-center   py-12'>
            <div data-aos="fade-up" className="content  mt-20 w-10/12 md:w-8/12 mx-auto">
                <h1 className="text-4xl text-white font-monaBold">Contact Us</h1>

                <div className="py-12 px-4">
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                        {/* Contact Form Section (8 columns) */}
                        <div data-aos="fade-right" className="bg-white p-8 rounded-2xl shadow-lg flex-1 md:w-8/12 mb-8">
                            <h2 className="text-orange-500 text-lg font-bold flex items-center">
                                <span className="mr-2 "><FaMapMarkerAlt /></span>
                            </h2>
                            <p data-aos="fade-left" className="text-gray-600 mt-2 mb-8 text-start font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed porttitor, tristique velit eget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Select City" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Email address" className="p-3 border rounded-lg w-full" />
                                <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg w-full" />
                                <select id='course' className='p-3 border rounded-lg w-full'>
                                    <option className='p-3 border rounded-lg w-full' value="" disabled selected hidden>Select a Category</option>
                                    <option className='p-3 border rounded-lg w-full' value="saab">Hourly</option>
                                    <option className='p-3 border rounded-lg w-full' value="opel">Intensive</option>
                                    
                                </select>
                                {/* <input type="text" placeholder="Select Category" className="p-3 border rounded-lg w-full" /> */}

                                <input type="text" placeholder="sign up for a course" className="p-3 border rounded-lg w-full" />
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

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contactpopup