"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Dialog } from "@headlessui/react";

export default function Why() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Creative & Innovative Solutions",
      desc: "We blend creativity with technology to craft unique digital experiences that set your brand apart.",
      modal: "From custom websites to impactful graphics, we prioritize originality and innovation in every project, delivering solutions that reflect your brand identity."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Client-Focused Collaboration",
      desc: "We listen, understand, and design with your goals at the center of every decision.",
      modal: "Your vision is our mission. We engage you throughout the process to ensure the final product is not only functional but resonates with your audience."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-orange-500" />,
      title: "Responsive & Scalable Design",
      desc: "Our designs are responsive, mobile-friendly, and built for future growth.",
      modal: "Whether it’s a landing page, an e-commerce store, or a corporate site, we ensure that every digital product performs flawlessly on all devices and scales with your business."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Reliable Support & Maintenance",
      desc: "Beyond launch, we provide dependable support to keep your website and visuals running smoothly.",
      modal: "We offer ongoing maintenance, updates, and security monitoring — so you can focus on growing your business while we take care of your digital infrastructure."
    },
  ];

  return (
    <section className="relative bg-blue-100 z-0 py-10 mx-auto">
      {/* Background image 
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/pngwing.com (13).png" // Update this path if needed
          alt="FAQ background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-5">
          <h1 className="text-center max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    Why Us<span className="text-orange-600"></span>
                  </h1>
          <p className="italic text-blue-900 font-semibold text-lg max-w-5xl mx-auto">
            The Lapsa Advantage: Why Clients Trust Us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side (Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/image-removebg-preview (44).png"
              alt="Why Choose Us"
              className="rounded-2xl w-full justify-center p-24 md:p-0 lg:p-20"
            />
          </motion.div>

          {/* Right Side (Features) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-3"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex w-full border-2 bg-white shadow-md items-start gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-transform duration-300"
                onClick={() => setSelectedFeature(item)}
              >
                <div className="bg-white p-3 rounded-full border-2">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-blue-600">{item.title}</h4>
                  <p className="text-blue-900">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedFeature} onClose={() => setSelectedFeature(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
            <Dialog.Title className="text-2xl font-bold mb-2 text-orange-700">
              {selectedFeature?.title}
            </Dialog.Title>
            <Dialog.Description className="text-blue-950">
              {selectedFeature?.modal}
            </Dialog.Description>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}