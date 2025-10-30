"use client";
import { motion } from "framer-motion";

export default function Discount() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle background gradient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-sm font-semibold text-pink-600 tracking-widest uppercase">
            Limited-Time Offer
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Get <span className="text-blue-700">Stunning Websites</span> from as
            low as <span className="text-pink-600">KES 13,000</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Professional web design doesn’t have to be expensive.{" "}
            <span className="font-semibold text-blue-800">Lapsa Web & Graphics</span>{" "}
            delivers high-quality, custom websites built to fit your brand,
            vision, and budget. Whether you’re a startup, business, or creative,
            we’ll help you stand out online — affordably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <a
              href="/contacts"
              className="inline-block bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              Contact Us
            </a>

            <a
              href="/pricing"
              className="inline-block border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <img
              src="/images/discount.jpg"
              alt="Affordable Website Design by Lapsa"
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-blue-600/10 blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
