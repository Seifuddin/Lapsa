"use client";

import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pexels-pixabay-268533.jpg')" }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-8 z-10 p-6 md:p-8 w-full max-w-6xl min-h-screen flex items-center justify-center backdrop-blur-sm"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center w-full pt-5">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Crafting Stunning 
              <span className="text-blue-500"> Websites</span> & Bold
              <span className="text-orange-600"> Graphic Designs</span>
            </h1>
            <p className="text-gray-200 text-lg">
              We are Lapsa, We Design Your Digital Future by Elevating Your Brand Online, We create beautiful websites and eye-catching designs that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3 bg-blue-600 hover:bg-orange-600 rounded-full font-semibold shadow-md transition duration-300">
                Our Services
              </button>
              <button className="px-6 py-3 border-2 border-white hover:bg-blue-600 rounded-full font-semibold shadow-md transition duration-300">
                Contact Us
              </button>
            </div>
            {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                >
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="absolute flex gap-4">
                    <a
                      href="https://www.facebook.com"
                      aria-label="Follow us on Facebook"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      aria-label="Follow us on Twitter"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      aria-label="Follow us on Instagram"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      aria-label="Follow us on LinkedIn"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
          </div>

          {/* Hero Image (hidden on small screens) */}
          <div className="flex justify-center">
            <div className="w-full flex rounded-xl items-center justify-center">
              <Image
                src="/images/image-removebg-preview (44).png"
                alt="Web and Graphic Design"
                width={500}
                height={500}
                className="flex rounded-xl items-center justify-center  w-60 md:w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
          
        </div>
      </motion.div>
      
    </section>
  );
}