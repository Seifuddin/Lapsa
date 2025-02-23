"use client";
import { motion } from "framer-motion";

export default function ScrollReveal() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-12 p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Scroll to Reveal</h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-white shadow-lg rounded-lg"
      >
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p className="text-gray-600">This item appears smoothly when scrolled into view.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-white shadow-lg rounded-lg"
      >
        <h3 className="text-xl font-semibold">Item 2</h3>
        <p className="text-gray-600">You can add different effects like sliding in.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-white shadow-lg rounded-lg"
      >
        <h3 className="text-xl font-semibold">Item 3</h3>
        <p className="text-gray-600">Animations make the website more engaging!</p>
      </motion.div>
    </section>
  );
}