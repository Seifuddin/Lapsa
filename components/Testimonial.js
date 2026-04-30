"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, HeartHandshake } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StoriesAndTestimonials() {
  const testimonials = [
    {
      name: "Muriithi Nguru",
      role: "- Founder and CEO, Lapsa Web & Graphics",
      quote:
        "Working with Lapsa was a game-changer. Their design skills and attention to detail elevated our brand online.",
      image: "/images/IMG_20240804_185749_718~2.jpg",
    },
    {
      name: "Sarah Wanjiku",
      role: "- CEO, GreenTech Solutions",
      quote:
        "Lapsa delivered a stunning website for our startup. The process was smooth, and the results exceeded expectations.",
      image: "/images/IMG_20240804_185749_718~2.jpg",
    },
    {
      name: "Brian Odhiambo",
      role: "- Marketing Director, FreshFoods Ltd.",
      quote:
        "Professional, responsive, and creative. Lapsa Web & Graphics truly understands how to make a brand stand out online.",
      image: "/images/IMG_20240804_185749_718~2.jpg",
    },
    {
      name: "Murithi Nguru",
      role: "- Director, Lapsa Clinic",
      quote:
        "Thanks to Lapsa, our website attracts more clients and communicates our services clearly and beautifully.",
      image: "/images/IMG_20240804_185749_718~2.jpg",
    },
    {
      name: "Vincent Obwogi",
      role: "- CEO, Inklab Graphics",
      quote:
        "Their creativity and timely delivery made our web project a success. Highly recommend Lapsa Web & Graphics.",
      image: "/images/IMG_20240804_185749_718~2.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800 px-6 overflow-hidden">
      {/* Decorative Waves */}
      <div className="absolute -top-16 left-0 w-full h-36 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-800 rounded-b-full opacity-30"></div>
      <div className="absolute -bottom-16 right-0 w-56 h-56 bg-indigo-700 rounded-full mix-blend-multiply filter blur-2xl opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Testimonials Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Quote className="w-10 h-10 mx-auto mb-4 text-white" />
          <span className="inline-block bg-yellow-400 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
            What Our 
            <span className="text-yellow-400"> Clients Say </span>
          </h3>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full my-3"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Hear from the businesses and individuals we've had the pleasure of serving at Lapsa Web & Graphics.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-2xl border border-blue-700 p-4 backdrop-blur-sm shadow-md hover:shadow-lg transition-all h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-100 md:text-lg my-2">{t.name}</h4>
                    <p className="text-blue-200 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  “{t.quote}”
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}