import React from "react";

// about me added
const AboutMe = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-12">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hey 👋 I am Adam Zaza
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 font-medium">
          Hi, I’m Adam Zaza, a DVSA Qualified Driving Instructor with over 246+
          student passes in the record over a 4-year period and counting with a
          pass rate of 89%. Having previously worked with Red Driving School and
          DriveJohnson’s, I decided to start my own Driving School, dedicating
          my time and experience to this unique and valuable business. I help
          learners of all ages and backgrounds become safe and confident
          drivers. I’m passionate about what I do and pride myself on tailoring
          each lesson to suit the individual needs of my students—whether you’re
          stepping into the driver’s seat for the first time or looking to
          refresh your skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
