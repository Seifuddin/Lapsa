"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiSmile, FiClock, FiAward } from "react-icons/fi";
import CountUp from "react-countup";

const counters = [
  { label: "Projects Completed", value: 150 },
  { label: "Happy Clients", value: 120 },
  { label: "Years of Experience", value: 5 },
  { label: "Design Awards", value: 10 },
];

const icons = [FiCheckCircle, FiSmile, FiClock, FiAward];

export default function AnimatedCounters() {
  return (
    <div className="relative z-0 p-5 rounded-lg shadow-lg py-10 bg-blue-950 text-white">
      {/* Background Image 
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/pexels-pixabay-268533.jpg" // Replace with your actual image
          alt="Counters Background"
          className="w-full h-full object-cover bg-black/30"
        />
      </div>
      */}

      {/* Optional Overlay */}
      <div className="absolute inset-0 -z-10"></div>
          <h2 className="text-3xl text-center text-orange-500 font-bold mb-10">Our Impact</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
        {counters.map((counter, index) => {
          const Icon = icons[index];
          const percentage = Math.min((counter.value / 200) * 100, 100);

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Icon className="text-4xl mb-2 text-white" />
              <h4 className="text-3xl font-bold">
                <CountUp end={counter.value} duration={2} />
              </h4>
              <p className="text-sm mt-2 font-medium">{counter.label}</p>
              <div className="w-full mt-2 bg-white/30 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-white h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 2 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}