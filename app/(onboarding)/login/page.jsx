"use client";
import React, { useState } from "react";
import logo from "@/public/img/Loginlogo.png";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"; 

const Login = () => {
  const [showpassword,setshowpassword] = useState(false);
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });



  return (
    <div>
    <div className="w-11/12 mx-auto">
      <Navbar />
      </div>
      <div>
      <div className="container mx-auto flex md:flex-row flex-col">
        {/* Left side - Logo */}
        <div className="md:w-7/12 w-full bg-white flex justify-center items-center">
          <Image src={logo} className="w-8/12 max-sm:ml-4 mt-16" alt="logo" />
        </div>

        {/* Right side - Form */}
        <div className="md:w-4/12 mt-10  w-full max-sm:ml-3 flex p-4 flex-col justify-center bg-white">
          <h1 className="text-3xl font-bold font-mono text-blue-400 text-center">Welcome to Adam's Drive</h1>
          <span className="text-gray-600 text-lg text-center font-thin">Sign-in</span>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={(values,{resetForm})=>{
              console.log(values);
              resetForm();
            }} 
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-7 mt-3">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`p-3 shadow-md shadow-blue-200 border-2 border-blue-300 w-full rounded-md transition-all duration-200 ease-in-out ${
                      touched.email && errors.email ? "border-red-500" : "hover:border-blue-900"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="multiinput relative  mb-4">
                  <Field
                    name="password"
                    type={showpassword ? "text" : "password"}
                    placeholder="Password"
                    className={`p-3 shadow-md  shadow-blue-200 border-2 border-blue-300 w-full rounded-md transition-all duration-200 ease-in-out ${
                      touched.password && errors.password ? "border-red-500" : "hover:border-blue-900"
                    }`}
                    
                  />
                  <button onClick={()=>setshowpassword(!showpassword)} type="button" className="absolute top-3 right-4">
                    {showpassword ? <FaEyeSlash className="text-blue-500 mt-1" /> : <FaEye className="text-blue-500 mt-1" /> }
                  </button>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="Remember-forgot flex justify-between mb-4">
                  <div className="remember flex">
                    <Field type="checkbox" name="rememberMe" className="accent-blue-500 mr-3 w-4 " />
                    <span>Remember me</span>
                  </div>

                  <div className="forgot flex">
                    <button type="button" className="text-blue-600 hover:underline">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  
                  className="w-full bg-blue-500 p-3 mt-2 rounded-md text-white hover:bg-blue-900 transition-all duration-200 ease-in-out"
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Login;
