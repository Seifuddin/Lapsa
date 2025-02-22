"use client";
import { motion } from "framer-motion";

const images = [
  "/images/government-of-kenya.jpg",
  "/images/Screenshot_20221022-170110-removebg-preview.png",
  "/images/government-of-kenya.jpg",
  "/images/Screenshot_20221022-170110-removebg-preview.png",
  "/images/government-of-kenya.jpg",
  "/images/Screenshot_20221022-170110-removebg-preview.png",
  "/images/government-of-kenya.jpg",
  "/images/Screenshot_20221022-170110-removebg-preview.png",
];

export default function ImageCarousel() {
  return (
    <div className="overflow-hidden relative w-full bg-gray-100 py-6">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px]">
            <img
              src={src}
              alt={`Carousel ${index}`}
              className="w-full h-60 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}