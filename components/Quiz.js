"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide web development and graphic design services tailored to your needs.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us via email or our contact form on the website.",
  },
  {
    question: "Do you offer custom website designs?",
    answer: "Yes, we create custom designs based on your brand identity and business needs.",
  },
  {
    question: "What is your turnaround time?",
    answer: "Project timelines depend on complexity, but we always strive to deliver on time.",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, we offer ongoing support and maintenance services for all our clients.",
  },
  {
    question: "Can I request a redesign of an existing website?",
    answer: "Yes, we specialize in website redesigns to enhance performance and aesthetics.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer: "Yes, we include basic SEO optimizations and offer advanced SEO as an add-on service.",
  },
  {
    question: "Do you offer branding services?",
    answer: "Yes, we help businesses build strong brand identities through design and strategy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-medium bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-4 text-gray-700">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}