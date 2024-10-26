import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
const Newworld = () => {
    return (
        <div className='bg-white flex justify-center  w-full'>

            <div className="data flex justify-center">
                <div className="w-4/12 mt-10 m-8 flex-col space-y-3">
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold'>News</span>
                    <h1 className='font-monaBold text-5xl '>What's<br></br> new in the <br></br> world of <br></br> drivers? </h1>
                    <p className='text-sm font-bold'>Subsribe our <Link className='text-blue-500  font-bold' href="#">Facebook</Link> profile <br></br> for more news and promotions!</p>
                    <button className="m-2 text-white bg-blue-600 p-4 rounded-3xl  ">
                        <FaFacebook />
                    </button>
                </div>
                <div className="w-4/12 mt-10 m-8 flex-col space-y-3 ">
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold'>News</span>
                    <h1 className='font-monaBold text-5xl '>What's<br></br> new in the <br></br> world of <br></br> drivers? </h1>
                    <p className='text-sm font-bold'>Subsribe our <Link className='text-blue-500  font-bold' href="#">Facebook</Link> profile <br></br> for more news and promotions!</p>
                    <button className="m-2 text-white bg-blue-600 p-4 rounded-3xl  ">
                        <FaFacebook />
                    </button>
                </div>
                <div className="w-4/12 mt-10 m-8 flex-col space-y-3 ">
                    <span className='text-blue-500 text-sm font-extrabold font-monaBold'>News</span>
                    <h1 className='font-monaBold text-5xl '>What's<br></br> new in the <br></br> world of <br></br> drivers? </h1>
                    <p className='text-sm font-bold'>Subsribe our <Link className='text-blue-500  font-bold' href="#">Facebook</Link> profile <br></br> for more news and promotions!</p>
                    <button className="m-2 text-white bg-blue-600 p-4 rounded-3xl  ">
                        <FaFacebook />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Newworld