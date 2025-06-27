"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Leadership() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shortStory = `Muriithi Nguru is the Founder and CEO of Lapsa group of companies. 
  After finishing his paramilitary training, he worked as a secretary and was introduced to Graphics Design and Printing. 
  Later transferred to Nairobi for an IT course, he discovered web development. 
  He founded Lapsa Web and Graphics back in 2022 with minimal tools. 
  Over time, he upgraded his skills and tools.`;

  const fullStory = `Muriithi Nguru is the Founder and CEO of Lapsa group of companies. The story begins when he was enrolled in the paramilitary immediately after high school... After finishing his paramilitary training, Nguru was lucky to get a chance to work as a secretary in his Commanding Officers's office in Eldoret. It was during this time he got introduced to Graphics Design and Printing. He used to design publications for the whole camp. He was then transferred to Nairobi for IT course where he got introduced to computer programming and web design. After the course, He decided to start Lapsa Web and Graphics as a freelancer still in the camp back in 2022 but with a very little knowledge on these fields. He used HTML and CSS only to create websites and sometimes he used his phone to compile the code. On the other hand, he used Microsoft Publisher for Graphics Design. He continued doing this until he went to an industrial attachment in Nairobi CBD where he upgraded to React.JS and Next.JS for frontend and Python for backend. On the other hand, he upgraded to Adobe Illustrator and Photoshop. Now he is an experienced developer and creates world class designs. You can reach him through WhatsApp number +254 111 608 331.`;

  return (
    <section className="relative bg-cover overflow-x-hidden bg-center bg-no-repeat py-16 sm:py-12 px-4 sm:px-3">
      <div className="absolute inset-0 bg-gray-50 z-0 opacity-01"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-8 px-2"
        >
          <h1 className="text-xl md:text-2xl font-bold text-orange-600 mb-3">
            Our Leadership
          </h1>
          <p className="italic text-blue-900 font-semibold text-base sm:text-sm max-w-4xl mx-auto">
            The current senior office holder of Lapsa as of 2025.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src="/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).jpeg"
              alt="Muriithi Nguru"
              className="w-72 h-72 sm:w-56 sm:h-56 object-contain rounded-full border-4 border-blue-600 bg-gray-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 space-y-5 text-left px-2"
          >
            <h3 className="text-lg font-bold text-orange-700">
              Muriithi Nguru - The Founder & CEO of Lapsa.
            </h3>
            <p className="text-blue-900 text-base sm:text-sm leading-relaxed">
              {shortStory}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-orange-600 underline text-sm hover:text-orange-800 transition"
            >
              Read Full Story
            </button>

            <h4 className="font-semibold text-blue-800 text-md italic">
              Follow, Like & Subscribe Muriithi Nguru at social media
            </h4>
            <div className="flex justify-start space-x-4 pt-2 flex-wrap">
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
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl sm:max-w-sm p-4 sm:p-5 rounded-xl relative overflow-y-auto max-h-[90vh] shadow-xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-lg font-bold text-orange-700 mb-3">
              Full Story of Muriithi Nguru
            </h2>
            <p className="text-blue-900 text-sm sm:text-xs whitespace-pre-line leading-relaxed">
              {fullStory}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
