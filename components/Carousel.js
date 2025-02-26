"use client";
import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/2287947-removebg-preview.png',
    '/images/4668243-removebg-preview.png',
    '/images/image-removebg-preview (11).png',
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-10 text-center bg-gray-200 text-orange-500 rounded-md p-2">Our Portfolio</h2>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div className="flex transition-all duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
        >
          &#8594;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;