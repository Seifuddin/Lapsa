"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description: "Years of experience delivering world-class web and graphic solutions that elevate your brand.",
    number: "01",
    color: "#3B82F6",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "We blend design and tech to craft visually stunning and functionally powerful results.",
    number: "02",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Your goals come first. We listen, understand, and deliver tailored solutions with full transparency.",
    number: "03",
    color: "#10B981",
  },
  {
    icon: Rocket,
    title: "Speed & Reliability",
    description: "We deliver fast, optimized websites with zero compromise on quality or performance.",
    number: "04",
    color: "#F59E0B",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Your Success
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              We're not just a design agency — we're your creative growth partner, 
              dedicated to bringing your vision to life.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "98%", label: "Satisfaction" },
                { number: "4.9★", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm"
                >
                  <div className="text-xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 group shadow-lg shadow-slate-200"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="space-y-4">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-start gap-4">
                  {/* Number & Icon */}
                  <div className="flex flex-col items-center gap-2">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span 
                      className="text-xs font-bold"
                      style={{ color: item.color }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}