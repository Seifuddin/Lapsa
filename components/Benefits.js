"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

import Know from "./Know";

export default function Benefits() {
  return (
    <section className="relative bg-gray-50 bg-cover bg-center bg-no-repeat p-5 py-20">
      {/* Optional background image */}
      {/* style={{ backgroundImage: `url('/images/pngwing.com (7).png')` }} */}

      {/* Overlay */}
      <div className="absolute inset-0  z-0 opacity-01"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center gap-2"
                >
                  <Lightbulb className="w-10 h-10 text-yellow-600 animate-pulse" />
                  <h2 className="text-orange-600 text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Did You Know
          </h2>
                  <p className="italic text-center text-blue-900 font-semibold text-lg max-w-3xl mx-auto p-2 mb-10">
            A professional website is your most powerful tool to grow, connect, and convert in the digital world.
          </p>
          </motion.div>
        {/* Image + Text Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-1 flex justify-center"
          >
            {/* Image Section
            <img
              src="/images/image-removebg-preview (13).png"
              alt="Website Illustration"
              className="w-full max-w-md object-contain px-4"
            />
             */}
             <Know />
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-2 space-y-2 text-left"
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-10">
              Why Every Brand Needs a Website:
            </h3>
            <ul className="space-y-4 text-blue-950">
              {[
                "🌐 24/7 Online Presence – Be available even when your office is closed.",
                "🚀 Reach More Customers – Expand beyond your local area.",
                "📱 Mobile Friendly – Engage users on any device.",
                "🔍 Be Found on Google – SEO brings free organic traffic.",
                "💼 Sell Products & Services – Turn your site into a money-maker.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start shadow-md bg-white gap-3 p-2 border border-orange-200">
                  <CheckCircle className="text-orange-600 w-5 h-5 mt-1" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/*
        <Link href="/contacts" className="flex items-center justify-center mt-10">
            <button className="text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              Let’s Build Your Website
            </button>
          </Link>
          */}
      </div>
      
    </section>
  );
}
