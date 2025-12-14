"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className='overflow-x-hidden bg-green-50'>
        <div className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center maxw-4xl text-2xl md:text-4xl font-bold text-gray-900 mb-5 fontserif">
                    Our Journey<span className="text-gray-800"></span>
                  </h1>
          <p className="itaic text-center text-gray-600 font-bold mb-10 maxw-6xl mx-auto">
            A brief History about Lapsa Web and Graphics.
          </p>
        </motion.div>
        <div className="relative border-l-4 border-blue-700 pl-4 space-y-6">
          {[
            {
              year: "September 9 2024 - Company Founded",
              desc: "On September 9 2024, Lapsa Web and Graphics was Founded by Muriithi Nguru as the Founder and CEO of Lapsa, It was his 24th birthday. It was started as a freelancing company in his tiny living room in Kahawa Wendani along Thika Super Highway in Nairobi. It was established with the mission to digitalize every sector in kenya by the year 2030 and to transform Africa in terms of Technology and Economy.",
            },
            {
              year: "November 1 2024 - First Client",
              desc: "On this day, Lapsa Web and Graphics got its first clients for Graphic Design & Digital Printing and the client really loved the work.",
            },
            {
              year: "January 7 2025 - First Website",
              desc: "On this day, Lapsa got an assignment to create a website for Capvim International Publishers LTD. When Muriithi Nguru delivered the website, Dr. Clifford Matara, The CEO of Capvim really appreciated the work of Lapsa and He has been supporting Lapsa whenever Lapsa needed his Help.",
            },
            {
              year: "September 9 2025 - Lapsa Website Launch",
              desc: "On this day, the Domain Name LAPSA was registered and Lapsa Website was deployed live. Since then Lapsa presence is felt allover the city and has been doing quite well, It has also employed two casual workers to help deliver the assignments in time. With no doubt, Lapsa is now a successful Company thanks to its Hardworking CEO, Mr. Muriithi Nguru for his sleepless nights to ensure the company runs well and delivers in time.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className='bgwhite p-2 rounded-md shadowmd border-b-2 border-blue-200'>
              <h4 className="font-bold text-blue-900 mb-2 fontserif">{item.year}</h4>
              <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
