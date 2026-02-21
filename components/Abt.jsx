"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Palette, Rocket } from "lucide-react";

export default function AboutLapsa() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24 px-6 lg:px-20">

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-400 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-sm font-semibold mb-6 shadow-lg">
            About Lapsa
          </span>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            We Build
            <span className="text-yellow-400"> High-Performance Websites. </span>
          </h2>

          <p className="text-blue-100 md:text-lg leading-relaxed mb-10 max-w-xl">
            Lapsa Web & Graphics is a modern creative tech studio delivering
            premium web development and bold visual design. We combine
            strategy, design, and technology to create digital experiences
            that drive real business growth.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4 p-2 border-b border-blue-700 rounded">
              <Code2 className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded" size={34} />
              <p className="text-blue-100">
                Clean, scalable & responsive web applications.
              </p>
            </div>

            <div className="flex items-start gap-4 p-2 border-b border-blue-700 rounded">
              <Palette className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded" size={34} />
              <p className="text-blue-100">
                Creative branding, logos & marketing visuals.
              </p>
            </div>

            <div className="flex items-start gap-4 p-2 border-b border-blue-700 rounded">
              <Rocket className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded" size={34} />
              <p className="text-blue-100">
                Strategy-driven solutions built for performance.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-5 py-2 bg-yellow-400 text-blue-950 font-semibold rounded shadow-xl hover:scale-105 transition duration-300"
            >
              Explore Services
            </Link>

            <Link
              href="/portfolio"
              className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded font-semibold hover:bg-yellow-400 hover:text-blue-950 transition duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* RIGHT CREATIVE IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* Main Image */}
          <div className="relative w-full max-wmd h-[300px] md:h-[600px] rounded overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp" // replace with your real image
              alt="Lapsa Web and Graphics Team"
              fill
              className="object-cover bg-white"
            />
          </div>

          {/* Floating UI Card */}
          <div className="absolute -top-6 -left-6 bg-white text-blue-900 p-4 rounded-xl shadow-xl w-40 hidden md:block">
            <p className="text-xs font-semibold mb-1">UI Preview</p>
            <div className="h-2 bg-blue-200 rounded mb-2"></div>
            <div className="h-2 bg-yellow-400 rounded w-3/4"></div>
          </div>

          {/* Floating Branding Card */}
          <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-950 p-4 rounded-xl shadow-xl w-44 hidden md:block">
            <p className="text-xs font-bold mb-1">Brand Identity</p>
            <div className="h-2 bg-blue-900 rounded mb-2"></div>
            <div className="h-2 bg-blue-900 rounded w-2/3"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}