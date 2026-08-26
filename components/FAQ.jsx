"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4" />

          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            Have questions? We've got answers about our services, projects, and how we can help your business grow online.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-blue-200 bg-blue-50/50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      openIndex === index ? "text-blue-700" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-all duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
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
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pl-14 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-slate-600">
              Still have questions?
            </span>
            <Link
              href="/contact"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              Contact us
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}