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
    <div className="overflow-hidden relative bg-blue-950 py-6">
      <motion.div
        className="flex space-x-1"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="min-w-[100px] md:min-w-[200px] lg:min-w-[300px]">
            <img
              src={src}
              alt={`Carousel ${index}`}
              className="w-28 h-28 object-cover rounded-xl shadow-lg border bg-white"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}