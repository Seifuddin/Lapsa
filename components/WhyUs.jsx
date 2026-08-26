"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function WhyUs() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content with Image Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[320px] p-8 flex flex-col justify-center"
          >
            {/* Background Image */}
            <Image
              src="/images/image-removebg-preview (21).png"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            
            {/* Content on top of image */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Your Success
                <br />
                <span className="text-emerald-400">
                  Starts Here
                </span>
              </h2>

              <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
                We're not just a design agency — we're your creative growth partner, 
                dedicated to bringing your vision to life.
              </p>

              {/* Stats */}
              <div className="flex gap-3 mt-5">
                {[
                  { number: "10+", label: "Projects" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "4.9★", label: "Rating" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 px-4 py-2 text-center flex-1"
                  >
                    <div className="text-base font-bold text-white">{stat.number}</div>
                    <div className="text-[10px] text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Cards (Compact) */}
          <div className="space-y-3">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-start gap-3">
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <span 
                        className="text-[10px] font-bold"
                        style={{ color: item.color }}
                      >
                        {item.number}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {item.description}
                    </p>
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