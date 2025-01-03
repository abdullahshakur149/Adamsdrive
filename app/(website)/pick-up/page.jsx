"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { useFormik } from "formik";
import Navbar from "@/components/shared/Navbar/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters long"),
    phonenumber: Yup.string()
        .required("Phone number is required")
    // .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

const Pick = () => {
    const [showpackage, setshowpackage] = useState(false);
    const [courseData, setcourseData] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showform, setshowform] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            Postalcode: "",
            phonenumber: "",
            name: "",
            coursePrice: "",
            courseSelected: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();
            try {
                const url = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await axios.post(`${url}/hourlyOrder`, values);

                if (response?.data) {
                    toast.success(" Data has been saved successfully!", {
                        position: "top-right",
                        duration: 3000, // Display duration in ms
                    });
                    router.push("/"); 
                }
                else {
                    toast.warning(" Data was not saved. Please try again.", {
                        position: "top-right",
                        duration: 3000,
                    });
                }

            } catch (error) {
                toast.error(
                    error?.response?.data?.message || "❌ An error occurred. Please try again.",
                    {
                        position: "top-right",
                        duration: 3000,
                    }
                );
            }
        },
    });

    const handlePostalcodeSubmit = async (values) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await axios.post(`${url}/PostalCode`, {
                postalCode: values.Postalcode,
            });
    
            if (response.data && response.data.data) {
                setcourseData(response.data.data);
                setshowpackage(true);
            } else {
                // If postal code is not valid, show error toast
                toast.error("Postal code is not available. Please try another one.", {
                    position: "top-right",
                    duration: 3000,
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again.");
        }
    };
    

    const handlePackageClick = (packageType, PackageRate, postalcode, id) => {
        setSelectedPackage(packageType);
        formik.setFieldValue("courseSelected", packageType);
        formik.setFieldValue("coursePrice", PackageRate);
        formik.setFieldValue("Postalcode", postalcode);
    };

    return (
        <div className="w-11/12 mx-auto">
        <Navbar />
        <div className="data min-h-screen w-full">
            <div className="flex flex-col w-full md:w-8/12 lg:w-5/12 mx-auto justify-center px-4 sm:px-6 lg:px-8">
    
                {/* Postalcode Form */}
                {!showpackage && !showform && (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handlePostalcodeSubmit(formik.values);
                        }}
                        className="flex flex-col mt-44"
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-8 font-bold text-gray-600 text-center">
                            Hey! Let's get you driving. Ready to go?
                        </h1>
                        <span className="text-sm sm:text-base font-semibold text-gray-600 text-center">
                            Where do you want to be picked up from?
                        </span>
                        <div className="input-icon flex mt-5 items-center">
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
                            type="button"
                            onClick={() => handlePostalcodeSubmit(formik.values)}
                            className="mx-auto bg-blue-500 text-white mt-10 text-lg sm:text-xl px-10 sm:px-16 py-3 rounded-lg"
                        >
                            Continue
                        </button>
                    </form>
                )}
    
                {/* Package Selection */}
                {showpackage && courseData && (
                    <div className="p-4 sm:p-6 max-w-xl mt-20 mx-auto">
                        <button
                            onClick={() => setshowpackage(false)}
                            className="flex items-center mb-6 sm:mb-10 hover:underline text-gray-500"
                        >
                            <FaArrowLeft />
                            <span className="ml-2">back</span>
                        </button>
                        <div className="text-lg font-medium mb-4">
                            <span className="font-bold">Gearbox :</span> Automatic
                        </div>
                        <div className="text-lg font-medium mb-4">
                            <span className="font-bold">Postal Code :</span> {courseData.postalCode}
                        </div>
                        <div className="text-lg font-medium mb-4">
                            <span className="font-bold">Area :</span> {courseData.location}
                        </div>
                        <h3 className="text-lg font-semibold mb-6 text-center sm:text-left">Choose Your Package Hours</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div
                                onClick={() =>
                                    handlePackageClick(
                                        "1-hour",
                                        courseData.hourlyRates.oneHour,
                                        courseData.postalCode,
                                        courseData._id
                                    )
                                }
                                className={`border rounded-lg p-4 text-center cursor-pointer ${
                                    selectedPackage === "1-hour"
                                        ? "border-2 border-orange-500"
                                        : "hover:border-gray-400"
                                }`}
                            >
                                <p className="text-xl sm:text-2xl font-bold">1 Hour</p>
                                <p className="text-gray-600">£ {courseData.hourlyRates.oneHour}</p>
                            </div>
                            <div
                                onClick={() =>
                                    handlePackageClick(
                                        "1.5-hour",
                                        courseData.hourlyRates.oneAndHalfHour,
                                        courseData.postalCode,
                                        courseData._id
                                    )
                                }
                                className={`border rounded-lg p-4 text-center cursor-pointer ${
                                    selectedPackage === "1.5-hour"
                                        ? "border-2 border-orange-500"
                                        : "hover:border-gray-400"
                                }`}
                            >
                                <p className="text-xl sm:text-2xl font-bold">1.5 Hour</p>
                                <p className="text-gray-600">£ {courseData.hourlyRates.oneAndHalfHour}</p>
                            </div>
                            <div
                                onClick={() =>
                                    handlePackageClick(
                                        "2-hour",
                                        courseData.hourlyRates.twoHours,
                                        courseData.postalCode,
                                        courseData._id
                                    )
                                }
                                className={`border rounded-lg p-4 text-center cursor-pointer ${
                                    selectedPackage === "2-hour"
                                        ? "border-2 border-orange-500"
                                        : "hover:border-gray-400"
                                }`}
                            >
                                <p className="text-xl sm:text-2xl font-bold">2 Hour</p>
                                <p className="text-gray-600">£ {courseData.hourlyRates.twoHours}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setshowpackage(false);
                                setshowform(true);
                            }}
                            className="bg-orange-500 text-center text-white px-6 py-3 sm:py-4 text-lg sm:text-xl rounded mt-4 mb-4"
                        >
                            Continue
                        </button>
                    </div>
                )}
    
                {/* Final Form */}
                {!showpackage && showform && (
                    <form onSubmit={formik.handleSubmit} className="space-y-6 mt-28">
                        <button
                            onClick={() => setshowform(false)}
                            className="flex items-center mb-6 hover:underline text-gray-500"
                        >
                            <FaArrowLeft />
                            <span className="ml-2">back</span>
                        </button>
                        <h1 className="font-bold text-center text-xl sm:text-2xl mt-8">Contact Information</h1>
                        <input
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Name"
                            className="w-full p-3 border rounded-lg"
                        />
                        {formik.errors.name && formik.touched.name && (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                        )}
                        <input
                            name="phonenumber"
                            onChange={formik.handleChange}
                            value={formik.values.phonenumber}
                            placeholder="Phone Number"
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            disabled
                            value={formik.values.Postalcode}
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            disabled
                            value={formik.values.coursePrice}
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            disabled
                            value={formik.values.courseSelected}
                            className="w-full p-3 border rounded-lg"
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
        <ToastContainer />
    </div>
    

    );
};

export default Pick;
