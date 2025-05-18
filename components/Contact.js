"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="relative bg-cover bg-center bg-gray-100 bg-no-repeat py-10 text-gray-800"
      style={{
        backgroundImage: `url('/images/pngwing.com (14).png')`,
      }}
    >
      <div className="rounded-xl p-6 md:p-12 max-w-6xl mx-auto">
        {/* Header 
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
        */}
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-blue-950 p-5 py-10 rounded-2xl"
          >
            <h4 className="font-bold text-white text-lg">Contact Information</h4>
            <div className="flex items-start space-x-4">
              <Mail className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-orange-500">Email</h4>
                <p className="text-gray-100">lapsatechnologies@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-orange-500">Phone</h4>
                <p className="text-gray-100">+254 111 608 331</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-orange-500">Location</h4>
                <p className="text-gray-100">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Building2 className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-orange-500">Building & Room</h4>
                <p className="text-gray-100">Globe View Plaza, First Floor, Room F11</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <h4 className="font-bold text-white text-lg">Follow Us</h4>
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Facebook" className="text-blue-700 hover:text-orange-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-orange-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-orange-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="TikTok" className="text-black hover:text-orange-500">
                <FaTiktok size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-600 hover:text-orange-500">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-950 p-6 rounded-2xl shadow-xl space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle submission
            }}
          >
            <div>
              <label className="block font-semibold text-sm text-white">Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-white">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-white">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}