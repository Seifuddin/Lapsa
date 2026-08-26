"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Rocket, 
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Your Online Presence",
    description: "Being online allows potential customers to find you anytime, anywhere.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: LayoutDashboard,
    title: "A Digital Storefront",
    description: "Your website showcases products or services, just like a physical shop.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Smartphone,
    title: "Accessible Everywhere",
    description: "Works seamlessly on phones, tablets, and computers for all users.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Rocket,
    title: "A Growth Tool",
    description: "Helps attract more customers, increase sales, and grow your brand.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
];

export default function WhatIsWebsite() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                Did You Know?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              What is a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Website?
              </span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />

            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              A website is your digital office, store, and brand identity —
              accessible online 24/7 from anywhere in the world.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl ${feature.bg} border ${feature.border} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} shrink-0`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden inline-flexitems-center gap-2 mt-8 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src="/images/herobackground1.jpg"
                  alt="Website Illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">24/7 Online</p>
                    <p className="text-xs text-slate-500">Always accessible</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Secure</p>
                    <p className="text-xs text-slate-500">SSL protected</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 border border-white/20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Fast Loading</p>
                    <p className="text-xs text-slate-500">Optimized speed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-6 mt-6 px-6 py-3 bg-slate-50 rounded-xl border border-slate-200">
              {[
                { label: "24/7 Available", icon: "🌐" },
                { label: "Mobile Friendly", icon: "📱" },
                { label: "Secure", icon: "🔒" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                  {i < 2 && <span className="w-px h-6 bg-slate-200 ml-2" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}