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

// WORKING HANDLE SUBMIT
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (err) {
    console.error("Submit error:", err);
    alert("Network error. Could not send message.");
  }
};

export default function Contact() {
  return (
    <div className="relative bg-cover bg-center bg-blue-50 bg-no-repeat py-10 text-gray-800">
      <div className="rounded-xl p-6 md:p-12 max-w-7xl mx-auto">

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-gray-50 shadow-xl border border-gray-200 p-6 py-10 rounded-lg"
          >
            <h4 className="text-xl font-bold text-blue-800 mb-6 fontserif">
              Contact Information
            </h4>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-700 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">lapsatechnologies@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-700 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+254 111 608 331</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-700 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Building2 className="text-blue-700 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Office</h4>
                <p className="text-gray-600">
                  Kahawa Wendani, Magu House, 1st Floor, Room 27
                </p>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <h4 className="font-bold text-blue-800 text-lg fontserif">
              Follow Us
            </h4>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570201295782"
                className="text-blue-700 hover:text-orange-500 p-1"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48"
                className="text-pink-600 hover:text-orange-500 p-1"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09"
                className="text-blue-400 hover:text-orange-500 p-1"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@muriithi_nguru?_t=ZM-8wuMwLm6AoH&_r=1"
                className="text-black hover:text-orange-500 p-1"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/edwin-nguru-92ab23312"
                className="text-blue-600 hover:text-orange-500 p-1"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-xl space-y-4"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-6 fontserif">
              Send Us a Message
            </h2>

            <div>
              <label className="block font-semibold text-gray-800">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-500 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-500 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-500 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-500"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-500 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-500"
                placeholder="Subject of Your Message"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full text-blue-900 mt-1 p-2 border border-gray-500 bg-gray-50 rounded-md focus:ring-2 focus:ring-orange-500"
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
