"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 text-orange-600 py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About <span className="text-indigo-500">Lapsa</span> Web & Graphics
          </h2>
          <p className="text-blue-950 text-lg mb-6">
            We are a passionate team of digital creatives helping brands build unforgettable identities online and offline. At Lapsa, design meets purpose, code meets clarity, and your business meets success.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold text-indigo-500">50+</p>
              <p className="text-sm text-gray-700">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-500">30+</p>
              <p className="text-sm text-gray-700">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-500">5+</p>
              <p className="text-sm text-gray-700">Years Experience</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-white rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-medium"
          >
            Let’s Work Together
          </Link>
        </motion.div>

        {/* Image or Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp" // Use your own image or animated SVG
            alt="About Lapsa Web & Graphics"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
