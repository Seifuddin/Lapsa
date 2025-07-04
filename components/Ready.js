"use client";

import React from 'react'
import { motion } from "framer-motion";


export default function Ready() {
  return (
    <div className='relative p-5 bg-gray-50'>
        <div className='relative'>
            {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-orange-600 text-white py-12 px-6 rounded-2xl text-center"
                    >
                      <h2 className="text-3xl font-bold">Ready to bring your ideas to life and elevate your brand?</h2>
                      <p className="mt-4 text-lg italic">Let's build something great together. Contact us for a free consultation today!!!</p>
                      <a
                        href="contacts"
                        className="mt-6 inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                      >
                        Contact Us
                      </a>
                    </motion.div>
        </div>
    </div>
  )
}
