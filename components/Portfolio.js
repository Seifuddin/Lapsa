"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Josro Bridge International",
      description: "Education & Consultancy Firm",
      category: "Education",
      image: "/images/josrohero.png",
      link: "https://josrobridgeinternational.vercel.app",
    },
    {
      title: "JSoft Technologies KE",
      description: "Professional Web Design & Graphics",
      category: "Technology",
      image: "/images/jsoft.png",
      link: "https://jsofttechnologieske.vercel.app",
    },
    {
      title: "Utamaduni Organization",
      description: "NGO Impact & Storytelling",
      category: "Non-Profit",
      image: "/images/utmaduni.png",
      link: "https://utamaduniorganization.vercel.app",
    },
    {
      title: "Capvim International Publishers",
      description: "Publishing Platform",
      category: "Publishing",
      image: "/images/capvimm.png",
      link: "https://capvim.vercel.app",
    },
    {
      title: "Lapsa Family Clinic",
      description: "Healthcare Interface",
      category: "Healthcare",
      image: "/images/clinic.png",
      link: "https://lapsafamilyclinic.vercel.app",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Selected Work
          </h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto">
            Projects built with clarity, purpose, and performance
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link href={project.link} target="_blank">
                {/* Image Container */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium flex items-center gap-2">
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Description Below Image */}
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}