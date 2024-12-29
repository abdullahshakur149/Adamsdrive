"use client"
import React, { useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { useFormik } from 'formik'
import Navbar from '@/components/shared/Navbar/Navbar'
import Link from 'next/link'
import axios from 'axios'
const Pick = () => {

     const [showpackage,setshowpackage] = useState(false);
     const [courseData,setcourseData] = useState([]);



    const formik = useFormik({
        initialValues: {
            Postalcode: "",
        },
        onSubmit: async (values) => {
            console.log(values);

            try {
                const response = await axios.post("http://localhost:3000/api/PostalCode", {postalCode:values.Postalcode});
                if (response.data) {
                    console.log(response.data.data)
                    setcourseData(response.data.data);
                    setshowpackage(true);
                }
            } catch (error) {
                console.log(error)
            }
        }
    });
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />
            <div className="data   h-screen w-full">

                <div className='flex flex-col  w-5/12 mx-auto  justify-center '>
                    <h1 className='lg:text-4xl mt-44 font-bold text-gray-600'>Hey! Let's get you driving. Ready to go?</h1>

                    {!showpackage &&(<form onSubmit={formik.handleSubmit} className="input flex flex-col mt-10">
                        <span className='text-base font-semibold text-gray-600'>Where do you want to be picked up from?</span>
                        <div className="input-icon flex mt-3 items-center ">
                            <FaLocationArrow className='text-blue-950' />
                            <input
                                className='translate-x-3 border-b-2 p-1 bg-transparent focus:outline-none border-blue-950 w-full '
                                id='Postalcode'
                                name='Postalcode'
                                type='text'
                                value={formik.values.Postalcode}
                                onChange={formik.handleChange}
                                placeholder='Enter a postcode'

                            />
                        </div>
                        <button type='submit' className={`mx-auto  bg-blue-500 text-white mt-16  text-xl px-16 py-3 rounded-lg`} >Continue</button>
                    </form>)} 

                    {showpackage && (<div></div>)}
                </div>
            </div>
        </div>
    )
}

export default Pick