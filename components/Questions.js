import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is Next.js?', answer: 'Next.js is a React framework that supports SSR and static site generation.' },
    { question: 'What is Tailwind CSS?', answer: 'Tailwind is a utility-first CSS framework for rapid UI development.' },
    // Add more FAQs as needed
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {faq.question}
            </button>
            <div
              className={`${
                openIndex === index ? 'block' : 'hidden'
              } px-4 py-3 text-gray-700 transition-all duration-300`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;