"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Dialog } from "@headlessui/react";

export default function Why() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Creative & Innovative Solutions",
      desc: "We blend creativity with technology to craft unique digital experiences that set your brand apart.",
      modal: "From custom websites to impactful graphics, we prioritize originality and innovation in every project, delivering solutions that reflect your brand identity."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Client-Focused Collaboration",
      desc: "We listen, understand, and design with your goals at the center of every decision.",
      modal: "Your vision is our mission. We engage you throughout the process to ensure the final product is not only functional but resonates with your audience."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
      title: "Responsive & Scalable Design",
      desc: "Our designs are responsive, mobile-friendly, and built for future growth.",
      modal: "Whether it’s a landing page, an e-commerce store, or a corporate site, we ensure that every digital product performs flawlessly on all devices and scales with your business."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Reliable Support & Maintenance",
      desc: "Beyond launch, we provide dependable support to keep your website and visuals running smoothly.",
      modal: "We offer ongoing maintenance, updates, and security monitoring — so you can focus on growing your business while we take care of your digital infrastructure."
    },
  ];

  return (
    <section className="relative bg-gray-50 z-0 py-12 mx-auto">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img
          src="/images/pngwing.com (7).png" // Update this path if needed
          alt="FAQ background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl text-orange-500 font-bold mb-4">Why Choose Lapsa Web & Graphics</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            We’re not just another agency — we’re your creative tech partner. See why clients trust us for modern web design and graphics that leave a lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side (Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp"
              alt="Why Choose Us"
              className="rounded-2xl w-full shadow-xl justify-center"
            />
          </motion.div>

          {/* Right Side (Features) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex w-full border bg-gradient-to-tr from-orange-300 via-white to-orange-300 items-start gap-4 cursor-pointer hover:bg-orange-50 p-2 rounded-lg shadow-xl transition-transform duration-300"
                onClick={() => setSelectedFeature(item)}
              >
                <div className="bg-blue-600 p-3 rounded-full border-2">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-blue-600">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
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
            <Dialog.Description className="text-gray-700">
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