"use client";
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
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-r from-orange-100 via-white to-blue-100 text-orange-600 py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-orange-600 text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            About Us
          </h2>
          <p className="text-blue-950 text-lg mb-6">
            We are a passionate team of digital creatives helping brands build unforgettable identities online and offline. At Lapsa, design meets purpose, code meets clarity, and your business meets success.
          </p>
             {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                >
                  <h4 className="text-2xl font-ono italic text-blue-600 font-semibold mb-4 underline">Follow us on social media</h4>
                  <div className="relative flex gap-4 text-white">
                    <a
                      href="https://www.facebook.com/profile.php?id=61570201295782"
                      aria-label="Follow us on Facebook"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-9 h-9 rounded-md font-semibold bg-blue-500 border shadow-md p-1" />
                    </a>
                    <a
                      href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09"
                      aria-label="Follow us on Twitter"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-9 h-9 rounded-md font-semibold bg-orange-500 border shadow-md p-1" />
                    </a>
                    <a
                      href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48"
                      aria-label="Follow us on Instagram"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-9 h-9 rounded-md font-semibold bg-blue-500 border shadow-md p-1" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      aria-label="Follow us on LinkedIn"
                      className="hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-9 h-9 rounded-md font-semibold bg-orange-500 border shadow-md p-1" />
                    </a>
                  </div>
                </motion.div>
                   
          
          <Link
            href="/about"
            className="inline-block mt-10 px-8 py-3 text-white rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-medium"
          >
            Learn more about Lapsa
          </Link>
        </motion.div>

        {/* Image or Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp" // Use your own image or animated SVG
            alt="About Lapsa Web & Graphics"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
