"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import opinion from '@/public/img/images/images/opinions.gif';

// Importing Testimonial Images
import img1 from '@/public/1.jpeg';
import img2 from '@/public/2.jpeg';
import img3 from '@/public/3.jpeg';
import img4 from '@/public/4.jpeg';
import img5 from '@/public/5.jpeg';
import img6 from '@/public/6.jpeg';
import img7 from '@/public/7.jpeg';
import img8 from '@/public/8.jpeg';
import img9 from '@/public/9.jpeg';
import img10 from '@/public/10.jpeg';
import img11 from '@/public/11.jpeg';
import img12 from '@/public/12.jpeg';
import img13 from '@/public/13.jpeg';
import img14 from '@/public/14.jpeg';
import img15 from '@/public/15.jpeg';
import img16 from '@/public/16.jpeg';
import img17 from '@/public/17.jpeg';

const testimonials = [
  { image: img1, desc: "Adam's Drive gave me the confidence I needed to pass my driving test with ease!", name_city: "West London, Chicago" },
  { image: img2, desc: "The instructors are professional and supportive. I highly recommend Adam's Drive!", name_city: "Matten, Acton Green" },
  { image: img3, desc: "Passed on my first attempt thanks to Adam's Drive!", name_city: "Aldwych, Westminster" },
  { image: img4, desc: "Adam's Drive provided exceptional training and guidance.", name_city: "Kensington, London" },
  { image: img5, desc: "The best driving school experience I've ever had!", name_city: "Soho, London" },
  { image: img6, desc: "Amazing experience with professional instructors.", name_city: "Covent Garden, London" },
  { image: img7, desc: "Highly recommend Adam's Drive for anyone learning to drive!", name_city: "South Bank, London" },
  // { image: img8, desc: "Patient and skilled instructors made the process smooth.", name_city: "Chelsea, London" },
  { image: img9, desc: "Exceptional training experience!", name_city: "Mayfair, London" },
  { image: img10, desc: "A fantastic driving school with supportive instructors.", name_city: "Camden Town, London" },
  { image: img11, desc: "Top-notch driving lessons with great instructors.", name_city: "Bayswater, London" },
  { image: img12, desc: "Clear instructions and friendly atmosphere.", name_city: "Islington, London" },
  { image: img13, desc: "Passed my driving test on the first try!", name_city: "Shoreditch, London" },
  { image: img14, desc: "Well-organized lessons and professional training.", name_city: "Whitechapel, London" },
  { image: img15, desc: "Best driving school in town!", name_city: "Clapham, London" },
  { image: img16, desc: "Supportive environment for learning to drive.", name_city: "Brixton, London" },
  { image: img17, desc: "Adam's Drive exceeded my expectations!", name_city: "Hammersmith, London" },
];

const Testimonials = () => {
  return (
    <div className="bg-white text-center relative mb-12 mt-0 px-4">
      <Image src={opinion} className="absolute md:flex hidden" alt="opinions" />
      <h1 className="text-blue-500 font-extrabold font-mona text-sm mb-5">Testimonials</h1>
      <h1 className="text-4xl font-monaBold">
        The opinions of our students<br /> confirm our effectiveness
      </h1>

      {/* Swiper Slider */}
      <div className="mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center space-y-5">
                {/* Testimonial Image */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
                  <Image
                    src={testimonial.image}
                    alt={`testimonial-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="mt-6 text-gray-700 text-center max-w-lg text-sm md:text-base">
                  {testimonial.desc}
                </p>
                <span className="text-blue-500 font-bold text-sm md:text-base">
                  {testimonial.name_city}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
