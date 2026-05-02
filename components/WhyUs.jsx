"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  PenTool,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      title: "Trusted Expertise",
      description:
        "Years of experience delivering world-class web and graphic solutions that elevate your brand.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      title: "Creative Excellence",
      description:
        "We blend design and tech to craft visually stunning and functionally powerful results.",
    },
    {
      icon: <Users className="w-5 h-5 text-yellow-400" />,
      title: "Client-Centered Approach",
      description:
        "Your goals come first. We listen, understand, and deliver tailored solutions with full transparency.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-yellow-400" />,
      title: "Speed & Reliability",
      description:
        "We deliver fast, optimized websites with zero compromise on quality or performance.",
    },
  ];

  return (
    <section className="bg-yellow-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">

        <span className="inline-block bg-yellow-200 text-blue-800 px-4 py-1 rounded-full text-xs fontsemibold tracking-wide">
              Why Us
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Why Choose
              <span className="text-yellow-500"> Lapsa</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-200 mx-auto rounded-full mt-3"></div>

            <p className="my-4 text-gray-600 text-base">
              We're not just a design agency — we're your creative growth partner.
            </p>

            </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative border rounded overflow-hidden shadow-xl">
              <img
                src="/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg"
                alt="Capvim Publishing"
                className="w-full h-[300px] lg:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Compact Features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="group p-1 rounded border-b border-yellow-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 p-2 flex items-center justify-center rounded bg-gradient-to-r from-blue-600 to-blue-900 group-hover:bg-yellow-700 transition-all duration-300">
                      <div className="group-hover:text-white transition duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-green-700 transition duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
