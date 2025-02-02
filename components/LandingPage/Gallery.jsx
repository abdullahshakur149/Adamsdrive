import React from "react";
import Image from "next/image";

const images = Array.from({ length: 18 }, (_, i) => `/${i + 1}.jpeg`); // No "public/"

const Gallery = () => {
  return (
    <>
      {/* <div className="gallery">
        <h1 className="text-4xl text-center mt-0 font-monaBold">
          The opinions of our students
          <br /> confirm our effectiveness
        </h1>
      </div> */}
      <div className="grid bg-white grid-cols-2 md:grid-cols-3 gap-5 mt-10  pb-40">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40 md:h-52">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
