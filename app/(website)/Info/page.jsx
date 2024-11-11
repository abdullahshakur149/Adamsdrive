"use client"
import React, { useState,useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '@/components/shared/Navbar/Navbar';
import ContactUs from '@/components/LandingPage/ContactUs';

const Page = () => {

    const [coursedetail,setcoursedetail] = useState(null);

    useEffect(() => {
        const storedCourseDetail = localStorage.getItem('coursedetail');
        if (storedCourseDetail) {
            setcoursedetail(JSON.parse(storedCourseDetail));
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phonenumber: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(3, 'Name must be at least 3 characters'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phonenumber: Yup.string()
                .matches(/^\d+$/, 'Phone number must be only digits')
                .min(10, 'Phone number must be at least 10 digits')
                .required('Phone number is required'),
            address: Yup.string()
                .required('Address is required')
                .min(5, 'Address must be at least 5 characters'),
        }),
        onSubmit: (values,{resetForm}) => {
            console.log(values);
            const formData = {...values,coursedetail};
            console.log(formData);
            resetForm();
            
            
        }
    });
    
    return (
        <div>
            <div className="navbar w-11/12 mx-auto">
            <Navbar/>
            </div>
            
        <div className="flex  flex-col items-center justify-center min-h-screen ">
            
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Information</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={`peer w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none ${
                                formik.errors.name && formik.touched.name
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Name
                        </label>
                        {formik.errors.name && formik.touched.name && (
                            <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`peer w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none ${
                                formik.errors.email && formik.touched.email
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Email
                        </label>
                        {formik.errors.email && formik.touched.email && (
                            <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            id="phonenumber"
                            name="phonenumber"
                            type="text"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phonenumber}
                            className={`peer w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none ${
                                formik.errors.phonenumber && formik.touched.phonenumber
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="phonenumber"
                            className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Phone Number
                        </label>
                        {formik.errors.phonenumber && formik.touched.phonenumber && (
                            <p className="mt-1 text-xs text-red-500">{formik.errors.phonenumber}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            className={`peer w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none ${
                                formik.errors.address && formik.touched.address
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="address"
                            className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Address
                        </label>
                        {formik.errors.address && formik.touched.address && (
                            <p className="mt-1 text-xs text-red-500">{formik.errors.address}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-6 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <ContactUs/>
        </div>
    );
}

export default Page;
