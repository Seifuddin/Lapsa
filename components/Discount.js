"use client";
import { motion } from "framer-motion";

export default function Discount() {
  return (
    <section className="relative bg-black py-20 px-5 md:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 md:opacity-100"
        style={{ backgroundImage: "url('/images/herobackground1.jpg')" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get stunning websites from as low as KES 150, 000
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-lg text-white"
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
              className="inline-block bg-white border-2 text-black font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Contact Us Today
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
