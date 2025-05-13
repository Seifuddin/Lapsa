'use client';
import { motion } from "framer-motion";
import { FiBookOpen, FiUser, FiCalendar, FiAward } from "react-icons/fi";
import CountUp from "react-countup";

const counters = [
  { label: "Books Published", value: 320 },
  { label: "Authors Supported", value: 95 },
  { label: "Years in Publishing", value: 12 },
  { label: "Awards Received", value: 18 },
];

const icons = [FiBookOpen, FiUser, FiCalendar, FiAward];

export default function AnimatedCounters() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
        {counters.map((counter, index) => {
          const Icon = icons[index];
          const percentage = Math.min((counter.value / 400) * 100, 100); // Normalized width

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