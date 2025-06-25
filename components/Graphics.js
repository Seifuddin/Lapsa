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
  Shirt,
} from "lucide-react";

const services = [
  {
    title: "Logo & Branding Design",
    description:
      "We craft visually striking logos and cohesive brand identities that reflect your business's personality, values, and mission—ensuring you leave a lasting impression.",
    icon: <ImagePlus className="w-6 h-6 text-orange-600" />,
    image: "/images/logodesign.jpg",
  },
  {
    title: "Business Cards & Fliers",
    description:
      "Get professionally designed business cards, fliers, posters, and promotional materials that grab attention and communicate your message clearly across both print and digital platforms.",
    icon: <FileText className="w-6 h-6 text-orange-600" />,
    image: "/images/blog-logo-3.jpg",
  },
  {
    title: "Magazines, Books & Diaries",
    description:
      "We design well-structured magazines, books, reports, and diaries that are easy to read and visually polished—perfect for professional, educational, or promotional use.",
    icon: <BookOpen className="w-6 h-6 text-orange-600" />,
    image: "/images/The-Most-Beautiful-Brand-Books-and-Brand-Guidelines-Examples-6-Brand-Book-Templates-1.webp",
  },
  {
    title: "Stickers & Banners",
    description:
      "Enhance your brand visibility with vibrant sticker and banner designs ideal for marketing, events, product packaging, or promotions—available in all shapes and sizes.",
    icon: <Printer className="w-6 h-6 text-orange-600" />,
    image: "/images/cool-cash-app-card-designs-1-1.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Large Format Printing",
    description:
      "We offer high-quality large-format printing solutions for roll-up banners, billboards, vehicle wraps, and more—ensuring bold visibility and long-lasting results.",
    icon: <Printer className="w-6 h-6 text-orange-600" />,
    image: "/images/Large-Format-Printing_367726020_XL.jpg",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Cloth Branding",
    description:
      "Turn apparel into a marketing tool with custom-branded t-shirts, hoodies, caps, and uniforms using durable, high-quality print and embroidery techniques.",
    icon: <Shirt className="w-6 h-6 text-orange-600" />,
    image: "/images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg",
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
  
  export default function GraphicDesign() {
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
          <title> Lapsa Web and Graphics | Web Services</title>
          <meta
            name="description"
            content="Explore professional web services including Web Design, SEO Optimization, Website Maintenence, and more by Lapsa Web and Graphics."
          />
        </Head>
  
        <section
        className="relative bg-cover bg-center bg-gray-200 bg-no-repeat py-10 text-gray-800 p-6">
        
        {/* style={{
          backgroundImage: `url('/images/pngwing.com (7).png')`,
        }}
        */}
             
          <div className="max-w-7xl mx-auto text-center">
              <h1 className="max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                      Graphic Design & Digital Printing<span className="text-orange-500"></span>
                    </h1>
  
                    <p className="max-w-4xl mx-auto italic text-blue-900 font-semibold mb-10">
              From logos and branding to brochures and posters, we deliver eye-catching graphic design that communicates your message and captivates your audience.
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
                  className="bg-blue-50 border border-blue-300 rounded-md shadow-lg overflow-hidden cursor-pointer transition duration-300 flex flex-col justify-between"
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
                        className="bg-blue-600 w-full text-white px-3 py-2 rounded-sm text-sm hover:bg-orange-700"
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
                    className="bg-blue-500 w-full text-white px-3 py-2 rounded-sm text-sm hover:bg-orange-700"
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