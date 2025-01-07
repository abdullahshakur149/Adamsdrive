"use client";

import React, { useState } from "react";
import logo from "@/public/img/logo.jpeg";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const router = useRouter();

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain a special character")
      .required("Password is required"),
  });

  // Handle Sign-in
  const HandleSignin = async (values, { resetForm }) => {
    try {
      setLoginLoading(true);
      const { email, password } = values;

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.ok) {
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error(res?.error || "Login failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoginLoading(false);
      resetForm();
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-11/12 mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto flex md:flex-row flex-col">
        {/* Left Side - Logo */}
        <div className="md:w-7/12 w-full bg-white flex justify-center items-center">
          <Image src={logo} className="w-8/12 max-sm:ml-4 mt-16" alt="logo" />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-4/12 mt-10 w-full max-sm:ml-3 flex p-4 flex-col justify-center bg-white">
          <h1 className="text-3xl font-bold font-mono text-blue-400 text-center">Welcome to Lane View</h1>
          <span className="text-gray-600 text-lg text-center font-thin">Sign-in</span>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={HandleSignin}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Email Field */}
                <div className="mb-7 relative mt-3">
                  <Field
                    name="email"
                    type="email"
                    placeholder=""
                    className={`p-3 shadow-md shadow-blue-200 border-2 border-blue-300 w-full rounded-md transition-all duration-200 ease-in-out ${
                      touched.email && errors.email ? "border-red-500" : "hover:border-blue-900"
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm"
                  >
                    Email
                  </label>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Password Field */}
                <div className="multiinput relative mb-4">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    className={`p-3 shadow-md shadow-blue-200 border-2 border-blue-300 w-full rounded-md transition-all duration-200 ease-in-out ${
                      touched.password && errors.password ? "border-red-500" : "hover:border-blue-900"
                    }`}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-gray-500 text-sm"
                  >
                    Password
                  </label>
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    className="absolute top-3 right-4"
                  >
                    {showPassword ? <FaEyeSlash className="text-blue-500 mt-1" /> : <FaEye className="text-blue-500 mt-1" />}
                  </button>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="Remember-forgot flex justify-between mb-4">
                  {/* <div className="remember flex">
                    <Field type="checkbox" name="rememberMe" className="accent-blue-500 mr-3 w-4" />
                    <span>Remember me</span>
                  </div>
                  <div className="forgot flex">
                    <button type="button" className="text-blue-600 hover:underline">
                      Forgot password?
                    </button>
                  </div> */}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className={`w-full bg-blue-500 p-3 mt-2 rounded-md text-white hover:bg-blue-900 transition-all duration-200 ease-in-out ${
                    loginLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loginLoading}
                >
                  {loginLoading ? "Logging In..." : "Log In"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
