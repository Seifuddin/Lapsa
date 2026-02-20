"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Lapsa Web & Graphics offer?",
    answer:
      "We provide web development, graphic design, branding, and digital solutions tailored to businesses and individuals.",
  },
  {
    question: "Can I get a custom website design?",
    answer:
      "Absolutely! We create unique websites based on your brand identity and specific business needs.",
  },
  {
    question: "Do you provide graphic design services?",
    answer:
      "Yes, we design logos, brochures, social media graphics, and promotional materials that stand out.",
  },
  {
    question: "How do I request a project or service?",
    answer:
      "You can reach out to us via our contact form, email, or directly through our website to discuss your project.",
  },
  {
    question: "Can you help with website maintenance?",
    answer:
      "Yes, we offer ongoing support, updates, and maintenance to ensure your website runs smoothly.",
  },
  {
    question: "Do you offer consultation for businesses?",
    answer:
      "Certainly! We provide expert advice on web strategies, digital marketing, and branding to help your business grow online.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Questions And Answers
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently 
            <span className="text-blue-700"> Asked Questions </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-blue-200 rounded-full mx-auto my-3"
          ></motion.div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            Have questions? We’ve got answers about our services, projects, and how we can help your business grow online.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-blue-300 rounded shadow-sm bgwhite overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-3 py-4 text-left hover:bg-amber-100 transition"
              >
                <span className="text-gray-900 font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-800 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 pb-4 text-gray-600 text-base md:font-medium leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}