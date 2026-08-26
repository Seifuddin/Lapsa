"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-6 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Lapsa-removebg-preview.png"
                alt="Lapsa Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h2 className="text-xl font-bold text-white">Lapsa</h2>
                <p className="text-xs text-blue-400 font-medium">Web & Graphics</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Elevate your brand online with professional web design, graphic design, and digital solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61570201295782", label: "Facebook" },
                { icon: Twitter, href: "https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09", label: "Twitter" },
                { icon: Instagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Web Development",
                "Website Management",
                "SEO Optimization",
                "Graphic Design",
                "Digital Printing",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="tel:+254111608331" className="hover:text-blue-400 transition">
                  +254 111 608 331
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="mailto:lapsatechnologies@gmail.com" className="hover:text-blue-400 transition break-all">
                  lapsatechnologies@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get web design tips, success stories, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 pr-12 rounded-xl bg-slate-800 text-white text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Lapsa Web and Graphics. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>
            <span className="w-px h-4 bg-slate-700" />
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-blue-400 transition"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-xs text-gray-500 text-center md:text-right">
            Designed & Powered by{" "}
            <Link
              href="https://lapsa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-orange-400 font-medium transition-colors duration-300"
            >
              Lapsa Web & Graphics
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}