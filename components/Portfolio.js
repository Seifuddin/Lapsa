"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Websites",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "Business Cards",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "Fliers",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "T-shirt Printing",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "Stickers",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "Banners",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },

  {
    title: "Photo Mounting",
    image: "/images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg",
  },
];


export default function Portfolio() {
  return (
    <section className="container">
      <h2 className="text-3xl font-semibold mb-3 text-center border p-2 bg-blue-800 text-white rounded-md">What we do</h2>
      <h2 className="text-lg text-italic mb-10 text-center text-white rounded-md">Innovative Web and Graphic Design</h2>
      <div className=" text-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            550: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            950: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
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
                  <img src={service.image} alt={service.title} className="w-24 h-20 border border-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-700">
                  {service.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      <h2 className="text-lg text-italic text-left text-white rounded-md mt-5 border p-2 bg-blue-800">Would you like to explore more? Click the button below to see more exiting services we do and get our quotation... </h2>
      <a
        href="#portfolio"
            className="flex w-32 mt-3 rounded-md bg-orange-700 text-white p-2 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                    View More...
        </a>
      </div>
    </section>
  );
}