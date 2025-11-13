"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  MonitorSmartphone,
  Lightbulb,
  Clock3,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Testimonial = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      quote:
        "Lapsa transformed our brand image with a stunning website and sleek visual identity. Absolutely phenomenal!",
      author: "Mark Kinyua",
      image: "/images/images (1).jpg",
    },
    {
      quote:
        "Their attention to detail and creative direction elevated our product launch beyond expectations.",
      author: "Clifford Matara",
      image: "/images/ai-generated-businessman-using-tablet-with-social-media-icons-over-night-cityscape-background-a-businessman-on-a-blurred-background-using-a-3d-rendering-mobile-phone-with-social-m.jpg",
    },
    {
      quote:
        "From UI/UX to branding kits, Lapsa’s team delivers with passion, creativity, and professionalism.",
      author: "Brian Odhiambo",
      image: "/images/pexels-pixabay-268533.jpg",
    },
    {
      quote:
        "We received a fast, responsive site that boosted our engagement and sales within weeks. Highly recommended!",
      author: "Muriithi Nguru",
      image: "/images/Screenshot_20231128-143947_Photos.jpg",
    },
    {
      quote:
        "Their branding strategy and design expertise gave our company the professional look we needed.",
      author: "DJ Youngjey254",
      image: "/images/teamup.jpg",
    },
  ];

  const handleFeatureClick = useCallback((item) => {
    setSelectedFeature(item);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedFeature(null);
  }, []);

  return (
    <div>
      <section className="py-20 px-6 relative bg-green-50 dient-to-br from-blue-100 via-white to-orange-100 text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-blue-800 text-3xl md:text-4xl font-bold font-serif tracking-tight mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <p className="itext-lg itali fontsemibold text-gray-600 mt-4 max-w-2xl mx-auto mb-8">
              Hear how Lapsa Web and Graphics has transformed businesses through powerful design and modern web solutions.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mb-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 hover:bg-red-600 text-white hover:text-white shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 hover:bg-red-600 text-white hover:text-white shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 6000 }}
            loop={true}
            spaceBetween={40}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-2xl rounded-md p-4 text-center h-full flex flex-col items-center justify-between"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-900 shadow-lg mb-4"
                  />
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-blue-500 absolute -top-6 left-1/2 -translate-x-1/2" />
                    <p className="italic text-blue-950 text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <p className="font-bold md:text-lg text-blue-800 mt-2 font-serif">
                    {testimonial.author}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gradient Light Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </section>

      {/* Optional Modal Feature Section (if enabled later) */}
      <Dialog open={!!selectedFeature} onClose={handleModalClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 rounded-lg" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <Dialog.Title className="flex items-center gap-3 text-lg font-bold text-orange-600 mb-3">
              {selectedFeature?.icon}
              {selectedFeature?.title}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-700">
              {selectedFeature?.modal}
            </Dialog.Description>
            <button
              onClick={handleModalClose}
              className="mt-4 text-sm text-blue-600 underline"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Testimonial;
