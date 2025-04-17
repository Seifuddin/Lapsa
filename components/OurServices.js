"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Code, PenTool, Printer, Wrench, Smartphone, X } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "We create visually stunning and highly functional websites tailored to your brand’s unique needs. Our custom web design solutions ensure a seamless user experience and a strong online presence.",
    icon: <Layout className="w-6 h-6 text-orange-700" />,
    image: "/images/developing a website.o.avif",
  },
  {
    title: "Software Development",
    description:
      "Transform your innovative ideas into reality with our bespoke software development services. We design and build custom software solutions to meet your specific business needs and drive growth.",
    icon: <Code className="w-6 h-6 text-orange-700" />,
    image: "/images/graphic-designers-vs-logo-designers.webp",
  },
  {
    title: "Graphic Design",
    description:
      "Bring your ideas to life with our expert graphic design services. From logos, business cards, brochures and posters, we create visually stunning designs that captivate and communicate your message effectively.",
    icon: <PenTool className="w-6 h-6 text-orange-700" />,
    image: "/images/developing a website.o.avif",
  },
  {
    title: "Digital Printing",
    description:
      "Digital printing is a modern printing method that offers high-quality and cost-effective solutions for both small and large-scale projects. Ideal for vibrant graphics and intricate details.",
    icon: <Printer className="w-6 h-6 text-orange-700" />,
    image: "/images/developing a website.o.avif",
  },
  {
    title: "Website Maintenance",
    description:
      "Our comprehensive website maintenance services ensure your site remains up-to-date, secure, and fully functional. Trust us to keep your website running smoothly and efficiently.",
    icon: <Wrench className="w-6 h-6 text-orange-700" />,
    image: "/images/developing a website.o.avif",
  },
  {
    title: "Mobile App Development",
    description:
      "Engage your audience on-the-go with our cutting-edge mobile app development services. We create user-friendly, feature-rich mobile apps that enhance your brand’s reach and customer interaction.",
    icon: <Smartphone className="w-6 h-6 text-orange-700" />,
    image: "/images/developing a website.o.avif",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-gradient-to-tr from-orange-50 via-white to-orange-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-orange-700">Our Services</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-orange-700">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                <button
                  onClick={() => setActiveService(service)}
                  className="inline-block bg-orange-700 text-white py-2 px-6 mt-4 text-sm font-semibold rounded hover:bg-blue-600 transition-all duration-300"
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-lg animate-fade-in-up">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
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
            <p className="text-gray-600">{activeService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}