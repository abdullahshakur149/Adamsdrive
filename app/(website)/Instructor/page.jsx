"use client";
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useFormik } from 'formik';
import Navbar from '@/components/shared/Navbar/Navbar';
import Link from 'next/link';

const Pick = () => {
    const formik = useFormik({
        initialValues: {
            Postalcode: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const postalyes = formik.values.Postalcode === "w73zh";

    return (
        <>
            <Navbar />
            <div className="bg-cyan-100 h-screen w-full flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-11/12 md:w-8/12 lg:w-6/12">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6">Hey! Let's get you driving. Ready to go?</h1>

                    <div className="flex flex-col mt-8">
                        <span className="text-lg font-medium text-gray-600">Where do you want to be picked up from?</span>
                        <div className="flex mt-4 items-center border-b-2 border-blue-950">
                            <FaLocationArrow className="text-blue-950 mr-3 text-xl" />
                            <input
                                className="w-full py-2 px-4 bg-transparent text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="Postalcode"
                                name="Postalcode"
                                type="text"
                                value={formik.values.Postalcode}
                                onChange={formik.handleChange}
                                placeholder="Enter a postcode"
                            />
                        </div>

                        <Link
                            onClick={formik.handleSubmit}
                            className={`mx-auto mt-8 text-xl px-16 py-3 rounded-lg font-semibold transition duration-300 ${postalyes ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-700 text-gray-300 cursor-not-allowed'}`}
                            href={postalyes ? "/Instructor" : "#"}
                        >
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pick;
