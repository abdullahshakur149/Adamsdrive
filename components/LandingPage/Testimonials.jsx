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
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  // { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
  { image: img14 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
];


const Testimonials = () => {
  return (
    <div className="bg-white text-center relative mb-12 mt-0 px-4">
      <Image src={opinion} className="absolute md:flex -z-10 hidden" alt="opinions" />
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
            <SwiperSlide className='z-50' key={index}>
              <div className="flex flex-col  items-center space-y-5">
                {/* Testimonial Image */}
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-16 shadow-lg border-4 border-blue-500">
                  <Image
                    src={testimonial.image}
                    alt={`testimonial-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Text */}
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
