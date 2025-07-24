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
    <section className="relative h-screen lg:h-auto bg-black lg:py-20 px-5 md:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75 md:opacity-100"
        style={{ backgroundImage: "url('/images/lapsabackground.jpg')" }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-screen flex items-center justify-center backdrop-blur-smm"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Crafting Stunning 
              <span className="text-blue-500"> Websites</span> & Bold
              <span className="text-orange-400"> Graphic Designs</span>
            </h1>
            <p className="italic font-serif text-white md:text-gray-50 text-md font-semibold">
              We are Lapsa, We Design Your Digital Future by Elevating Your Brand Online, We create beautiful websites and eye-catching designs that make an impact.
            </p>

            <div className="flex gap-4 pt-2">
              <a
            href="services"
            className="mt-6 text-center inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Our Services
          </a>

              <a
            href="contacts"
            className="bg-white text-center mt-6 inline-block border- border-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Contact Us
          </a>
            </div>
            {/* Social Media 
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                >
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="absolute flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61570201295782"
                      aria-label="Follow us on Facebook"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09"
                      aria-label="Follow us on Twitter"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48"
                      aria-label="Follow us on Instagram"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      aria-label="Follow us on LinkedIn"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
          */}

          </div>
          {/* Hero Image (hidden on small screens) */}
          <div className="hidden md:flex justify-center">
            <div className="w-full flex rounded-xl items-center justify-center">
               {/* <Image
                src="/images/image-removebg-preview (44).png"
                alt="Web and Graphic Design"
                width={500}
                height={500}
                className="flex rounded-xl items-center justify-center  w-60 md:w-full h-auto object-contain"
                priority
              />
              */}
            </div>
          </div>
          
        </div>
      </motion.div>
      
    </section>
  );
}