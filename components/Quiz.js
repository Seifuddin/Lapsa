"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Filter } from "lucide-react";

const faqs = [
  { category: "General", question: "What services do you offer?", answer: "We provide web development and graphic design services tailored to your needs." },
  { category: "Support", question: "How can I contact support?", answer: "You can reach us via email lapsatechnologies@gmail.com or our contact form on the website." },
  { category: "Services", question: "Do you offer custom website designs?", answer: "Yes, we create custom designs based on your brand identity and business needs." },
  { category: "Timeline", question: "What is your turnaround time?", answer: "Project timelines depend on complexity, but we always strive to deliver on time." },
  { category: "Services", question: "Do you offer website maintenance?", answer: "Yes, we offer ongoing support and maintenance services for all our clients." },
  { category: "Services", question: "Can I request a redesign of a website?", answer: "Yes, we specialize in website redesigns to enhance performance and aesthetics." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept Lipa na M-Pesa through our Till Number or direct payment to 0111 608 331 (name: Edwin)." },
  { category: "SEO", question: "Do you provide SEO optimization?", answer: "Yes, we include basic SEO and offer advanced SEO as an add-on service." },
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
    <section className="text-orange-600 relative px-6 py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="italic font-medium text-lg mb-10 max-w-2xl mx-auto">
          Everything you need to know about working with Lapsa.
        </p>

        {/* Search bar */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-blue-800" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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
              className="overflow-hidden mb-10"
            >
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    selectedCategory === "All"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-blue-100 text-blue-700 border-blue-200"
                  } hover:bg-blue-600 hover:text-white transition`}
                >
                  All
                </button>
                {uniqueCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-blue-100 text-blue-700 border-blue-200"
                    } hover:bg-blue-600 hover:text-white transition`}
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
                key={`${faq.question}-${index}`}
                className="bg-white rounded-xl shadow-md border border-blue-100 transition hover:shadow-lg"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 font-semibold text-blue-800"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
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
                      className="overflow-hidden px-4 pb-4 text-sm text-blue-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-blue-700 col-span-full">No FAQs match your search.</p>
          )}
        </div>
      </div>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-blue-900 mb-2">
          Didn't find what you're looking for?
        </h3>
        <p className="text-blue-800 mb-6">
          Reach out to us directly. We're here to help you with custom solutions for your web and design needs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contacts"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Contact Us
          </a>
          <a
            href="/quote"
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
          >
            Request a Custom Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}
