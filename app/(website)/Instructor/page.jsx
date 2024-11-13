"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const packages = [
  { hours: 2, price: 80 },
  { hours: 6, price: 210, originalPrice: 240, savings: 30 },
  { hours: 10, price: 350, originalPrice: 400, savings: 50 }
];

const Instructor = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Formik validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    postalCode: Yup.string().required('Postal code is required'),
  });

  const handlePackageSelect = (index) => {
    setSelectedPackage(index);
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-10">
      <Link href="/pick-up" className="flex items-center mb-10  hover:underline text-gray-500">
        <FaArrowLeft /><span className="ml-2">back</span>
      </Link>
      <h2 className="text-2xl font-semibold mb-4">Select a gearbox to see instructors</h2>
      
      {/* Gearbox Display */}
      <div className="text-lg font-medium mb-4">
        <span className="font-bold">Gearbox:</span> Automatic
      </div>
      
      {/* Instructor Display */}
      <div className="flex items-center mb-6">
        <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
          MM
        </div>
        <div>
          <p className="font-semibold">Mr Mahamed Khalif Warsame</p>
          <p className="text-gray-600">£40/hr</p>
        </div>
      </div>
      
      {/* Package Hours */}
      <h3 className="text-lg font-semibold mb-2">Choose Your Package Hours</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => handlePackageSelect(index)}
            className={`border rounded-lg p-4 text-center cursor-pointer 
              ${selectedPackage === index ? 'border-2 border-orange-500 ' : 'hover:border-gray-400'} 
              
            `}
          >
            <p className="text-2xl font-bold">{pkg.hours}</p>
            <p className="text-gray-600">Hours</p>
            <p className="text-lg font-semibold">
              £{pkg.price}{' '}
              {pkg.originalPrice && (
                <span className="line-through text-gray-500">£{pkg.originalPrice}</span>
              )}
            </p>
            {pkg.savings && (
              <p className="text-sm text-gray-500">Save £{pkg.savings}</p>
            )}
          </div>
        ))}
      </div>

      {/* Not Interested Button */}
      

      {/* Contact Form */}
     
      
      {/* Continue Button */}
      <button className="w-full bg-orange-500 text-white p-2 rounded mt-4 mb-4">
        Continue
      </button>

      <button
        onClick={() => setShowForm(!showForm)}
        className="text-indigo-600 hover:text-blue-950 mb-6"
      >
        Not interested? Contact us
      </button>
      {showForm && (
        <Formik
          initialValues={{ name: '', email: '', phone: '', postalCode: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-gray-700">Phone Number</label>
                <Field
                  name="phone"
                  type="text"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-gray-700">Postal Code</label>
                <Field
                  name="postalCode"
                  type="text"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded mt-4"
              >
                Contact Me
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Instructor;
