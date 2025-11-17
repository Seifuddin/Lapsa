import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-16 px-6 md:px-12">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-16 z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-left flex-1">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight fontserif mb-5">
            We Design <br />
            <span className="text-yellow-300">Websites That Work</span>
          </h1>
          <p className="relative mt-2 mb-5 text-base text-left md:ext-center text-white max-w-4xl mx-auto">
            Lapsa Web & Graphics helps businesses stand out online with
            beautiful, high-performing websites and creative visual design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-3">
            <a
              href="#contact"
              className="bg-yellow-300 text-center text-gray-800 font-semibold py-2 md:py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition"
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
          <div className="text-left flex-2">
            <img
              src="/images/image-removebg-preview (18).png"
              alt="Affordable Website Design by Lapsa"
              className="w-full bg-gray-200 h-auto object-cover rounded-lg shadow-xl border-2 border-yellow-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-blue-600/10 blur-2xl -z-10" />
          </div>
        </div>
    </section>
  );
}
