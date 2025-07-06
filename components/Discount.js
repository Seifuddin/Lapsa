"use client";
import { motion } from "framer-motion";

export default function Discount() {
  return (
    <section className="relative bg-black py-16 px-5 md:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/images/herobackground5.jpg')" }}
      />
      <div className="relative z-10 p-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Get a{" "}
            <span className="">world-class</span> website for only{" "}
            <span className="mt-2">
              KES 13,000
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative font-mono text-md text-white"
          >
            Quality web design doesn’t have to come with a hefty price tag.
            At <span className="font-bold">Lapsa</span>, we offer affordable,
            custom-built websites tailored to fit your budget.
            Whether you’re a small business or an emerging brand,
            we’ll help you create a professional online presence
            without breaking the bank.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/contacts"
              className="inline-block border-2 border-white hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Image
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full p-0"
        >
          <img
            src="/images/image-removebg-preview (14).png"
            alt="Website Design Offer Illustration"
            className="w-full h-auto object-contain m-0 p-0"
          />
        </motion.div>
         */}
      </div>
    </section>
  );
}
