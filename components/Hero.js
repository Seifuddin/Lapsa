"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Network, Camera, Cpu } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/CDG_blog_post_image_01-850x412.jpg",
    title: "Modern Web Design",
    subtitle:
      "We create stunning, responsive websites that turn visitors into loyal clients — designed to represent your brand perfectly.",
    button: "Start Your Website",
  },
  {
    id: 2,
    image: "/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp",
    title: "Custom Mobile Apps",
    subtitle:
      "We build intuitive mobile applications for Android and iOS, tailored to help your business grow and connect better.",
    button: "Build an App",
  },
  {
    id: 3,
    image: "/images/digital-marketing-header.jpg",
    title: "Creative Graphic Design",
    subtitle:
      "From logos and posters to full branding packages — our creative touch makes your business stand out everywhere.",
    button: "Explore Our Designs",
  },
  {
    id: 4,
    image: "/images/The-Most-Beautiful-Brand-Books-and-Brand-Guidelines-Examples-6-Brand-Book-Templates-1.webp",
    title: "High-Quality Digital Printing",
    subtitle:
      "We offer top-notch digital printing services with vibrant colors, premium materials, and fast delivery times.",
    button: "Get a Quote",
  },
  {
    id: 5,
    image: "/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg",
    title: "Your Creative Partner",
    subtitle:
      "At Lapsa Web and Graphics, innovation meets design excellence. Let’s bring your vision to life together.",
    button: "Work With Us",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center mb-4 gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-yellow-400"
          >
            <Cpu size={14} />
            elevate your brand online with Lapsa
          </motion.div>
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl text-white font-semibold tracking-tight"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-sm md:text-base text-gray-100 max-w-3xl leading-relaxed"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.button
          key={slides[current].button}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden mt-5 px-14 py-2 md:text-lg text-gray-900 rounded-full bg-yellow-400 gradient-to-r from-indigo-600 to-pink-600 hover:from-pink-700 hover:to-indigo-700 transition shadow-lg"
        >
          {slides[current].button}
        </motion.button>

        {/* trust row */}
                  <div className="flex flex-wrap items-center justify-center textleft gap-3 mt-4 text-sm text-gray-200">
        
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-yellow-400" />
                      Secure Websites
                    </span>
        
                    <span className="flex items-center gap-2">
                      <Network size={14} className="text-yellow-400" />
                      Designed by Experts
                    </span>
        
                    <span className="flex items-center gap-2">
                      <Camera size={14} className="text-yellow-400" />
                      Driven by Passion
                    </span>
        
                  </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-colsm: flex-row gap-3 justify-center">

          <a
            href="/portfolio"
            className="
              px-7 py-1.5 rounded -full
              bg-yellow-400 text-black text-sm font-medium md:textbase
              hover:bg-blue-500 hover:text-white
              transition
            "
          >
            Our Portfolio
          </a>

          <a
            href="/contacts"
            className="
              px-7 py-1.5 rounded -full
              border border-white/40 text-white/90 text-sm md:textbase
              hover:border-white hover:text-white
              transition
            "
          >
            Contact Us
          </a>
        </div>
        
        {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
      </div>

      

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-yellow-300 p-2 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-yellow-300 p-2 rounded-full shadow-lg transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index
                ? "bg-yellow-300 scale-125 shadow-md"
                : "bg-gray-400 hover:bg-pink-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
