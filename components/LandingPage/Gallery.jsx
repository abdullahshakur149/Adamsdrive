import React from "react";
import Image from "next/image";

const images = [
  "/image-1.jpeg",
  "/image-2.jpeg",
  "/image-3.jpeg",
  "/image-4.jpeg",
  "/image-5.jpeg",
  "/image-6.jpeg",
  "/image-7.jpeg",
  "/image-8.jpeg",
  "/image-9.jpeg",
  "/image-10.jpeg",
  "/image-11.jpeg",
  "/image-12.jpeg",
];

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
