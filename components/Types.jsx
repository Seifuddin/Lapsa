"use client";

import { motion } from "framer-motion";

const websiteTypes = [
  {
    title: "School Websites",
    desc: "Modern platforms for learning, communication, and student engagement.",
    image: "/images/cybercafee.webp",
    tag: "Education",
  },
  {
    title: "Hospital Websites",
    desc: "Clean, accessible systems for patient care, bookings, and information.",
    image: "/images/cyber.jpg",
    tag: "Healthcare",
  },
  {
    title: "E-Commerce Stores",
    desc: "High-converting online shops designed to maximize sales.",
    image: "/images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg",
    tag: "Business",
  },
  {
    title: "Corporate Websites",
    desc: "Professional digital presence that builds trust and authority.",
    image: "/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg",
    tag: "Enterprise",
  },
  {
    title: "NGO & Charity Websites",
    desc: "Impact-driven platforms to tell stories and drive donations.",
    image: "/images/_DSC8080.jpg",
    tag: "Non-Profit",
  },
  {
    title: "Portfolio Websites",
    desc: "Showcase your work with style and clarity.",
    image: "/images/heroimage1.jpg",
    tag: "Personal Brand",
  },
];

export default function WebsiteTypes() {
  return (
    <section className="py-14 bg-amber-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-wxl mb-16">
          <span className="text-sm fontsemibold text-yellow-400 uppercas tracking-wider">
            What We Build
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
            Websites Tailored for 
            <span className="text-yellow-400"> Every Industry</span> 
          </h2>

          <p className="text-sm text-gray-800 mt-4 px-4">
            We don’t build generic websites—we create platforms designed
            specifically for your audience, goals, and industry needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded -xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-3 text-white">

                {/* TAG */}
                <span className="text-xs text-blue-700 bg-yellow-400 /90 backdrop-blur px-2 py-1 rounded-full">
                  {type.tag}
                </span>

                <h3 className="text-sm font-semibold mt-2">
                  {type.title}
                </h3>

                <p className="text-sm text-white/80 mt-1">
                  {type.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}