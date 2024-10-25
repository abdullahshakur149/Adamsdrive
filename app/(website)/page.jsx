import React from 'react'
import "./page.css"
import Navbar from '@/components/shared/Navbar/Navbar'
import Intro from '@/components/LandingPage/Intro'
import CourseandPricing from '@/components/LandingPage/CourseandPricing'
import Advantage_Experience from '@/components/LandingPage/Advantage&Experience'
const MainLanding = () => {
  return (

    <div>
      <Navbar />
      <Intro />
      <CourseandPricing />
      <Advantage_Experience />
    </div>
  )
}

export default MainLanding