"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  const projects = [
     {
      title: "Lapsa Web and Graphics",
      description: "Professional Web Design and Graphics in Kenya.",
      image: "/images/1765669389666~2.jpg",
      link: "https://lapsa.vercel.app",
    },
    {
      title: "Capvim International Publishers",
      description: "Publishing platform built for credibility and reach.",
      image: "/images/CDG_blog_post_image_01-850x412.jpg",
      link: "https://capvim.vercel.app",
    },
    {
      title: "Utamaduni Organization",
      description: "NGO experience focused on impact and storytelling.",
      image: "/images/download.jpg",
      link: "https://utamaduniorganization.vercel.app",
    },
    {
      title: "Lapsa Family Clinic",
      description: "Healthcare interface designed for trust and clarity.",
      image: "/images/download (2).jpg",
      link: "https://lapsafamilyclinic.vercel.app",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50 overflow-hidden">
      
      {/* HEADER (centered) */}
      <div className="max-w-5xl mx-auto text-center mb-10 px-6 md:px-12">
        <p className="text-xs tracking-[0.25em] text-yellow-500 mb-3 upprcase">
          Our Portfolio
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Selected Work
        </h2>

        <p className="mt-4 text-gray-600 max-w-md mx-auto text-sm md:text-base">
          A curated selection of projects built with clarity, purpose, and performance in mind.
        </p>
      </div>

      {/* SCROLL SECTION */}
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto px-6 md:px-12 pb-2 no-scrollbar justify-start md:justify-start">

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="min-w-[260px] md:min-w-[340px] flex-shrink-0"
            >
              <Link href={project.link} target="_blank">
                
                <div className="relative h-[320px] w-full rounded-xl overflow-hidden group shadow-sm">

                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition duration-500"
                  />

                  {/* Gradient overlay (luxury feel) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 p-5 text-white">
                    
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-200 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <span className="inline-flex items-center gap-1 text-yellow-300 text-xs font-medium tracking-wide">
                      View Project
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                    </span>

                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}