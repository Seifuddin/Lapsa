"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Our Quality",
    description: "Responsive, modern web design tailored to your business needs.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "Fast Delivery",
    description: "Creating a memorable brand identity that connects with your audience.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "Affordable Prices",
    description: "Creative design solutions for print, digital, and social media marketing.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "Modern Machines",
    description: "We use the latest technology for high-quality printing and design.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "Passion for Creativity",
    description: "Attention to detail in every design project.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "Expertise in Web & Graphic Design",
    description: "Professional and innovative design solutions.",
    image: "/images/2287947-removebg-preview.png",
  },
  {
    title: "On-Time Delivery",
    description: "Committed to delivering professional results on schedule.",
    image: "/images/2287947-removebg-preview.png",
  },
];

export default function Why() {
  return (
    <section className="bg-gray-200 px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-500">
                <div className="flex justify-center mb-4">
                  <img src={service.image} alt={service.title} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-500 bg-gray-200 rounded-md border border-blue-200 p-2">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}