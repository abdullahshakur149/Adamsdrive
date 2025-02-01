import React from "react";
import Image from "next/image";

const Aboutme = () => {
  return (
    <section class="pt-10 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight text-black  sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br class="block sm:hidden" />
              Adam Zaza
            </h2>
            <p class="max-w-lg mt-3 text-xl leading-relaxed text-black font-extrabold md:mt-8">
              Hi, I’m Adam Zaza, a DVSA Qualified Driving Instructor with over
              246+ student passes in the record over a 4-year period and
              counting with a pass rate of 89%. Being able to work previously
              with Red Driving School and DriveJohnson’s. I decided to start up
              my own Driving School dedicating my time and experience into this
              unique and precious business. I help learners of all ages and
              backgrounds become safe and confident drivers. I’m passionate
              about what I do and pride myself on tailoring each lesson to suit
              the individual needs of my students—whether you’re stepping into
              the driver’s seat for the first time or looking to refresh your
              skills.
            </p>
          </div>

          <div class="relative">
            <img
              class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
