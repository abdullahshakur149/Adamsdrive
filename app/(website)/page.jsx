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
import Aboutme from "@/components/LandingPage/Aboutme";
import Ad from "@/components/ad/Ad";
import Gallery from "@/components/LandingPage/Gallery";

const MainLanding = () => {
  return (
    <div>
      {/* <Ad /> */}
      <div className="w-11/12 mx-auto">
        <Navbar />
      </div>

      <div className="w-11/12 bg-default mx-auto">
        <Intro />
        <Aboutme />

        <div className="bg-white mb-20 md:mb-0">
          <Gallery />
        </div>
        {/* <Testimonials /> */}
        <CourseandPricing />
        <Advantage_Experience />
        {/* <Instructor /> */}
        {/* <Newworld /> */}
      </div>
      <div className="w-11/12 bg-white mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default MainLanding;
