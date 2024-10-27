import React from 'react'
import Image from 'next/image'
import logo from "@/public/img/driving.jpg"
const Advantage_Experience = () => {
  return (
    <div className=' flex md:flex-row mt-36  flex-col m-20  ' >
      <div className=" relative   md:w-6/12 ">
        <Image src={logo} alt='aboutus' layout='fill'  className='object-cover  w-full rounded-l-2xl ' />
      </div>

      <div className="w-6/12 bg-white h-full   rounded-r-3xl shadow-lg">

        <div className="info text-center mt-24 ">
          <h1 className='text-md text-blue-500 font-monaBold mt-4'>About us </h1>
          <h1 className='xl:text-4xl font-monaBold   text-center mt-3 mb-8 '>Our advantage is experience <br></br> and knowledge </h1>
        </div>

        <div className="history   pl-20 mt-16 mx-auto flex">

          <div className="w-6/12 mx-auto flex flex-col p-2 ">
            <span className='text-blue-600 font-mona font-extrabold text-sm'>Since</span>
            <span className='text-blue-600 font-monaBold  text-7xl'>1992</span>

            <div className="text  flex-col mt-7 mb-10 font-bold ">
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.ic ipsam magni!.</p>
              <p className='mt-10 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.ic ipsam !.</p>

            </div>
          </div>

          <div className="w-6/12 mt-4 p-2 pr-6 ">
          <div className="text flex-col   ">
              <p className='font-bold text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.ic ipsam magni!.</p>
              <p className='mt-10 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.ic ipsam magni! magni!.</p>
              <p className='mt-10 text-sm'>Lorem ipsum, dolor.ic ipsam magni!r adipisicing elit.ic ipsam !.</p>

            </div>          
            </div>

        </div>

      </div>
    </div>
  )
}

export default Advantage_Experience