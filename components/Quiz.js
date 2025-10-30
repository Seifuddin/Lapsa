"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Filter } from "lucide-react";

const faqs = [
  { category: "General", question: "What services do you offer?", answer: "We provide web development and graphic design services tailored to your needs." },
  { category: "Support", question: "How can I contact support?", answer: "You can reach us via email lapsatechnologies@gmail.com or through our contact form." },
  { category: "Services", question: "Do you offer custom website designs?", answer: "Yes, we create custom designs based on your brand identity and goals." },
  { category: "Timeline", question: "What is your turnaround time?", answer: "Project timelines vary, but we always deliver efficiently without compromising quality." },
  { category: "Services", question: "Do you offer website maintenance?", answer: "Absolutely, we provide ongoing support and maintenance packages." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept Lipa na M-Pesa and direct payments to 0111 608 331 (name: Edwin)." },
  { category: "SEO", question: "Do you provide SEO optimization?", answer: "Yes, we include basic SEO and offer advanced optimization as an add-on." },
  { category: "Branding", question: "Do you offer branding services?", answer: "Yes, we help businesses develop strong brand identities and visual consistency." },
];

const uniqueCategories = [...new Set(faqs.map((faq) => faq.category))];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-red-600 text-sm font-bold uppercase tracking-wider">FAQ</h2>
        <h2 className="text-blue-900 text-3xl md:text-5xl font-extrabold font-serif mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 italc font-medium mb-10 max-w-2xl mx-auto">
          Find answers to the most common questions about our services and process.
        </p>

        {/* Search bar */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-blue-700" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
        </div>

        {/* Mobile filter toggle */}
        {isMobile && (
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-blue-700 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              <Filter className="w-4 h-4" />
              Filter Categories
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        {/* Category filters */}
        <AnimatePresence>
          {(!isMobile || showFilters) && (
            <motion.div
              key="filters"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-12"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {["All", ...uniqueCategories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-blue-700 text-white shadow-md"
                        : "bg-white border-blue-200 text-blue-800 hover:bg-blue-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ items */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-5 font-semibold text-blue-900"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 transform transition-transform duration-300 ${
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-5 pb-5 text-blue-800 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-blue-900 col-span-full">
              No FAQs match your search.
            </p>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-2xl shadow-lg p-10 max-w3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-3 font-serif">
            Still have questions?
          </h3>
          <p className="text-gray-200 mb-6">
            Reach out to our team — we’d love to help bring your ideas to life.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contacts"
              className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-all"
            >
              Contact Us
            </a>
            <a
              href="/quote"
              className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
