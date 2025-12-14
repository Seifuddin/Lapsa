import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-green50 py-16 px-6 md:px12 roundedxl bg-gradient-to-r from-blue-900 to-blue-800">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative  text-white py16 px6 md:px16 z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-left flex-1">
          <h1 className="text-2xl text-yellow-400 md:text-4xl text-centermd: text-left font-extrabold leading-tight fontserif mb-5">
            Who We Are...<br />
            <span className="text-yellow-300"></span>
          </h1>
          <p className="relative mt-2 mb-5 text-base text-left md:text-left text-white max-w-4xl mx-auto">
                       We are a passionate team of digital creatives helping brands build unforgettable identities online and offline. At Lapsa, design meets purpose, code meets clarity, and your business meets success.

          </p>
          <p className="text-blue-950 text-lg mb-6">
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-3">
            <a
              href="#contact"
              className="bg-yellow-400 text-center text-gray-800 font-semibold py-2 md:py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border text-center border-white/70 text-white font-semibold py-2 md:py-3 px-8 rounded-lg hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right: Image */}
          <div className="text-left flex-2 fustify-centeritems-centermx-auto">
            <img
              src="/images/1765669389666~2.jpg"
              alt="Affordable Website Design by Lapsa"
              className="mx-auto w-full md:w-3/4 bg-gray-200 h-auto object-cover rounded-lg shadow-xl border-2border-yellow-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-blue-600/10 blur-2xl -z-10" />
          </div>
        </div>
    </section>
  );
}
