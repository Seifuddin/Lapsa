"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/image-removebg-preview (19).png",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/image-removebg-preview (19).png",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/image-removebg-preview (19).png",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    title1: "CEO, Lapsa",
  },

  {
    title: "Muriithi Nguru",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/image-removebg-preview (19).png",
    title1: "CEO, Lapsa",
  },
];


export default function Clients() {
  return (
    <section className="bg-gray-200 px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            550: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-400">
                <div className="flex justify-center mb-4">
                  <img src={service.image} alt={service.title} className="w-10 h-10 rounded-full border-2 border-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-orange-700">
                  {service.title}
                </h3>
                <p className="text-left">
                  {service.description}
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}