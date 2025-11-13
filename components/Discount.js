"use client";
import { motion } from "framer-motion";

export default function Discount() {
  return (
    <section className="relative bg-green-50 dient-to-b from-gray-50 to-white py-24 px-6 md:px-12 overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight font-serif">Get 
            <span className="text-blue-700"> Stunning Websites</span> starting
            from<span className="text-pink-600"> 13,000</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="titext-lg itali fontsemibold text-gray-600 mt-4 max-w-2xl mx-auto mb-8"
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
            className="flex flex-wrap gap-2 mt-6"
          >
            <div className="flex flex-col w-full sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-700 text-center md:px-8 md:py-4 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border text-center md:px-8 md:py-4 border-blue-700 text-blue-700 font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full flex justify-center"
        >
          <div className="relative w-full maxwmd">
            <img
              src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp"
              alt="Affordable Website Design by Lapsa"
              className="w-full h-auto object-cover rounded-md shadow-xl border-2 border-gray-200"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-blue-600/10 blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
