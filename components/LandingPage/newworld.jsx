import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import driving from "@/public/img/driving.jpg";
import opinion from "@/public/img/images/images/news.gif";

import { FaArrowRight, FaFacebook } from 'react-icons/fa'
const Newworld = () => {
    return (
        <div className='bg-white flex justify-center relative mt-32 mb-32   w-full'>
            {/* <Image src={opinion} className='absolute' /> */}
            <div className="data flex justify-center md:flex-row flex-col">
                <div className="md:w-4/12 w-full  m-8 flex-col space-y-8 mt-32">
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold'>News</span>
                    <h1 className='font-monaBold text-4xl '>What's<br></br> new in the <br></br> world of <br></br> drivers? </h1>
                    <p className='text-sm font-bold'>Subsribe our <Link className='text-blue-500  font-bold' href="#">Facebook</Link> profile <br></br> for more news and promotions!</p>
                    <button className="m-2 text-white bg-blue-600 p-4 rounded-3xl  ">
                        <FaFacebook />
                    </button>
                </div>
                <div className="md:w-4/12 w-full mt-10 m-8 flex relative  flex-col    ">
                <Image src={driving} className='object-contain w-full  md:absolute -top-24  rounded-3xl'  />
                    <span className=' text-4xl font-monaBold mt-20 mb-5'>23 Sep</span>
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold mb-5 '>From January 1,<br></br> new regulations will be<br></br> introduced for drivers</span>
                    <p className='text-sm font-bold mb-5'>Lorem ipsum dolor sit,<br></br> amet consectetur adipisicing elit.<br></br> Adipisci voluptas, doloribus totam!</p>
                    <p className='text-sm font-bold mb-5'>Lorem ipsum dolor sit,<br></br> Adipisci voluptas, doloribus totam!</p>
                    
                    <div className="btn">
                    <button className="m-2 text-white bg-blue-400 p-4 rounded-3xl  ">
                        <FaArrowRight />
                    </button>    
                    </div>
                   
                </div>
                
                <div className="md:w-4/12 w-full mt-10 m-8 flex  relative   flex-col    ">
                <Image src={driving} className='object-contain w-full  md:absolute -top-24  rounded-3xl'  />
                    <span className=' text-4xl font-monaBold mt-20 mb-5'>18 Sep</span>
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold mb-5 '>From January 1,<br></br> new regulations will be<br></br> introduced for drivers</span>
                    <p className='text-sm font-bold mb-5'>Lorem ipsum dolor sit,<br></br> amet consectetur adipisicing elit.<br></br> Adipisci voluptas, doloribus totam!</p>
                    <p className='text-sm font-bold mb-5'>Lorem ipsum dolor sit,<br></br> Adipisci voluptas, doloribus totam!</p>
                    
                    <div className="btn">
                    <button className="m-2 text-white bg-blue-400 p-4 rounded-3xl  ">
                        <FaArrowRight />
                    </button>    
                    </div>
                   
                </div>
            </div>


        </div>
    )
}

export default Newworld