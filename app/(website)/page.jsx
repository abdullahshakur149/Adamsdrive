import React from "react";
import "./page.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Intro from "@/components/LandingPage/Intro";
import CourseandPricing from "@/components/LandingPage/CourseandPricing";
import Advantage_Experience from "@/components/LandingPage/Advantage&Experience";
import Instructor from "@/components/LandingPage/Instructor";
import Newworld from "@/components/LandingPage/newworld";
import Testimonials from "@/components/LandingPage/Testimonials";
import ContactUs from "@/components/LandingPage/ContactUs";
import Ad from "@/components/ad/Ad";
const MainLanding = () => {
  return (
    <div>
      <Ad />
      <div className="w-11/12 mx-auto">
        <Navbar />
      </div>

      <div className="w-11/12 bg-default   mx-auto">
        <Intro />
        <Testimonials />
        <CourseandPricing />
        <Advantage_Experience />
        <Instructor />
        <Newworld />
      </div>
      <div className="w-11/12 bg-white mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default MainLanding;
