"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, User, Briefcase, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Joseph",
    role: "CEO, Josro Bridge International",
    content: "Lapsa transformed our online presence completely. The website they built for us is not just beautiful but also highly functional. Our student enrollment increased by 40% within the first month.",
    rating: 5,
    image: "/images/file_0000000054588243b3b15ea6923771e5~4.jpg",
    project: "Education Website",
    result: "+40% Enrollment",
  },
  {
    id: 2,
    name: "Joseph Opere",
    role: "Founder, JSoft Technologies",
    content: "The attention to detail and creative excellence from Lapsa is unmatched. They understood our vision perfectly and delivered a website that truly represents our brand. Highly recommended!",
    rating: 5,
    image: "/images/IMG-20260703-WA0007~4.jpg",
    project: "Tech Website",
    result: "5x Leads",
  },
  {
    id: 3,
    name: "Mr. Dimore",
    role: "Director, Utamaduni Organization",
    content: "Working with Lapsa was a game-changer for our NGO. They created a platform that tells our story effectively and has helped us connect with more donors and partners globally.",
    rating: 5,
    image: "/images/file_00000000d80c71f490aae0fd6d7f311b_2-removebg-preview.png",
    project: "NGO Website",
    result: "300% Donors",
  },
  {
    id: 4,
    name: "Clifford Matara",
    role: "Publisher, Capvim International",
    content: "Lapsa delivered an outstanding publishing platform that has revolutionized how we reach our readers. Professional, fast, and beautifully designed. Our authors love it!",
    rating: 5,
    image: "/images/file_000000000eac71f499995a86c60e6428~4.jpg",
    project: "Publishing Platform",
    result: "2x Readership",
  },
  {
    id: 5,
    name: "Dr. Ann Nyokabi",
    role: "Director, Lapsa Family Clinic",
    content: "The healthcare website created by Lapsa has made it so much easier for patients to book appointments and access information. It's professional, trustworthy, and patient-friendly.",
    rating: 5,
    image: "/images/Screenshot_20260713-001017~7.jpg",
    project: "Healthcare Website",
    result: "24/7 Access",
  },
];

export default function StoriesAndTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-4" />

          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            Real stories from real clients who trusted us to bring their vision to life
          </p>
        </motion.div>

        {/* Main Content - Balanced Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Main Testimonial (3 columns) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 lg:p-10 relative h-full"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-3 shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-base leading-relaxed italic mb-6 min-h-[100px]">
                  "{currentTestimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-orange-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                      {currentTestimonial.image ? (
                        <Image
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-blue-100 to-orange-100 flex items-center justify-center">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{currentTestimonial.role}</p>
                    <span className="inline-block mt-0.5 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {currentTestimonial.project}
                    </span>
                  </div>
                  {/* Result Badge */}
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-3 py-1.5 rounded-lg shadow-lg shadow-orange-200/50">
                    <p className="text-white text-xs font-bold">
                      {currentTestimonial.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-8 bg-gradient-to-r from-blue-600 to-orange-500"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-400 font-medium">
                {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right - Sidebar (2 columns) - Now Balanced */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats - Now 2 rows instead of 3 columns */}
            <div className="hidden gridgrid-cols-2gap-4">
              {[
                { number: "50+", label: "Happy Clients", icon: "😊" },
                { number: "4.9★", label: "Average Rating", icon: "⭐" },
                { number: "98%", label: "Satisfaction", icon: "👍" },
                { number: "40+", label: "Projects Done", icon: "🚀" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-6 text-white">
              <h4 className="text-sm font-semibold mb-3 opacity-90">Featured Projects</h4>
              <div className="space-y-2">
                {testimonials.slice(0, 3).map((t, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{t.project}</p>
                      <p className="text-[10px] opacity-75">{t.result}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-50" />
                  </div>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-white/90 hover:text-white transition-colors group"
              >
                View all projects
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-200 to-orange-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">Trusted by 50+</p>
                <p className="text-[10px] text-slate-400">businesses worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brands */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-200"
        >
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["🏫 Education", "💻 Technology", "❤️ NGO", "📚 Publishing", "🏥 Healthcare"].map(
              (industry, i) => (
                <span
                  key={i}
                  className="text-sm font-medium text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}