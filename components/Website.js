"use client";
import { Globe, TrendingUp, Users, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "./CTA";

const timelineItems = [
  { icon: Globe, color: "bg-blue-600", title: "Global Reach", text: "Reach customers beyond your local area and grow your business worldwide." },
  { icon: TrendingUp, color: "bg-green-600", title: "Business Growth", text: "Attract new clients, showcase your services, and increase sales opportunities." },
  { icon: Users, color: "bg-purple-600", title: "Credibility", text: "A professional website builds trust and shows that your brand is reliable." },
  { icon: Smartphone, color: "bg-pink-600", title: "24/7 Availability", text: "Customers can find you anytime, anywhere, even outside business hours." },
];

export default function WhyWebsite() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What is a Website?
        </motion.h2>

        <p className="text-gray-600 leading-relaxed mb-12 text-center">
          A website is your business’s online home — a digital space where 
          customers can learn about who you are, what you offer, and how to 
          connect with you.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
          Why Your Business Needs a Website
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {timelineItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="relative border-l-4 border-blue-600 pl-10 mb-10"
              >
                <span className={`absolute left-[-28px] top-1 ${item.color} text-white p-2 rounded-full`}>
                  <Icon className="w-5 h-5" />
                </span>
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12">
          <CTA />
        </div>
      </div>
    </section>
  );
}
