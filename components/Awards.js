"use client";
import { motion } from 'framer-motion';

import Image from 'next/image';

// components/Hero.js
export default function Awards() {
  return (
    <section className="relative bg-gray-800 text-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="inset-0 bg-cover bg-center bg-opacity-5">
        <Image
          src="/images/ai-generated-golden-winner-cup-on-dark-background-photo.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative px-4 text-center">
        <h1 className="text-3xl text-white font-semibold mb-8 text-center">
          Our Customer Care Service
        </h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="service-card p-4">
                    <h2 className="text-xl text-left text-gray-100 mb-10 rounded-md"> Customer  service is a priority at Lapsa. Our representatives are ready to assist and advice you throughout the business day. Whether your requirements are for general services or for specific, unique situations, rely on our representatives to help you with your purchasing decisions. Best of all, Our prices are unsurpassed. Incase you need any help or assistance, kindly WhatsApp or send a text our Customer Care Number below: </h2>
                    <h2 className="text-xl text-white mb-10"></h2>
                    
                    <p className="inline-block text-lg rounded-md text-left mt-5 bg-orange-700 p-2 px-5 text-white font-bold">
                      Chat our customer care        
                    </p>
                </motion.div>
            </div>
        
    </section>
  );
}