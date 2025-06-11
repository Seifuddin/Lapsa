"use client";
import { motion } from "framer-motion";
import { useTypingText } from "@/hooks/useTypingText"; // Import the custom hook
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  const words = [
    "About Us.",
    "Learn more about Lapsa...",
  ];

  const { displayText, cursor } = useTypingText(words);

  return (
    <section className="relative pt-24 pb-10 bg-black/100 overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/images/pexels-pixabay-268533.jpg')] bg-cover bg-center"></div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <BookOpen size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-indigo-200"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Pencil size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Paperclip size={30} />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-orange-600 mb-4"
        >
          {displayText}
          <span className="blinking-cursor">{cursor}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-100 italic max-w-2xl font-semibold"
        >
          We are Lapsa, We Design Your Digital Future by Elevating Your Brand Online, We create beautiful websites and eye-catching designs that make an impact.
        </motion.p>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #4f46e5;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}