"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20">
      {/* Optional background image */}
      {/* style={{ backgroundImage: `url('/images/pngwing.com (7).png')` }} */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white z-0 opacity-01"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-center text-2xl md:text-4xl font-extrabold text-orange-600 mb-5">
            The Benefits of Having a Website
          </h1>
          <p className="italic text-blue-900 font-semibold text-lg max-w-3xl mx-auto">
            A professional website is your most powerful tool to grow, connect, and convert in the digital world.
          </p>
        </motion.div>

        {/* Image + Text Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-1 flex justify-center"
          >
            <img
              src="/images/image-removebg-preview (13).png"
              alt="Website Illustration"
              className="w-full max-w-md object-contain px-4"
            />
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-2 space-y-6 text-left p-5"
          >
            <h3 className="text-xl font-bold text-orange-700">
              Why Every Brand Needs a Website:
            </h3>
            <ul className="space-y-4 text-blue-950">
              {[
                "🌐 24/7 Online Presence – Be available even when your office is closed.",
                "🚀 Reach More Customers – Expand beyond your local area.",
                "✅ Build Credibility – A modern site makes you look trustworthy.",
                "📱 Mobile Friendly – Engage users on any device.",
                "🔍 Be Found on Google – SEO brings free organic traffic.",
                "📈 Track Growth – Use analytics to improve your marketing.",
                "💼 Sell Products & Services – Turn your site into a money-maker.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start shadow-md bg-gray-50 gap-3 p-2">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
