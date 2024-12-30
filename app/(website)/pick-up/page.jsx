"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { useFormik } from "formik";
import Navbar from "@/components/shared/Navbar/Navbar";
import Link from "next/link";
import axios from "axios";

const Pick = () => {
    const [showpackage, setshowpackage] = useState(false);
    const [courseData, setcourseData] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [course,setcourse] = useState([]);
    const formik = useFormik({
        initialValues: {
            Postalcode: "",
        },
        onSubmit: async (values) => {
            console.log(values);

            try {
                const response = await axios.post(
                    "http://localhost:3000/api/PostalCode",
                    { postalCode: values.Postalcode }
                );
                if (response.data) {
                    console.log(response.data.data);
                    setcourseData(response.data.data);
                    setshowpackage(true);
                }
            } catch (error) {
                console.log(error);
            }
        },
    });

    const handlePackageClick = (packageType,PackageRate,id) => {
        setSelectedPackage(packageType);
        const datatosend = {
            courseid:id,
            packageType:packageType,
            PackageRate:PackageRate
        }
        if(datatosend){
            localStorage.setItem("coursedetail", JSON.stringify(datatosend));

        }
    };

    
    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <div className="data h-screen w-full">
                <div className="flex flex-col w-5/12 mx-auto justify-center">
                    <h1 className="lg:text-4xl mt-24 font-bold text-gray-600">
                        Hey! Let's get you driving. Ready to go?
                    </h1>

                    {/* Form */}
                    {!showpackage && (
                        <form onSubmit={formik.handleSubmit} className="input flex flex-col mt-10">
                            <span className="text-base font-semibold text-gray-600">
                                Where do you want to be picked up from?
                            </span>
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
                            <button
                                type="submit"
                                className="mx-auto bg-blue-500 text-white mt-16 text-xl px-16 py-3 rounded-lg"
                            >
                                Continue
                            </button>
                        </form>
                    )}

                    {/* Package Selection */}
                    {showpackage && courseData && (
                        <div>
                            <div className="p-6 max-w-xl mx-auto ">
                                <button onClick={()=>setshowpackage(false)}
                                    href="/pick-up"
                                    className="flex items-center mb-10 hover:underline text-gray-500"
                                >
                                    <FaArrowLeft />
                                    <span className="ml-2">back</span>
                                </button>

                                {/* Gearbox Display */}
                                <div className="text-lg font-medium mb-4">
                                    <span className="font-bold">Gearbox:</span> Automatic
                                </div>
                                <div className="text-lg font-medium mb-4">
                                    <span className="font-bold">Postal Code:</span> {courseData.postalCode}
                                </div>
                                <div className="text-lg font-medium mb-4">
                                    <span className="font-bold">Area:</span> {courseData.location}
                                </div>
                                {/* Instructor Display */}
                                <div className="flex items-center mb-6">
                                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                                        MM
                                    </div>
                                    <div>
                                        <p className="font-semibold">Mr Mahamed Khalif Warsame</p>
                                    </div>
                                </div>

                                {/* Package Hours */}
                                <h3 className="text-lg font-semibold mb-6">Choose Your Package Hours</h3>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {/* 1 Hour Package */}
                                    <div
                                        onClick={() => handlePackageClick("1-hour",courseData.hourlyRates.oneHour,courseData._id)}
                                        className={`border rounded-lg p-4 text-center cursor-pointer ${
                                            selectedPackage === "1-hour"
                                                ? " border-2 border-orange-500"
                                                : "hover:border-gray-400"
                                        }`}
                                    >
                                        <p className="text-2xl font-bold">1 Hour</p>
                                        <p className="text-gray-600">Hours</p>
                                        <p className="text-lg font-semibold">
                                            £{" "}
                                            <span className="text-gray-500">
                                                {courseData.hourlyRates.oneHour}
                                            </span>
                                        </p>
                                    </div>

                                    {/* 1.5 Hour Package */}
                                    <div
                                        onClick={() => handlePackageClick("1.5-hour",courseData.hourlyRates.oneAndHalfHour,courseData._id)}
                                        className={`border rounded-lg p-4 text-center cursor-pointer ${
                                            selectedPackage === "1.5-hour"
                                                ? " border-2 border-orange-500"
                                                : "hover:border-gray-400"
                                        }`}
                                    >
                                        <p className="text-2xl font-bold">1.5 Hour</p>
                                        <p className="text-gray-600">Hours</p>
                                        <p className="text-lg font-semibold">
                                            £{" "}
                                            <span className="text-gray-500">
                                                {courseData.hourlyRates.oneAndHalfHour}
                                            </span>
                                        </p>
                                    </div>

                                    {/* 2 Hour Package */}
                                    <div
                                        onClick={() => handlePackageClick("2-hour",courseData.hourlyRates.twoHours,courseData._id)}
                                        className={`border rounded-lg p-4 text-center cursor-pointer ${
                                            selectedPackage === "2-hour"
                                                ? " border-2 border-orange-500"
                                                : "hover:border-gray-400"
                                        }`}
                                    >
                                        <p className="text-2xl font-bold">2 Hour</p>
                                        <p className="text-gray-600">Hours</p>
                                        <p className="text-lg font-semibold">
                                            £{" "}
                                            <span className="text-gray-500">
                                                {courseData.hourlyRates.twoHours}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Continue Button */}
                                <div className="link flex justify-center">
                                    <Link
                                        href="/Info"
                                        className="bg-orange-500 text-center text-white px-6 py-4 text-xl rounded mt-4 mb-4"
                                    >
                                        Continue
                                    </Link>
                                </div>

                                {/* Not Interested Link */}
                                <Link
                                    href="/contactus"
                                    className="text-indigo-600 hover:text-blue-950 mb-6"
                                >
                                    Not interested? Contact us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pick;
