"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Know() {
  return (
    <section className=" gradient-to-br from-orange-100 via-white to-blue-100">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <Lightbulb className="w-10 h-10 text-yellow-500 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Did You Know?
          </h2>
        </motion.div>
          
        {/* What is a website */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-5 rounded-md shadow-md bg-white border border-orange-200"
        >
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            What is a Website
          </h3>
          <p className="text-blue-950 text-base md:text-lg leading-relaxed">
            A website is like your digital office or shop on the internet. Just as people visit a
            physical shop to learn about or buy your products or services, they visit your website
            for the same reasons—but from anywhere, anytime.
          </p>
        </motion.div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-5 rounded-md shadow-md border border-orange-200"
        >
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            Why It Matters
          </h3>
          <p className="text-blue-950 text-base md:text-lg leading-relaxed">
            A website gives you a global voice, improves credibility, and allows others to find,
            contact, or buy from you easily.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative "
        >
        </motion.div>
      </div>
    </section>
  );
}
