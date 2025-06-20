"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import {
  BookOpen,
  Code,
  ImagePlus,
  FileText,
  Printer,
  HelpCircle,
} from "lucide-react";

// Service data
const services = [
  {
    title: "Digital Marketing",
    description:
      "Creating visually appealing, user-friendly layouts that reflect your brand and engage visitors. This Includes: UI/UX Design, Responsive Layouts (Mobile and Desktop), Landing Page Design, and Website Redesign",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/digital-marketing-header.jpg",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Photo Mounting",
    description:
      "Building interactive, fast-loading websites using modern frameworks and technologies. This includes: HTML, CSS and Javascript, React.js and Next.js, Tailwind Css and Bootstrap, and Responsive & Cross-Border Compatibility.",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/mounting.jpg",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Photography",
    description:
      "Developing the core logic, database interactions, and server-side operations of your web application. This includes: API Integration and Development, Database Setup( MySQL, MongoDB), Authentication Systems, and Frameworks(Flask, Django, Node.js)",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/photography.jpg",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Video Editing",
    description:
      "Optimizing websites to rank higher on search engines and attract organic traffic. This Includes: On-Page SEO (Meta Tags, Speed, Mobile), Sitemap.xml & Robots.txt, Google Analytics & Search Console Setup, and SEO-Friendly URL Structures.",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/videoediting.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Art and Design",
    description:
      "Ongoing support to keep your website secure, updated and performing well. This Includes: Security Monitoring, Plugin/Theme Updates, Regular Backups, and Bug Fixes.",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/artdesign.jpg",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "All cyber services",
    description:
      "Helping you get your site live with reliable, fast, and secure hosting options. This includes: Domain Registration Assistance, Hosting Setup, SSL Certificate Setup, and Email Setup(Optional)",
    icon: <Code className="w-6 h-6 text-orange-600" />,
    image: "/images/cybercafee.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },

];

// Pricing Modal Component
const PricingModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-blue-600">
          {service?.title} - Pricing
        </Dialog.Title>
        <p className="text-gray-700 mt-4">{service?.pricing}</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-orange-700"
          onClick={onClose}
        >
          Close
        </button>
      </Dialog.Panel>
    </div>
  </Dialog>
);

// Service Modal Component
const ServiceModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-blue-600">
          <img
            src={service?.image}
            className="w-full h-44 object-cover rounded-md"
          />
          {service?.title}
        </Dialog.Title>
        <p className="text-gray-700 mt-4">{service?.description}</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-orange-700"
          onClick={onClose}
        >
          Close
        </button>
      </Dialog.Panel>
    </div>
  </Dialog>
);

// Request Modal Component
const RequestModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-blue-600">
          Request: {service?.title}
        </Dialog.Title>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="Describe your request..."
            className="w-full border rounded px-3 py-2 h-24"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default function OtherServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isRequestOpen, setRequestOpen] = useState(false);

  const openPricingModal = (service) => {
    setSelectedService(service);
    setPricingOpen(true);
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    setServiceOpen(true);
  };

  const openRequestModal = (service) => {
    setSelectedService(service);
    setRequestOpen(true);
  };

  return (
    <>
      <Head>
        <title> Lapsa Web and Graphics | Other Services</title>
        <meta
          name="description"
          content="Explore professional web services including Web Design, SEO Optimization, Website Maintenence, and more by Lapsa Web and Graphics."
        />
      </Head>

      <section
      className="relative bg-cover bg-center bg-blue-50 bg-no-repeat py-10 text-gray-800 p-5">
      
      {/* style={{
        backgroundImage: `url('/images/pngwing.com (7).png')`,
      }}
      */}
    
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="max-w-7xl text-xl md:text-2xl font-extrabold text-orange-500 mb-5">
                    Other Services<span className="text-orange-500"></span>
                  </h1>

                  <p className="max-w-4xl mx-auto italic text-blue-900 font-semibold mb-10">
      Apart from Website and Graphic Design services, we offer other amazing services as well, they include Arts, Printing and all cyber services.
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
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 border-gray-200 rounded-md shadow-lg overflow-hidden cursor-pointer transition duration-300 flex flex-col justify-between"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    {service.icon}
                    <h3 className="font-bold text-blue-600">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-blue-900 text-sm line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <div className="relative flex items-center w-full justify-center space-x-1">
                    <button
                      onClick={() => openPricingModal(service)}
                      className="bg-blue-800 w-full text-white px-3 py-2 rounded-sm text-sm hover:bg-orange-700"
                    >
                      See Pricing
                    </button>
                    {/* <button
                      onClick={() => openRequestModal(service)}
                      className="bg-blue-800 w-full text-white px-3 py-2 rounded-sm text-sm hover:bg-orange-700"
                    >
                      Request Service
                    </button>
                    */}
                    <button
                  onClick={() => openServiceModal(service)}
                  className="bg-blue-600 w-full text-white px-3 py-2 rounded-sm text-sm hover:bg-orange-700"
                >
                  Learn More
                </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <PricingModal
          service={selectedService}
          isOpen={isPricingOpen}
          onClose={() => setPricingOpen(false)}
        />

        <ServiceModal
          service={selectedService}
          isOpen={isServiceOpen}
          onClose={() => setServiceOpen(false)}
        />

        <RequestModal
          service={selectedService}
          isOpen={isRequestOpen}
          onClose={() => setRequestOpen(false)}
        />
      </section>
    </>
  );
}