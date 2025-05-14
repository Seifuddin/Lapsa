"use client";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url('/images/pngwing.com (7).png')`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/50 to-white/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4 px-4">
            Helping Your Business Grow
          </h2>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto px-4">
            At Lapsa Web & Graphics, we merge innovation with functionality to help you attract, engage, and convert customers through powerful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 p-5"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              We connect your brand to the world.
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether you're a startup or an established brand, we create tailored websites, intuitive mobile apps, and scalable software that align with your goals. Our digital strategy focuses on visibility, performance, and growth—so your business doesn’t just exist online, it thrives.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              From stunning web designs and user-focused interfaces to full-stack development and ongoing support, we empower businesses to stand out in the competitive digital world.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/image-removebg-preview (13).png"
              alt="Digital Services"
              className="w-full max-h-[400px] object-contain px-4 mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}