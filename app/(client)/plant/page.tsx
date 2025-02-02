"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Image from "next/image";

export default function Plant() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    "/demo1.png",
    "/demo2.jpg",
    "/demo3.jpeg",
    "/demo4.jpg",
    "/demo5.jpg",
    "/demo6.jpg",
    "/demo7.jpeg",
    "/demo8.jpg"
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      <p className="text-lg mb-6">
        Small mobile ReSoil® plant (up to 300 kg of soil/day) was constructed in
        mobile containers for the POSIDON PCP H2020 project. In this way, we were
        able to investigate the future lay-up of the machinery, installations,
        and realistically simulate the ReSoil® working process. The demo ReSoil®
        plant enables 3 soil remediation batches per day with the average time
        for a single remediation batch of less than 3 hours. ReSoil® technology
        does not generate wastewaters and other emissions and preserves soil
        quality and soil properties as plant substrate.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-80"> {/* Adjust height as needed */}
            <Image
              src={src}
              alt={`ReSoil Image ${index + 1}`}
              className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              layout="fill" // Make the image cover the container
              objectFit="cover" // Ensure the image covers the container without distortion
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={images[activeIndex]}
              alt={`ReSoil Image ${activeIndex + 1}`}
              className="object-contain max-w-full max-h-full"
              width={800}
              height={800}
            />
            <button
              className="absolute top-2 right-2 bg-white text-black p-1 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
