'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center overflow-hidden relative min-h-screen">
  {/* Adding background image */}
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/images.jpg')" }}></div>

  {/* Glassmorphic Card */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-10 backdrop-blur-md bg-white/10 border border-white/20 rou
    
    nded-2xl shadow-2xl p-10 w-full z-10"
  >
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Crafting Stunning <span className="text-cyan-400">Websites</span> &<br />
          Bold <span className="text-pink-400">Graphic Designs</span>
        </h1>
        <p className="text-gray-200 text-lg">
          We blend creativity and technology to deliver modern, high-impact designs that elevate your brand.
        </p>
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-lg transition duration-300">
          Get Started
        </button>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center">
        <Image
          src="/images/images (2).jpg"
          alt="Web and Graphic Design"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </motion.div>
</section>
  );
}