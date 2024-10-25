import React from 'react'
import {  FaCheckCircle } from 'react-icons/fa'

const CourseandPricing = () => {
    const card = [
        {
            Price: "399$",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is 20$",
            Signup: "Sign up"        },
        {
            Price: "500$",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is 20$",
            Signup: "Sign up"
        },
        {
            Price: "699$",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is 20$",
            Signup: "Sign up"        }
    ]
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-sm text-blue-500 mt-4'>Courses & Pricing</h1>
            <h1 className='text-4xl font-bold text-center mt-3 '>Sign Up for a course<br></br> in the selected category</h1>

            <div className="Cards flex md:flex-row flex-col">
                {card.map((card)=>{
                    return(
                        <div className='w-max rounded-lg bg-white/45 h-auto border m-3 shadow-md flex-col p-10'>
                            <div className="price text-blue-600 text-4xl font-extrabold text-center mb-10">
                                {card.Price}
                            </div>
                            <hr></hr>
                            <div className="features  mb-10 mt-10 space-y-2">
                                <div className="desc flex pl-3 pr-3 pt-1 text-md ">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex pl-3 pr-3 pt-1 text-md">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex pl-3 pr-3 pt-1 text-md">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex pl-3 pr-3 pt-1 text-md">
                                {card.icon}{card.Description}</div>
                            </div>
                            <div className="desc2">
                                <p className='font-bold text-lg'>{card.Description2}</p>
                            </div>
                            <div className="btn text-center">
                                <button className=' px-4 py-2 mt-3 font-bold text-white bg-orange-500 rounded-lg'>{card.Signup}</button>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default CourseandPricing