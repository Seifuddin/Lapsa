"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/CDG_blog_post_image_01-850x412.jpg",
    title: "Modern Web Design",
    subtitle: "We create stunning, responsive websites that turn visitors into loyal clients — designed to represent your brand perfectly.",
    button: "Start Your Website",
    link: "/portfolio",
  },
  {
    id: 2,
    image: "/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp",
    title: "Custom Mobile Apps",
    subtitle: "We build intuitive mobile applications for Android and iOS, tailored to help your business grow and connect better.",
    button: "Build an App",
    link: "/services",
  },
  {
    id: 3,
    image: "/images/digital-marketing-header.jpg",
    title: "Creative Graphic Design",
    subtitle: "From logos and posters to full branding packages — our creative touch makes your business stand out everywhere.",
    button: "Explore Our Designs",
    link: "/portfolio",
  },
  {
    id: 4,
    image: "/images/The-Most-Beautiful-Brand-Books-and-Brand-Guidelines-Examples-6-Brand-Book-Templates-1.webp",
    title: "High-Quality Digital Printing",
    subtitle: "We offer top-notch digital printing services with vibrant colors, premium materials, and fast delivery times.",
    button: "Get a Quote",
    link: "/contact",
  },
  {
    id: 5,
    image: "/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg",
    title: "Your Creative Partner",
    subtitle: "At Lapsa Web and Graphics, innovation meets design excellence. Let's bring your vision to life together.",
    button: "Work With Us",
    link: "/contact",
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
    <section className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden bg-slate-900">
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
          {/* Gradient Overlay - Blue to Orange */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-orange-600/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-medium text-white/90 tracking-wider">
                Lapsa Web & Graphics
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              key={slides[current].title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {slides[current].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={slides[current].subtitle}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href={slides[current].link}
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 group"
              >
                {slides[current].button}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust Indicators - Blue & Orange */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              {[
                { icon: Shield, label: "Secure Websites", color: "text-blue-400" },
                { icon: Zap, label: "Fast & Reliable", color: "text-orange-400" },
                { icon: Sparkles, label: "Creative Excellence", color: "text-blue-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-xs text-white/70 font-medium">{item.label}</span>
                  {i < 2 && <span className="w-px h-5 bg-white/10 ml-2" />}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "w-10 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                : "w-2 h-1.5 bg-white/30 hover:bg-white/50 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-xs text-white/40 font-mono">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}