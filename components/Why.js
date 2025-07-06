"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Rocket } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Trusted Expertise",
    desc: "Years of experience delivering world-class web and graphic solutions that elevate your brand.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Creative Excellence",
    desc: "We blend design and tech to craft visually stunning and functionally powerful results.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Client-Centered Approach",
    desc: "Your goals come first. We listen, understand, and deliver tailored solutions with full transparency.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Speed & Reliability",
    desc: "We deliver fast, optimized websites with zero compromise on quality or performance.",
  },
];

export default function Why() {
  return (
    <section className="py-20 bg-gray-950 text-white relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] bg-indigo-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Why Choose <span className="text-indigo-500">Lapsa</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're not just a design agency — we're your creative growth partner.
            Let's turn your vision into bold, beautiful digital reality.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 rounded-2xl border border-indigo-500/20 shadow-lg p-6 hover:shadow-indigo-500/30 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-500/10 p-3 rounded-full transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-medium rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
          >
            Get Started with Lapsa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
