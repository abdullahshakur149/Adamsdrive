import React from 'react'
import "./page.css"
import Navbar from '@/components/shared/Navbar/Navbar'
import Intro from '@/components/LandingPage/Intro'
import CourseandPricing from '@/components/LandingPage/CourseandPricing'
import Advantage_Experience from '@/components/LandingPage/Advantage&Experience'
import Instructor from "@/components/LandingPage/Instructor";
import Newworld from '@/components/LandingPage/newworld'
const MainLanding = () => {
  return (

    <div>

      <Navbar />

      
      <div className="w-10/12 mx-auto">
      <Intro  />
      <CourseandPricing />
      <Advantage_Experience />
      <Instructor/>
      <Newworld/>
      
      
      </div>
      
    </div>
  )
}

export default MainLanding