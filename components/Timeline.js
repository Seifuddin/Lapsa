"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className='overflow-x-hidden bg-gray-50'>
        <div className="py-16 px-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    Our Journey<span className="text-orange-600"></span>
                  </h1>
          <p className="italic text-center text-blue-900 font-semibold text-lg mb-10 max-w-6xl mx-auto">
            A brief History about Lapsa Web and Graphics.
          </p>
        </motion.div>
        <div className="relative border-l-4 border-orange-600 pl-6 space-y-6">
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
              <div className='bg-blue-50 p-5 rounded-md shadow-md border border-blue-200'>
              <h4 className="font-bold text-orange-600 mb-2">{item.year}</h4>
              <p className="text-blue-900">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
