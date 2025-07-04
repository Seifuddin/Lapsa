"use client";
import { motion } from "framer-motion";

export default function Discount() {
  return (
    <section className="relative bg-gray0 pt-20 px-5 md:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-"
        style={{ backgroundImage: "url('/images/1f509a19270c2a770c29744f88e1975d.jpg')" }}
      />
      <div className="relative z-10 p-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
            Get a{" "}
            <span className="">world-class</span> website for only{" "}
            <span className=" text-6xl md:text-7xl mt-2">
              KES 13,000
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-50"
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
              className="inline-block bg-orange-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
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
