"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Filter } from "lucide-react";

const faqs = [
  { category: "General", question: "What services do you offer?", answer: "We provide web development and graphic design services tailored to your needs." },
  { category: "Support", question: "How can I contact support?", answer: "You can reach us via email or our contact form on the website." },
  { category: "Services", question: "Do you offer custom website designs?", answer: "Yes, we create custom designs based on your brand identity and business needs." },
  { category: "Timeline", question: "What is your turnaround time?", answer: "Project timelines depend on complexity, but we always strive to deliver on time." },
  { category: "Services", question: "Do you offer website maintenance?", answer: "Yes, we offer ongoing support and maintenance services for all our clients." },
  { category: "Services", question: "Can I request a redesign of an existing website?", answer: "Yes, we specialize in website redesigns to enhance performance and aesthetics." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept major credit cards, PayPal, and bank transfers." },
  { category: "SEO", question: "Do you provide SEO optimization?", answer: "Yes, we include basic SEO optimizations and offer advanced SEO as an add-on service." },
  { category: "Branding", question: "Do you offer branding services?", answer: "Yes, we help businesses build strong brand identities through design and strategy." },
];

const uniqueCategories = [...new Set(faqs.map((faq) => faq.category))];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="relative bg-gray-50 z-0 py-12 px-5 mx-auto">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <img
          src="/images/pngwing.com (7).png" // Update this path if needed
          alt="FAQ background"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-3xl text-orange-600 sm:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 text-gray-600 pr-4 py-2 border border-blue-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile filter toggle */}
      {isMobile && (
        <div className="sm:hidden flex justify-center mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
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
      <AnimatePresence initial={false}>
        {(!isMobile || showFilters) && (
          <motion.div
            key="filters"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full border border-blue-600 ${
                  selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-white text-gray-600"
                } hover:bg-blue-100 transition text-gray-600`}
              >
                All
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border border-blue-600 ${
                    selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white text-blue-600"
                  } hover:bg-blue-100 transition text-blue-600`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={`${faq.question}-${index}`}
              className="bg-gradient-to-tr from-gray-300 via-white to-gray-300 border border-blue-200 text-black rounded-xl shadow hover:shadow-xl transition"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180 text-gray-700" : "text-gray-700"
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
                    className="overflow-hidden px-5 pb-5 text-gray-700"
                  >
                    <div className="mt-2">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No FAQs match your search.</p>
        )}
      </div>
    </section>
  );
}