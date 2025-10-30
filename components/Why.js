"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Rocket } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Trusted Expertise",
    desc: "Years of experience delivering world-class web and graphic solutions that elevate your brand.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Creative Excellence",
    desc: "We blend design and tech to craft visually stunning and functionally powerful results.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Client-Centered Approach",
    desc: "Your goals come first. We listen, understand, and deliver tailored solutions with full transparency.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Speed & Reliability",
    desc: "We deliver fast, optimized websites with zero compromise on quality or performance.",
  },
];

export default function Why() {
  return (
    <section className="py-12 bg-gray-950 text-white relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] bg-indigo-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-2 font-serif">
            Why Choose <span className="text-indigo-500">Lapsa</span>?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            We're not just a design agency — we're your creative growth partner.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 rounded-xl border border-indigo-500/20 shadow-md p-5 hover:shadow-indigo-500/30 transition-all hover:scale-[1.015]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-500/10 p-2 rounded-full transition-all">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold font-serif">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-sm md:text-base text-white font-medium rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20"
          >
            Get Started with Lapsa
          </Link>
        </motion.div>
        */}
      </div>
    </section>
  );
}
