import React from 'react'
import "./Navbar.css"
import logo from "@/public/img/adamsdrive.png"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    const Links = [
        { pathname: "Number1", path: "/number1" },
        { pathname: "Number2", path: "/number2" },
        { pathname: "Number2", path: "/number2" },
    ]
    return (
        <div className='container md:mt-2  md:p-2  flex justify-between'>

            <div className="Logo-Links flex justify-center items-center">
                <div className="Navbar-logo translate-x-5 ">
                    <Link href='#'><Image src={logo} className='w-16 ' alt='text' /></Link>
                </div>

                <div className="Navbar-links translate-x-10">
                    <ul className='flex'>
                        {Links.map((links, idx) => {
                            return (
                                <li key={idx}>
                                    <Link href={links.path} className='p-2'>{links.pathname}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="number-Login flex justify-center items-center">
                <div className="number m-2">
                    <Link href='#'> +91-802342523 </Link>
                </div
                >
                <div className="login-btn m-2">
                        <Link href='/login' className='bg-blue-500 pl-4 pr-4 pt-2 pb-2 text-white rounded-lg'>Login</Link>
                </div>
            </div>


        </div>
    )
}

export default Navbar