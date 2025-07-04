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
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept Lipa na M-Pesa services through our Till Number provided on the Website which is or send money to 0111 608 331 (name: edwin)." },
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
    <section
      className="relative p-5 bg-cover bg-center bg-white bg-no-repeat py-16 text-blue-900">
     {/* style={{
        backgroundImage: `url('/images/pngwing.com (7).png')`,
      }}
        */}
    
      {/* Gradient overlay */}

      <h1 className="text-center max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    Frequently Asked Questions<span className="text-orange-600"></span>
                  </h1>
        <p className="italic text-blue-900 font-semibold text-lg max-w-5xl mx-auto text-center mb-8">
          Everything You Need to Know About Working With Us.
        </p>  
      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-blue-900" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-blue-0 pl-10 text-blue-900 pr-4 py-2 border border-blue-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className={`w-4 h-4 transform text-blue-900 transition-transform ${showFilters ? "rotate-180" : ""}`}
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
                  selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-900"
                } hover:bg-blue-600 transition text-blue-900 hover:text-white`}
              >
                All
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border border-blue-600 ${
                    selectedCategory === cat ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                  } hover:bg-blue-600 transition text-blue-600 hover:text-white`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={`${faq.question}-${index}`}
              className="bgblue-50 p- border border-blu-200 text-blue-900 rounded-sm shadow-md hover:shadow-xl transition"
            >
              <button
                className="w-full flex justify-between font-semibold items-center p-3 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180 text-blue-900" : "text-blue-900"
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
                    className="overflow-hidden px-3 pb-3 text-blue-900"
                  >
                    <div className="mt-1">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-900 col-span-full">No FAQs match your search.</p>
        )}
      </div>
    </section>
  );
}