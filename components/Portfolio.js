"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  const projects = [
    {
      title: "Capvim International Publishers",
      description: "A professional publishing company website offering services, portfolio showcase, and easy contact for authors and clients.",
      image: "/images/CDG_blog_post_image_01-850x412.jpg",
      link: "https://capvim.vercel.app",
    },
    {
      title: "Utamaduni Organization",
      description: "An NGO website designed to highlight community projects, news updates, and engagement opportunities for supporters.",
      image: "/images/download.jpg",
      link: "https://utamaduniorganization.vercel.app",
    },
    {
      title: "Lapsa Family Clinic",
      description: "A healthcare website providing information about medical services, appointments, and health resources for patients.",
      image: "/images/download (2).jpg",
      link: "https://lapsafamilyclinic.vercel.app",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-yellow-50">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-block bg-yellow-200 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Explore Our  <span className="text-yellow-500"> Portfolio </span>
        </h2>
        <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full my-3"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          These are some of the projects we've crafted — combining design, functionality, and creativity to deliver results.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col rounded overflow-hidden shadowlg bgwhite border border-amber-200 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-36 md:h-44">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 bg-white flex flex-col justify-between flex-1">
              <div className="mb-4">
                <h3 className="md:text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex-1 text-center bg-blue-800 text-white py-1 rounded flex items-center gap-2 hover:bg-blue-700 transition"
                >
                  <ArrowTopRightOnSquareIcon className="ml-1 w-4 h-4" /> View Site
                </Link>
                <Link
                  href="#contact"
                  className="flex-1 text-center border border-blue-800 text-blue-800 py-1 rounded-md flex items-center gap-2 hover:bg-blue-800 hover:text-white transition"
                >
                  <EyeIcon className="ml-1 w-4 h-4" /> Request Service
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}