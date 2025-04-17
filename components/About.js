"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  const counters = [
    { label: "Happy Clients", value: 150 },
    { label: "Projects Completed", value: 300 },
    { label: "Years of Experience", value: 5 },
    { label: "Awards Won", value: 12 },
  ];

  return (
    <section className="bg-white text-gray-800">
      {/* Intro */}
      <div className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600">
          We’re a creative digital agency specializing in web development and graphic design. Our passion lies in turning ideas into powerful visuals and scalable digital experiences.
        </p>
      </div>

      {/* Image + Text Split */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 py-12 gap-10">
        <img
          src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp"
          alt="Our Team"
          className="w-full lg:w-1/2 rounded-2xl shadow-md"
        />
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            Our team brings together designers, developers, and strategists who are passionate about creating memorable digital solutions. We believe in design with purpose, coding with care, and relationships built on trust.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses through innovative design and smart web technologies that drive growth and deliver impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Creativity with purpose</li>
              <li>Integrity in every project</li>
              <li>User-first design</li>
              <li>Commitment to quality</li>
              <li>Continuous learning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Our Journey</h3>
        <div className="relative border-l-4 border-orange-600 pl-6 space-y-10">
          <div>
            <h4 className="text-lg font-semibold">2020 - Founded</h4>
            <p className="text-gray-600">Started with a mission to blend design and technology under one roof.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2021 - First 50 Projects</h4>
            <p className="text-gray-600">Delivered stunning websites and designs to our first clients, earning their trust.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2022 - Team Expansion</h4>
            <p className="text-gray-600">Grew into a diverse team of designers, developers, and marketers.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2023 - Awards & Recognition</h4>
            <p className="text-gray-600">Recognized for excellence in creativity and innovation.</p>
          </div>
        </div>
      </div>
       */}

      {/* Animated Counters */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: counter.value }}
                transition={{ duration: 2 }}
              >
                {Math.floor(counter.value)}
              </motion.span>
              <p className="text-sm mt-2 font-medium">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}