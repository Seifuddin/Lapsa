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
      image: "/images/edited-photo.png",
    },
    {
      name: "Sarah Wanjiku",
      role: "- CEO, GreenTech Solutions",
      quote:
        "Lapsa delivered a stunning website for our startup. The process was smooth, and the results exceeded expectations.",
      image: "/images/IMG-20250804-WA0003~2.png",
    },
    {
      name: "Brian Odhiambo",
      role: "- Marketing Director, FreshFoods Ltd.",
      quote:
        "Professional, responsive, and creative. Lapsa Web & Graphics truly understands how to make a brand stand out online.",
      image: "/images/edited-photo.png",
    },
    {
      name: "Murithi Nguru",
      role: "- Director, Lapsa Clinic",
      quote:
        "Thanks to Lapsa, our website attracts more clients and communicates our services clearly and beautifully.",
      image: "/images/IMG-20250804-WA0003~2.png",
    },
    {
      name: "Vincent Obwogi",
      role: "- CEO, Inklab Graphics",
      quote:
        "Their creativity and timely delivery made our web project a success. Highly recommend Lapsa Web & Graphics.",
      image: "/images/edited-photo.png",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] px-6 overflow-hidden">
      {/* Decorative Waves */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

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
                className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:border-yellow-500/30 transition h-full"
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
                    <h4 className="text-left font-bold text-gray-100 md:text-lg my-2">{t.name}</h4>
                    <p className="text-left text-blue-200 text-sm">{t.role}</p>
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