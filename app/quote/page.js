"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send to email API or Flask/Node backend here
    console.log("Submitted:", formData);

    // Show thank you message
    setSubmitted(true);

    // Reset form (optional)
    setFormData({
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-blue-50 text-blue-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-orange-600 mt-10 mb-4"
        >
          Request a Custom Quote
        </motion.h2>
        <p className="mb-8 font-medium">
          Let us know what you need and we'll get back to you with a tailored solution.
        </p>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-700 font-semibold bg-green-100 rounded-lg p-6 shadow"
          >
            Thank you! Your request has been submitted. We'll contact you shortly.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4"
          >
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md"
            >
              <option value="">Select a Service</option>
              <option>Web Design</option>
              <option>Graphic Design</option>
              <option>Digital Printing</option>
              <option>Website Maintenance</option>
              <option>Mobile App</option>
              <option>Software Development</option>
            </select>
            <input
              name="budget"
              placeholder="Estimated Budget (Optional)"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 border border-blue-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Describe your project"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-300 rounded-md"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all font-semibold"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
