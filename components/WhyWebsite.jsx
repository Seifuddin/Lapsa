"use client";

import {
  GlobeAltIcon,
  SparklesIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function WhyWebsite() {
  const features = [
    {
      icon: GlobeAltIcon,
      title: "Establish Your Online Presence",
      text: "A professional website gives your business a permanent digital presence — accessible to customers around the world, 24/7.",
    },
    {
      icon: SparklesIcon,
      title: "Build Trust & Credibility",
      text: "A well-designed website demonstrates professionalism and reliability — helping clients feel confident in your brand.",
    },
    {
      icon: ChartBarIcon,
      title: "Expand Your Reach",
      text: "Your website enables discovery through search, social media, and digital campaigns, connecting you with new audiences.",
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Convert Visitors into Clients",
      text: "With clear messaging and strong calls-to-action, your site turns visitors into customers and relationships into growth.",
    },
  ];

  return (
    <section className="bg-green-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 fontserif tracking-tight">
          Why Every Business Needs a Website
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A modern website is your most powerful tool for visibility, credibility, and growth.
        </p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {features.map(({ icon: Icon, title, text }, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl border border-blue-200 p-6 h-full flex flex-col justify-start hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-800 mb-6 bordr border-gray-300">
                  <Icon className="h-6 w-6 text-yellow-300" />
                </div>
                <h3 className="md:text-lg font-semibold text-blue-800 fontserif mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden text-center mt-10">
        <a
          href="#contact"
          className="inline-block bg-blue-800 text-white font-medium py-2 md:py-3 px-10 rounded-md shadow-sm hover:bg-blue-800 transition-colors duration-200"
        >
          Let’s Build Your Website
        </a>
      </div>
    </section>
  );
}
