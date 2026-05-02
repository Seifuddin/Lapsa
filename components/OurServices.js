"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { Layout, Code, Wrench, Smartphone, X } from "lucide-react";

/* =======================
   DATA
   ======================= */
const services = [
  {
    title: "Web Design",
    desc: "Beautiful, conversion-focused interfaces.",
    result: 40,
    suffix: "%",
    prefix: "+",
    label: "avg. engagement increase",
    details:
      "We craft premium UI/UX experiences that balance aesthetics and performance to drive real business results.",
    icon: Layout,
    image:
      "/images/creative-web-design-studio-with-flying-web-page-layout-elements-concept_1029473-56271.avif",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable web applications.",
    result: 3,
    suffix: "x",
    prefix: "",
    label: "faster performance",
    details:
      "Robust full-stack solutions optimized for speed and scalability.",
    icon: Code,
    image: "/images/what-is-software-development.jpg",
  },
  {
    title: "Maintenance",
    desc: "Reliable and secure websites.",
    result: 99.9,
    suffix: "%",
    prefix: "",
    label: "uptime reliability",
    details:
      "Continuous monitoring and optimization to keep your platform running flawlessly.",
    icon: Wrench,
    image: "/images/Website-Maintenance-is-No-Longer.webp",
  },
  {
    title: "Web Apps",
    desc: "App-like experiences in browsers.",
    result: 2,
    suffix: "x",
    prefix: "",
    label: "user retention boost",
    details:
      "We build progressive web apps that feel native and perform seamlessly.",
    icon: Smartphone,
    image: "/images/download (2).jpg",
  },
];

/* =======================
   COUNTER COMPONENT
   ======================= */
function Counter({ value, suffix = "", prefix = "" }) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(latest);
      },
    });

    return controls.stop;
  }, [value]);

  const formatted =
    value % 1 !== 0
      ? display.toFixed(1)
      : Math.round(display);

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* =======================
   COMPONENT
   ======================= */
export default function WebServicesPremium() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="mb-10 text-center max-w3xl">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            We build websites that feel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-400">
              fast, modern, and alive
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-sm md:text-lg">
            Not just websites—experiences engineered to convert.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-6">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(s)}
                className="min-w-[300px] cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.image}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-yellow-300" />
                    <h3 className="font-semibold text-sm">{s.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">
                    {s.desc}
                  </p>

                  {/* subtle result preview */}
                  <div className="text-xs text-yellow-300/80">
                    {s.prefix}{s.result}{s.suffix} {s.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-neutral-900 border border-white/10 rounded-2xl max-w-lg w-full p-6 relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <img
                src={active.image}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />

              <h3 className="text-2xl font-semibold mb-2">
                {active.title}
              </h3>

              {/* 🔥 ANIMATED RESULT */}
              <div className="text-3xl font-bold text-yellow-300 mb-1">
                <Counter
                  value={active.result}
                  prefix={active.prefix}
                  suffix={active.suffix}
                />
              </div>

              <p className="text-sm text-gray-400 mb-4">
                {active.label}
              </p>

              <p className="text-gray-400 mb-6">
                {active.details}
              </p>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-2 rounded-full font-medium hover:opacity-90 transition">
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}