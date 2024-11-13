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
            <div className="data bg-cyan-100 h-screen w-full">
                <div className="flex flex-col w-11/12 sm:w-8/12 md:w-5/12 mx-auto justify-center">
                    <h1 className="lg:text-4xl mt-20 sm:mt-32 font-bold text-gray-600 text-center sm:text-left">Hey! Let's get you driving. Ready to go?</h1>

                    <div className="input flex flex-col mt-10">
                        <span className="text-base font-semibold text-gray-600">Where do you want to be picked up from?</span>
                        <div className="input-icon flex mt-3 items-center">
                            <FaLocationArrow className="text-blue-950" />
                            <input
                                className="translate-x-3 border-b-2 p-1 bg-transparent focus:outline-none border-blue-950 w-full"
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
                            className={`mx-auto ${postalyes ? 'bg-orange-500 text-white' : 'cursor-not-allowed text-gray-300 bg-gray-700'} mt-16 text-xl px-16 py-3 rounded-lg`}
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
