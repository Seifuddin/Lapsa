"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Rocket } from "lucide-react";

export default function Whatis() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Did You know?
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Is a <span className="text-blue-700">Website</span>?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            A website is your digital office, store, and brand identity —
            accessible online 24/7 from anywhere in the world. It helps
            you connect with customers, showcase your services, and grow your business.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Globe className="text-blue-700 mt-1" />
                <h4 className="font-semibold text-gray-900 text-sm">Your Online Presence</h4>
              </div>
              <p className="text-gray-600 text-xs ml-7">
                Being online allows potential customers to find you anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <LayoutDashboard className="text-yellow-500 mt-1" />
                <h4 className="font-semibold text-gray-900 text-sm">A Digital Storefront</h4>
              </div>
              <p className="text-gray-600 text-xs ml-7">
                Your website showcases products or services, just like a physical shop.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Smartphone className="text-blue-700 mt-1" />
                <h4 className="font-semibold text-gray-900 text-sm">Accessible Everywhere</h4>
              </div>
              <p className="text-gray-600 text-xs ml-7">
                Works seamlessly on phones, tablets, and computers for all users.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Rocket className="text-yellow-500 mt-1" />
                <h4 className="font-semibold text-gray-900 text-sm">A Growth Tool</h4>
              </div>
              <p className="text-gray-600 text-xs ml-7">
                Helps attract more customers, increase sales, and grow your brand.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT LAPTOP MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* Laptop Base */}
          <div className="relative w-full max-w-lg">

            {/* Screen */}
            <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">

                {/* Browser Top Bar */}
                <div className="flex gap-2 px-4 py-3 border-b border-gray-200">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                </div>

                {/* Animated Website Content */}
                <div className="p-6 space-y-4">
                  <motion.div
                    animate={{ width: ["60%", "90%", "60%"] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="h-3 bg-blue-200 rounded"
                  ></motion.div>

                  <motion.div
                    animate={{ width: ["80%", "50%", "80%"] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="h-3 bg-yellow-300 rounded"
                  ></motion.div>

                  <motion.div
                    animate={{ width: ["40%", "70%", "40%"] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="h-3 bg-blue-300 rounded"
                  ></motion.div>
                </div>

              </div>
            </div>

            {/* Laptop Bottom Base */}
            <div className="h-6 bg-gray-800 rounded-b-2xl shadow-md"></div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 px-4 py-3 rounded-xl shadow-lg text-sm font-semibold"
            >
              24/7 Online
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}