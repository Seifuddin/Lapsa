"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Code2, Palette, Smartphone, Rocket } from "lucide-react";

export default function Whatis() {
  return (
    <section className="bg-yellow-50 py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <span className="inline-block bg-yellow-200 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Did You know?
          </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
          What Is a <span className="text-yellow-500">Website</span>?
        </h2>
        <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full my-3"></div>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A website is your digital office, store, and brand identity —
            accessible online 24/7 from anywhere in the world.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            
            <div className="flex flex-col gap-2 p-2 rounded border-b border-amber-200">
              <div className="flex gap-3 items-center">
                <Globe className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-600 to-blue-900 p-2 w-8 h-8 rounded" />
                <h4 className="font-semibold text-gray-800 md:text-lg">Your Online Presence</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base ml-7">
                Being online allows potential customers to find you anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-2 rounded border-b border-amber-200">
              <div className="flex gap-3 items-center">
                <LayoutDashboard className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-600 to-blue-900 p-2 w-8 h-8 rounded" />
                <h4 className="font-semibold text-gray-800 md:text-lg">A Digital Storefront</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base ml-7">
                Your website showcases products or services, just like a physical shop.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-2 rounded border-b border-amber-200">
              <div className="flex gap-3 items-center">
                <Smartphone className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-600 to-blue-900 p-2 w-8 h-8 rounded" />
                <h4 className="font-semibold text-gray-800 md:text-lg">Accessible Everywhere</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base ml-7">
                Works seamlessly on phones, tablets, and computers for all users.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-2 rounded border-b border-amber-200">
              <div className="flex gap-3 items-center">
                <Rocket className="text-yellow-400 mt-1 bg-gradient-to-r from-blue-600 to-blue-900 p-2 w-8 h-8 rounded" />
                <h4 className="font-semibold text-gray-800 md:text-lg">A Growth Tool</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base ml-7">
                Helps attract more customers, increase sales, and grow your brand.
              </p>
            </div>

          </div>
        </div>
        {/* RIGHT CREATIVE IMAGE SECTION */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
        
                  {/* Main Image */}
                  <div className="relative w-full max-wmd h-[200px] md:h-[400px] rounded overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src="/images/CDG_blog_post_image_01-850x412.jpg" // replace with your real image
                      alt="Lapsa Web and Graphics Team"
                      fill
                      className="object-cover bg-white"
                    />
                  </div>
        
                  {/* Floating UI Card */}
                  <div className="absolute -top-6 -left-6 bg-white text-blue-900 p-4 rounded-xl shadow-xl w-40 hidden md:block">
                    <p className="text-xs font-semibold mb-1">UI Preview</p>
                    <div className="h-2 bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 bg-yellow-400 rounded w-3/4"></div>
                  </div>
        
                  {/* Floating Branding Card */}
                  <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-950 p-4 rounded-xl shadow-xl w-44 hidden md:block">
                    <p className="text-xs font-bold mb-1">Brand Identity</p>
                    <div className="h-2 bg-blue-900 rounded mb-2"></div>
                    <div className="h-2 bg-blue-900 rounded w-2/3"></div>
                  </div>
        
                </motion.div>

        {/* RIGHT LAPTOP MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden relative flex justify-center"
        >

          {/* Laptop Base */}
          <div className="relative w-full max-w-xl">

            {/* Screen */}
            <div className="bg-blue-900 rounded-t-2xl p-3 shadow-2xl">
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