import React from 'react'
import "./Navbar.css"
import logo from "@/public/img/adamsdrive.jpg"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    const Links = [
        { pathname: "Number1", path: "/number1" },
        { pathname: "Number2", path: "/number2" },
        { pathname: "Number2", path: "/number2" },
    ]
    return (
        <div className='container p-2 flex justify-between'>

            <div className="Logo-Links flex justify-center items-center">
                <div className="Navbar-logo translate-x-5 ">
                    <Link href='#'><Image src={logo} className='w-32 h-20' /></Link>
                </div>

                <div className="Navbar-links translate-x-10">
                    <ul className='flex'>
                        {Links.map((links, idx) => {
                            return (
                                <li key={links.pathname}>
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
                        <button className='bg-blue-500 p-4 rounded-lg'>Login</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar