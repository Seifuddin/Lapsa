"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, ShieldCheck } from "lucide-react";
import { Dialog } from "@headlessui/react";

export default function Why() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      title: "Expertise in Publishing",
      desc: "With years of experience, we understand the intricacies of publishing from manuscript to market.",
      modal: "Our publishing experts guide you at every step — from editing to distribution — ensuring your work reaches its audience professionally."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Client-Centered Approach",
      desc: "We listen, advise, and collaborate to turn your ideas into published masterpieces.",
      modal: "We value close collaboration with our clients to tailor publishing solutions that truly reflect their goals and vision."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Quality & Precision",
      desc: "Our editing and design standards are unmatched, ensuring every detail is perfect.",
      modal: "Our quality assurance process ensures every book is meticulously edited, professionally designed, and ready for success."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Trusted by Authors",
      desc: "Our reputation is built on transparency, reliability, and exceptional results.",
      modal: "Authors trust us for our integrity, dedication, and consistent delivery of top-tier publishing services."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-blue-300 via-white to-blue-200 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl text-orange-600 font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes us a top choice for authors, creatives, and businesses looking for professional publishing services.
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
              src="/images/developing a website.o.avif"
              alt="Why Choose Us"
              className="rounded-2xl w-full shadow-lg"
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
                className="flex w-full bg-gradient-to-tr from-orange-200 via-white to-orange-200 items-start gap-4 cursor-pointer hover:bg-orange-50 p-2 rounded-lg shadow-sm transition-transform duration-300"
                onClick={() => setSelectedFeature(item)}
              >
                <div className="bg-orange-100 p-3 rounded-full">
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