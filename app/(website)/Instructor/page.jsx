"use client"
import React, { useEffect, useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';



const Instructor = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [HourlyPackages,setHourPackages] = useState([]);

useEffect( ()=>{
  
  const getData = async()=>{
      const response = await axios.get("/api/hourlyCourses/");
      setHourPackages(response.data.data);
      console.log(response.data.data);
  }

  getData();
},[])


  // Formik validation schema
  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string().email('Invalid email address').required('Email is required'),
  //   phone: Yup.string().required('Phone number is required'),
  //   postalCode: Yup.string().required('Postal code is required'),
  // });

  const handlePackageSelect = (pkg,index) => {
    setSelectedPackage(index);
    const hourlypackage = {
      courseId:pkg.courseId,
      coursePrice:pkg.coursePrice,
      courseTitle:pkg.courseTitle,
      courseduration:pkg.duration,
    }
    if(hourlypackage){
      localStorage.setItem("coursedetail", JSON.stringify(hourlypackage));
      console.log(hourlypackage);
    }
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
          {/* <p className="text-gray-600">£40/hr</p> */}
        </div>
      </div>
      
      {/* Package Hours */}
      <h3 className="text-lg font-semibold mb-2">Choose Your Package Hours</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {HourlyPackages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => handlePackageSelect(pkg,index)}
            className={`border rounded-lg p-4 text-center cursor-pointer 
              ${selectedPackage === index ? 'border-2 border-orange-500 ' : 'hover:border-gray-400'} 
              
            `}
          >
            <p className="text-2xl font-bold">{pkg.duration}</p>
            <p className="text-gray-600">Hours</p>
            <p className="text-lg font-semibold">
              £{pkg.coursePrice}{' '}
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
     
      <div className="link flex justify-center">
      <Link href="/Info" className=" bg-orange-500 text-center     text-white px-6 py-4 text-xl rounded mt-4 mb-4">
        Continue 
      </Link>
      </div>
      {/* Continue Button */}
      

      <Link href={"/contactus"}
        
        className="text-indigo-600 hover:text-blue-950 mb-6"
      >
        Not interested? Contact us
      </Link>
      
    </div>
  );
};

export default Instructor;
