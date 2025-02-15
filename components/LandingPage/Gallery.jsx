import React from "react";
import Image from "next/image";

const images = Array.from({ length: 18 }, (_, i) => `/${i + 1}.jpeg`);

const Gallery = () => {
  return (
    <div className="max-w-screen mx-auto px-4 grid bg-white grid-cols-2 md:grid-cols-3 gap-5 mt-10 py-40">
      {images.map((src, index) => (
        <div key={index} className="relative w-full aspect-video">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
