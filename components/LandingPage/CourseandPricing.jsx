import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import bgimage from '@/public/img/images/images/Course&price.gif';

const CourseandPricing = () => {
    const card = [
        {
            Price: "$399",
            Description: "30th of theoretical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price: <span className='text-blue-700'>20$</span>,
            Signup: "Sign up"
        },
        {
            Price: "$599",
            Description: "30th of theoretical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price: <span className='text-blue-700'>20$</span>,
            Signup: "Sign up"
        },
        {
            Price: "$899",
            Description: "30th of theoretical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price: <span className='text-blue-700'>20$</span>,
            Signup: "Sign up"
        },
        

    ];
    
    return (
        <div className="main-container relative w-full h-screen mt-72 lg:mt-36 xl:-mt-20 sm:mt-80 md:mt-16">
            {/* Background image with object cover, set to full width and height */}
            <Image 
                src={bgimage} 
                className="absolute top-0 left-0 w-full h-full object-contain" 
                alt="Course Pricing Background" 
                layout="fill"  // ensures the image covers the whole container
            />
            
            {/* Semi-transparent overlay to make the image visible through the gray background */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-00 bg-opacity-50 flex flex-col justify-center items-center'>
                <h1 className=' sm:text-xs lg:text-md text-blue-500 font-monaBold mt-4'>Courses & Pricing</h1>
                <h1 className='md: text-3xl lg:text-4xl font-monaBold text-center mt-3 md:mb-10 lg:mb-8'>
                    Sign Up for a course<br /> in the selected category
                </h1>

                {/* Cards section */}
                <div className="Cards grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                    {card.map((card, index) => (
                        <div key={index} className='rounded-3xl bg-white h-auto border shadow-lg flex flex-col p-6 sm:p-8 lg:p-10'>
                            <div className="price text-blue-600 font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-10">
                                {card.Price}
                            </div>
                            <hr className="border-gray-300 mb-8" />
                            <div className="features space-y-4 mb-8">
                                {[...Array(4)].map((_, idx) => (
                                    <div key={idx} className="desc flex items-center text-gray-700 text-md">
                                        {card.icon}
                                        {card.Description}
                                    </div>
                                ))}
                            </div>
                            <div className="desc2 text-center mb-6">
                                <p className='text-gray-800 font-semibold text-md'>
                                    {card.Description2}{card.price}
                                </p>
                            </div>
                            <div className="btn text-center">
                                <button className='px-4 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition'>
                                    {card.Signup}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseandPricing;
