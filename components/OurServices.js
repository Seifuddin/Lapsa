"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code,
  PenTool,
  Printer,
  Wrench,
  Smartphone,
  X,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    description:
      "We create visually stunning and highly functional websites tailored to your brand’s unique needs. Our custom web design solutions ensure a seamless user experience and a strong online presence.",
    icon: <Layout className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image:
      "/images/creative-web-design-studio-with-flying-web-page-layout-elements-concept_1029473-56271.avif",
  },
  {
    title: "Desktop Applications",
    description:
      "Transform your innovative ideas into reality with our bespoke Desktop Apps development services. We build custom Desktop applications that solve real business problems.",
    icon: <Code className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image: "/images/what-is-software-development.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "From logos and branding to brochures and posters, we deliver eye-catching graphic design that communicates your message and captivates your audience.",
    icon: <PenTool className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image: "/images/art_design_740x317.jpg",
  },
  {
    title: "Digital Printing",
    description:
      "Get premium quality digital printing solutions for business cards, flyers, posters, and more — perfect for both personal and corporate branding.",
    icon: <Printer className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image: "/images/digitalprinting.jpg",
  },
  {
    title: "Website Maintenance",
    description:
      "Let us handle the updates, security, and performance tuning so your site stays reliable, safe, and optimized — giving you peace of mind.",
    icon: <Wrench className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image: "/images/Website-Maintenance-is-No-Longer.webp",
  },
  {
    title: "Mobile App Development",
    description:
      "We develop powerful and user-friendly mobile apps that bring your brand to your customer’s fingertips — across Android and iOS platforms.",
    icon: <Smartphone className="w-10 h-10 text-yellow-300 p-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-md" />,
    image: "/images/download (2).jpg",
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative z-0 py-16 bg-amber-50 via-white to-yellow-50 px-5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Updated Header */}
        <h2 className="text-gray-900 text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Explore Our Web & Graphics Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto mb-8">
          From design to deployment, we help businesses succeed online with creative and innovative solutions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-md overflow-hidden shadow-xl border border-blue-200 bg-white/60 backdrop-blur-md transition-all duration-300 hover:shadow-2xl group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left space-y-3">
                <div className="flex items-center gap-2">
                  {service.icon}
                  <h3 className="text-black text-lg md:text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-950 text-sm line-clamp-3">
                  {service.description}
                </p>

                {/* Buttons Row */}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => setActiveService(service)}
                    className="flex-1 bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition font-semibold text-sm"
                  >
                    Learn More
                  </button>
                  <Link
                    href="/portfolio"
                    className="flex-1 bg-transparent border-2 border-blue-800 text-blue-800 py-2 rounded hover:bg-blue-800 hover:text-white transition font-semibold text-sm text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-3 right-3 text-gray-700 hover:text-red-600"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                {activeService.icon}
                <h3 className="text-2xl font-bold text-black">
                  {activeService.title}
                </h3>
              </div>
              <p className="text-blue-950 mb-4">{activeService.description}</p>

              {/* Buttons in Modal */}
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setActiveService(null)}
                  className="flex-1 bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition font-semibold text-sm"
                >
                  Close
                </button>
                <Link
                  href="/portfolio"
                  className="flex-1 bg-transparent border-2 border-blue-800 text-blue-800 py-2 rounded hover:bg-blue-800 hover:text-white transition font-semibold text-sm text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}