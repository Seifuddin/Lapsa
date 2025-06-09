"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, PenTool, Users, Rocket } from "lucide-react";
import AnimatedCounters from "./AnimatedCounters";

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-20">

        

        {/* Our Mission, Vision, Motto 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { title: "Our Mission", text: "To empower businesses with cutting-edge digital experiences that drive results and inspire trust." },
            { title: "Our Vision", text: "To be the most trusted creative partner for forward-thinking brands across Kenya and beyond." },
            { title: "Our Motto", text: "Crafting Digital Excellence." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-950">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
        */}

        {/* Timeline 
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-5 text-orange-600">Our Journey</h3>
          <p className="italic text-center text-blue-900 font-semibold text-lg mb-10 max-w-6xl mx-auto">
            A brief History about Lapsa Web and Graphics.
          </p>
        </motion.div>
        <div className="relative border-l-4 border-orange-600 pl-6 space-y-10">
          {[
            {
              year: "September 9 2024 - Company Founded",
              desc: "On September 9 2024, Lapsa Web and Graphics was Founded by Muriithi Nguru as the Founder and CEO of Lapsa, It was his 24th birthday. It was started as a freelancing company in his tiny living room in Kahawa Wendani along Thika Super Highway in Nairobi. It was established with the mission to digitalize every sector in kenya by the year 2030 and to .",
            },
            {
              year: "November 1 2024 - First Client",
              desc: "On this day, Lapsa Web and Graphics got its first clients for Graphic Design & Digital Printing and the client really loved the work",
            },
            {
              year: "January 7 2025 - First Website",
              desc: "On this day, Lapsa got an assignment to create a website for Capvim International Publishers LTD. When Muriithi Nguru delivered the website, Dr. Clifford Matara, The CEO of Capvim really appreciated the work of Lapsa and He has been supporting Lapsa whenever Lapsa needed his Help",
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
              <h4 className="text-lg font-semibold text-blue-900">{item.year}</h4>
              <p className="text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      */}
      <AnimatedCounters/>

        {/* What We Do */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-blue-950">What We Do</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We blend creativity and technology to deliver exceptional web experiences and stunning visual identities. Whether you're a startup or a growing brand, we tailor our services to your unique needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "Web Development", icon: Code, desc: "Responsive websites, web apps, landing pages & eCommerce stores." },
              { title: "Graphic Design", icon: PenTool, desc: "Logos, business cards, flyers, social media kits & more." },
              { title: "Branding & Strategy", icon: Lightbulb, desc: "Helping you build a brand identity that stands out." },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center">
                <service.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-lg font-semibold text-blue-950">{service.title}</h4>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process 
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Consult", "Design", "Develop", "Deliver"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 bg-white rounded-xl shadow text-blue-950 font-semibold"
              >
                <span className="text-5xl font-extrabold text-orange-500 block mb-3">
                  {index + 1}
                </span>
                {step}
              </motion.div>
            ))}
          </div>
        </div>
        */}
        {/* Stats / Counters 
        <div className="bg-blue-950 text-white py-16 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Projects Delivered", count: "120+" },
              { label: "Happy Clients", count: "90+" },
              { label: "Years Experience", count: "5+" },
              { label: "Team Members", count: "10+" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl font-bold text-orange-400">{item.count}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Core Values 
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-950">Our Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe in excellence, creativity, integrity, and continuous growth. These principles guide everything we do — from strategy to execution.
          </p>
        </div>
        */}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-500 text-white py-12 px-6 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Ready to bring your ideas to life?</h2>
          <p className="mt-4 text-lg">Let's build something great together.</p>
          <a
            href="contacts"
            className="mt-6 inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </div>
  );
}