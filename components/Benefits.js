"use client";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section
      className="relative bg-cover bg-gray-50 bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url('/images/pngwing.com (7).png')`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/50 to-white/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-2">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Helping Your Business Grow
          </h2>
          <p className="text-blue-900 text-2xl max-w-4xl mx-auto">
            At Lapsa Web & Graphics, we merge innovation with functionality to help you attract, engage, and convert customers through powerful digital solutions.
          </p>
        </motion.div>

        {/* Image + Text Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src="/images/image-removebg-preview (13).png"
              alt="Digital Services"
              className="w-full max-w-md object-contain px-4"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 space-y-6 text-center md:text-left p-5"
          >
            <h3 className="text-2xl text-left font-semibold text-blue-900">
              We connect your brand to the world.
            </h3>
            <p className="text-gray-700 text-left text-base leading-relaxed">
              Whether you're a startup or an established brand, we create tailored websites, intuitive mobile apps, and scalable software that align with your goals. Our digital strategy focuses on visibility, performance, and growth—so your business doesn’t just exist online, it thrives.
            </p>
            <p className="text-gray-700 text-left text-base leading-relaxed">
              From stunning web designs and user-focused interfaces to full-stack development and ongoing support, we empower businesses to stand out in the competitive digital world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}