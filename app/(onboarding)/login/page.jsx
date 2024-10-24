"use client"
import React, { useState } from 'react'
import logo from "@/public/img/WElcome.webp"
import Image from 'next/image'
import Navbar from '@/components/shared/Navbar/Navbar'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email,setemail] = useState('');
  const [Password,setpassword] = useState('');
  const handlesubmit = ()=>{
    console.log("email",email);
    console.log("password",Password);
  }
  return (
    <div >
      <Navbar />
      <div className='container flex md:flex-row flex-col'>

        <div className="md:w-8/12 w-full bg-white flex justify-center items-center">
          <Image src={logo} className='w-2/4 p-10' alt='text' />
        </div>

        <div className="md:w-4/12 w-full m-10 flex p-4 flex-col justify-center bg-white ">
          <h1 className='text-2xl font-bold font-mono  text-blue-400'>Welcome to Adam's Drive</h1>
          <span className='text-gray-600 text-lg font-thin '>Sign-in</span>
          <input placeholder='Email' type='email' onChange={(e)=>setemail(e.target.value)} className='p-3  shadow-md shadow-blue-200 border-2 border-blue-300 m-4 hover:border-blue-900  transition-all duration-200 ease-in-out ml-0 rounded-md ' />
          <div className="multiinput  relative m-3 mt-0 ml-0">
          <input placeholder='Password' type='password' onChange={(e)=>setpassword(e.target.value)}  className='p-3 shadow-md shadow-blue-200 w-full   border-2 border-blue-300 m-4 ml-0 hover:border-blue-900 transition-all duration-200 ease-in-out rounded-md ' />
          <button className='absolute top-7   right-4'><FaEye className='text-blue-500 m-1'/></button>
          </div>

          <div className="Remember-forgot  flex justify-between   m-3 mt-0 ml-0">

            <div className="remember flex ">
            <input type='checkbox' className='accent-blue-500 mr-3 w-4 ' />
            <span>Remember me </span>
            </div>

            <div className="forgot flex">
            <button className='text-blue-600'> Forgot password?</button>
            </div>
            
          </div>
          
          <button onClick={handlesubmit} className='w-full bg-blue-500 p-3 mt-2 rounded-md text-white hover:bg-blue-900  transition-all duration-200 ease-in-out'>Log In</button>
        
        </div>
      </div>
    </div>

  )
}

export default Login