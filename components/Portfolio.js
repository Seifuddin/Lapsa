"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  { title: "Web Design", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "Business Cards", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "Flyers", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "T-shirt Printing", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "Stickers", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "Banners", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
  { title: "Photo Mounting", image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg" },
];

export default function Portfolio() {
  return (
    <section className="w-full px-4 py-10 bg-gray-900 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-2">What We Do</h2>
      <p className="text-white mb-6 text-lg max-w-3xl">
        We offer a wide range of professional services including Web Design, Branding,
        Digital Printing, and Graphic Design — all tailored to elevate your brand.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          200: { slidesPerView: 2 },
          550: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-4 border border-orange-500 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-20 object-cover border border-orange-400 rounded"
                />
              </div>
              <h3 className="text-center text-orange-700 font-semibold text-lg">
                {service.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
        <p className="text-white mb-4 text-base">
          Want to explore more of our creative services or get a personalized quote?
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-orange-600 hover:bg-blue-600 transition-colors text-white px-5 py-2 rounded-md font-semibold"
        >
          View More Services
        </a>
      </div>
    </section>
  );
}