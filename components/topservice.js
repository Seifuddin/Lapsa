"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "T-Shirt Printing",
    description:
      "We create bold and stylish custom t-shirts that reflect your brand or message. Whether it's for business, events, or personal use, we deliver sharp prints that last.",
    image: "/images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg",
  },
  {
    title: "Photo Mounting",
    description:
      "Preserve your cherished memories with our professional photo mounting. We use durable materials and precision to deliver gallery-style finishes.",
    image: "/images/mounting.jpg",
  },
  {
    title: "Photoshop",
    description:
      "From photo retouching to creative compositions, our Photoshop services elevate your visuals with precision for branding and digital campaigns.",
    image: "/images/media_10f9ad2dd9a4185c9b0126a171c3161dbbef0ae16.jpeg",
  },
];

export default function TopServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="h-[28rem]">
          <ServiceCard {...services[0]} />
        </div>

        {/* Right Column - Two stacked */}
        <div className="grid grid-rows-2 gap-6 h-[28rem]">
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[2]} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-md overflow-hidden shadow-md group h-[14rem] sm:h-[16rem] md:h-full"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 text-white">
        <h3 className="text-xl sm:text-2xl font-semibold mb-1 font-mono">{title}</h3>
        <p className="text-xs sm:text-sm max-w-xs leading-snug font-mono">{description}</p>
      </div>
    </motion.div>
  );
}
