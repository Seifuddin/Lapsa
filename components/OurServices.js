"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    icon: <Layout className="w-6 h-6 text-orange-600" />,
    image: "/images/creative-web-design-studio-with-flying-web-page-layout-elements-concept_1029473-56271.avif",
  },
  {
    title: "Software Development",
    description:
      "Transform your innovative ideas into reality with our bespoke software development services. We build custom applications that solve real business problems.",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/what-is-software-development.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "From logos and branding to brochures and posters, we deliver eye-catching graphic design that communicates your message and captivates your audience.",
    icon: <PenTool className="w-6 h-6 text-orange-600" />,
    image: "/images/art_design_740x317.jpg",
  },
  {
    title: "Digital Printing",
    description:
      "Get premium quality digital printing solutions for business cards, flyers, posters, and more — perfect for both personal and corporate branding.",
    icon: <Printer className="w-6 h-6 text-orange-600" />,
    image: "/images/digitalprinting.jpg",
  },
  {
    title: "Website Maintenance",
    description:
      "Let us handle the updates, security, and performance tuning so your site stays reliable, safe, and optimized — giving you peace of mind.",
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    image: "/images/Website-Maintenance-is-No-Longer.webp",
  },
  {
    title: "Mobile App Development",
    description:
      "We develop powerful and user-friendly mobile apps that bring your brand to your customer’s fingertips — across Android and iOS platforms.",
    icon: <Smartphone className="w-6 h-6 text-orange-600" />,
    image: "/images/download (2).jpg",
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative bg-blue-100 z-0 py-12 px-5 mx-auto">
      {/* Background image 
      <div className="absolute inset-0 -z-10 opacity-50">
        <img
          src="/images/pngwing.com (13).png" // Update this path if needed
          alt="FAQ background"
          className="w-full h-full object-cover"
        />
      </div>
      */}
  <div className="absolute inset-0 z-0"></div> {/* Optional overlay */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-center max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    Our Services<span className="text-orange-600"></span>
                  </h1>
    <p className="italic text-blue-900 font-semibold text-lg mb-10 max-w-6xl mx-auto">
      Everything You Need to Succeed Online.
    </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-md border border-gray-300 shadow-lg overflow-hidden bg-gray-100 transition duration-300 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover border-b border-gray-300"
              />
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-blue-600">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-950 text-sm line-clamp-3">
                  {service.description}
                </p>
                <button
                  onClick={() => setActiveService(service)}
                  className="inline-block bg-blue-600 text-white py-2 px-6 mt-4 text-sm font-semibold rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl"
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-3 text-blue-950 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-2 mb-2">
              {activeService.icon}
              <h3 className="text-xl font-bold text-orange-700">{activeService.title}</h3>
            </div>
            <p className="text-blue-950">{activeService.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}