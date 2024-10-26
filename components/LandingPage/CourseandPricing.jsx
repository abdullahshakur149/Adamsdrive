import React from 'react'
import {  FaCheckCircle } from 'react-icons/fa'

const CourseandPricing = () => {
    const card = [
        {
            Price: "$399",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price:<span className='text-blue-700'>20$</span>,
            Signup: "Sign up"        },
        {
            Price: "$599",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price:<span className='text-blue-700'>20$</span>,
            Signup: "Sign up"
        },
        {
            Price: "$899",
            Description: "30th of theoritical Courses",
            icon: <FaCheckCircle className='text-blue-600 m-1' />,
            Description2: "The cost of extra hours is ",
            price:<span className='text-blue-700'>20$</span>,
            Signup: "Sign up"        }
    ]
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-md text-blue-500 font-monaBold mt-4'>Courses & Pricing</h1>
            <h1 className='text-4xl  font-monaBold text-center mt-3 mb-8 '>Sign Up for a course<br></br> in the selected category</h1>

            <div className="Cards flex md:flex-row flex-col">
                {card.map((card,index)=>{
                    return(
                        <div key={index} className=' w-full rounded-lg bg-white h-auto border m-3 shadow-md flex-col p-16'>
                            <div className="price text-blue-600 font-monaBold text-5xl pt-5  text-center mb-10">
                                {card.Price}
                            </div>
                            <hr></hr>
                            <div className="features  mb-10 mt-10 ">
                                <div className="desc flex font-sans  -ml-4  pr-3 pt-1 text-md ">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex font-sans   -ml-4 pt-1 text-md">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex font-sans -ml-4  pt-1 text-md">
                                {card.icon}{card.Description}</div>
                                <div className="desc flex font-sans  -ml-4 pt-1 text-md">
                                {card.icon}{card.Description}</div>
                            </div>
                            <div className="desc2">
                                <p className='font-mona font-bold text-md text-center'>{card.Description2}{card.price}</p>
                            </div>
                            <div className="btn text-center mt-10">
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