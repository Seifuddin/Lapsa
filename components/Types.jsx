"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Heart, ShoppingBag, Building2, Globe, User, Sparkles } from "lucide-react";

const websiteTypes = [
  {
    title: "School Websites",
    desc: "Modern platforms for learning, communication, and student engagement.",
    image: "/images/cybercafee.webp",
    tag: "Education",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Hospital Websites",
    desc: "Clean, accessible systems for patient care, bookings, and information.",
    image: "/images/cyber.jpg",
    tag: "Healthcare",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "E-Commerce Stores",
    desc: "High-converting online shops designed to maximize sales.",
    image: "/images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg",
    tag: "Business",
    icon: ShoppingBag,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Corporate Websites",
    desc: "Professional digital presence that builds trust and authority.",
    image: "/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg",
    tag: "Enterprise",
    icon: Building2,
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "NGO & Charity Websites",
    desc: "Impact-driven platforms to tell stories and drive donations.",
    image: "/images/_DSC8080.jpg",
    tag: "Non-Profit",
    icon: Globe,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Portfolio Websites",
    desc: "Showcase your work with style and clarity.",
    image: "/images/heroimage1.jpg",
    tag: "Personal Brand",
    icon: User,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
  },
];

export default function WebsiteTypes() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
              What We Build
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Websites Tailored for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-4" />

          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            We don't build generic websites—we create platforms designed
            specifically for your audience, goals, and industry needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${type.color} shadow-lg`}>
                    <type.icon className="w-3 h-3" />
                    {type.tag}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-white/70" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                  {type.desc}
                </p>

                {/* Learn More Link */}
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-600 hover:text-orange-500 transition-colors group/link"
                >
                  View Examples
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="hidden inline-flexflex-wrap items-center gap-6 px-8 py-5 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-blue-100">
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">
                Ready to build your website?
              </p>
              <p className="text-xs text-slate-500">
                Let's create something amazing together
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}