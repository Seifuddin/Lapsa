import { useState } from "react";

const faqData = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables server-side rendering and static website generation. It provides an optimized experience for building React apps with easy routing, automatic code splitting, and built-in SEO features.",
  },
  {
    question: "How do I install Tailwind CSS?",
    answer:
      "To install Tailwind CSS, run `npm install -D tailwindcss postcss autoprefixer` and initialize the configuration file by running `npx tailwindcss init`. Then, configure Tailwind by adding the directives `@tailwind base; @tailwind components; @tailwind utilities;` to your global CSS file.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions that let you use state and lifecycle features in functional components. Examples include `useState`, `useEffect`, and `useContext`.",
  },
  {
    question: "What is server-side rendering?",
    answer:
      "Server-side rendering (SSR) means rendering the React components on the server and sending the fully rendered HTML to the client. It improves performance and SEO by ensuring that search engines can index the content of the pages.",
  },
];

export default function OurServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex items-center justify-between cursor-pointer p-4 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700 rounded-md">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};