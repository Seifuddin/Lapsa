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

const services = [
  {
    title: "Web Design",
    description:
      "We create visually stunning and highly functional websites tailored to your brand’s unique needs. Our custom web design solutions ensure a seamless user experience and a strong online presence.",
    icon: <Layout className="w-8 h-8 text-orange-600" />,
    image:
      "/images/creative-web-design-studio-with-flying-web-page-layout-elements-concept_1029473-56271.avif",
  },
  {
    title: "Software Development",
    description:
      "Transform your innovative ideas into reality with our bespoke software development services. We build custom applications that solve real business problems.",
    icon: <Code className="w-8 h-8 text-orange-600" />,
    image: "/images/what-is-software-development.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "From logos and branding to brochures and posters, we deliver eye-catching graphic design that communicates your message and captivates your audience.",
    icon: <PenTool className="w-8 h-8 text-orange-600" />,
    image: "/images/art_design_740x317.jpg",
  },
  {
    title: "Digital Printing",
    description:
      "Get premium quality digital printing solutions for business cards, flyers, posters, and more — perfect for both personal and corporate branding.",
    icon: <Printer className="w-8 h-8 text-orange-600" />,
    image: "/images/digitalprinting.jpg",
  },
  {
    title: "Website Maintenance",
    description:
      "Let us handle the updates, security, and performance tuning so your site stays reliable, safe, and optimized — giving you peace of mind.",
    icon: <Wrench className="w-8 h-8 text-orange-600" />,
    image: "/images/Website-Maintenance-is-No-Longer.webp",
  },
  {
    title: "Mobile App Development",
    description:
      "We develop powerful and user-friendly mobile apps that bring your brand to your customer’s fingertips — across Android and iOS platforms.",
    icon: <Smartphone className="w-8 h-8 text-orange-600" />,
    image: "/images/download (2).jpg",
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative z-0 py-16 bg-gradient-to-b from-blue-50 via-white to-orange-50 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-700 mb-4">
          Our Services
        </h2>
        <p className="italic text-blue-900 font-medium text-lg mb-12 max-w-2xl mx-auto">
          Everything you need to succeed online — from design to deployment.
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
              className="relative rounded-2xl overflow-hidden shadow-xl border border-orange-200 bg-white/60 backdrop-blur-md transition-all duration-300 hover:shadow-2xl group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left space-y-3">
                <div className="flex items-center gap-2">
                  {service.icon}
                  <h3 className="text-xl font-bold text-orange-600">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-950 text-sm line-clamp-3">
                  {service.description}
                </p>
                <button
                  onClick={() => setActiveService(service)}
                  className="inline-block text-sm bg-orange-600 text-white px-5 py-2 rounded-md mt-2 hover:bg-blue-700 transition"
                >
                  Learn More
                </button>
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
                <h3 className="text-2xl font-bold text-orange-700">
                  {activeService.title}
                </h3>
              </div>
              <p className="text-blue-950">{activeService.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
