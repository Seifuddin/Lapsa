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
      className="relative bg-cover bg-center bg-gray-100 bg-no-repeat py-10 text-gray-800">
      {/* style={{
        backgroundImage: `url('/images/pngwng.com (7).png')`,
      }}
        */}
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
            className="space-y-6 bg-gray-50 shadow-xl border border-gray-200 p-5 py-10 rounded-lg"
          >
            <h4 className="text-xl font-bold text-blue-900 mb-6 font-serif">Contact Information</h4>
            <div className="flex items-start space-x-4 shadowmd p1">
              <Mail className="text-red-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-blue-900">lapsatechnologies@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <Phone className="text-red-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-blue-900">+254 111 608 331</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <MapPin className="text-red-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-blue-900">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <Building2 className="text-red-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Building</h4>
                <p className="text-blue-900">Kahawa Wendani, Magu House, First Floor, Room No. 27</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <h4 className="font-bold text-blue-800 text-lg font-serif">Follow Us</h4>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61570201295782" aria-label="Facebook" className="text-blue-700 hover:text-orange-500 shadow-md p-1">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48" aria-label="Instagram" className="text-pink-600 hover:text-orange-500 shadow-md p-1">
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09" aria-label="Twitter" className="text-blue-400 hover:text-orange-500 shadow-md p-1">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@muriithi_nguru?_t=ZM-8wuMwLm6AoH&_r=1" aria-label="TikTok" className="text-black hover:text-orange-500 shadow-md p-1">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="text-blue-600 hover:text-orange-500 shadow-md p-1">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-xl space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle submission
            }}
          >
          <h2 className="text-xl font-bold text-blue-900 mb-6 font-serif">Send Us a Message</h2>

            <div>
              <label className="block font-semibold text-gray-800">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold  text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
                placeholder="Subject of Your Message"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full text-blue-900 mt-1 p-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 w-full text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}