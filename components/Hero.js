'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/images.jpg')" }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-10 md:p-12 w-full max-w-6xl min-h-screen flex items-center justify-center backdrop-blur-sm"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Text Content */}
          <div className="space-y-5 pt-5">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Elevate Your Brand with 
              <span className="text-blue-500"> Custom Websites</span> & 
              <span className="text-orange-600"> Creative Graphic Design</span>
            </h1>
            <p className="text-gray-200 text-lg">
              At Lapsa Web and Graphics, we turn ideas into digital experiences. Whether you're launching a startup or rebranding an established business, our expert team delivers high-performance websites and compelling visuals that captivate, convert, and grow your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3 bg-blue-600 hover:bg-orange-600 rounded-full font-semibold shadow-md transition duration-300">
                Our Services
              </button>
              <button className="px-6 py-3 border-2 border-white hover:bg-blue-600 rounded-full font-semibold shadow-md transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Image (hidden on small screens) */}
          <div className="hidden md:flex justify-center">
            <div className="w-full">
              <Image
                src="/images/image-removebg-preview (44).png"
                alt="Web and Graphic Design"
                width={500}
                height={500}
                className="rounded-xl w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}