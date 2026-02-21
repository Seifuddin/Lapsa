"use client";

import Image from "next/image";
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
      image: "/images/iphone_apps.jpg",
      title: "Establish Your Online Presence",
      text: "A professional website gives your business a permanent digital presence — accessible to customers around the world, 24/7.",
    },
    {
      icon: SparklesIcon,
      image: "/images/iphone_apps.jpg",
      title: "Build Trust & Credibility",
      text: "A well-designed website demonstrates professionalism and reliability — helping clients feel confident in your brand.",
    },
    {
      icon: ChartBarIcon,
      image: "/images/iphone_apps.jpg",
      title: "Expand Your Reach",
      text: "Your website enables discovery through search, social media, and digital campaigns, connecting you with new audiences.",
    },
    {
      icon: CursorArrowRaysIcon,
      image: "/images/iphone_apps.jpg",
      title: "Convert Visitors into Clients",
      text: "With clear messaging and strong calls-to-action, your site turns visitors into customers and relationships into growth.",
    },
  ];

  return (
    <section className="bg-yellow-50 py-24 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Why Every Business<span className="text-yellow-500"> Needs a Website </span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A modern website is your most powerful tool for visibility, credibility, and growth.
        </p>
      </div>

      {/* Swiper */}
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
          {features.map(({ icon: Icon, image, title, text }, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded bg-white border border-amber-200 flex flex-col h-full hover:shadow-lg transition-all duration-200">

                {/* Top Image */}
                <div className="w-full h-40 md:h-44 relative rounded-t overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col items-start">
                  {/* Icon + Title Row */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded bg-blue-800 border border-gray-300 mr-3">
                      <Icon className="h-5 w-5 text-yellow-300" />
                    </div>
                    <h3 className="md:text-lg font-semibold text-yellow-500">
                      {title}
                    </h3>
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}