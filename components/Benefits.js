"use client";
import { motion } from "framer-motion";

export default function Benefits() {
    return (
        <section className="bg-gray-200 py-16">
            <div className="mx-a1 text-center">
                <h2 className="text-3xl font-semibold mb-16">How we help your Business grow</h2>
                <div className="flex flex-col-reverse md:flex-row ">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                 className="left flex-1 grid place-items-start p-4 rounded-lg">
                <p className="text-xl text-left text-orange-700 font-extrabold mb-2">Connecting your business with customers all around the world.</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                We Offer Web Design in Kenya, Web Maintenance Website Audit Software & Mobile App Development in Kenya. From cutting-edge web design and robust software development to seamless mobile app creation. Our expert team is dedicated to transforming your vision into digital success. Partner with us to elevate your online presence and achieve your business goals with confidence. </p>
                <a
                    href="#portfolio"
                        className="mt-5 ml-0 bg-orange-700 text-white py-2 px-8 text-sm font-semibold hover:bg-orange-400 transition-all duration-300"
                >
                    About Us
                </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                 className="right flex-1 service-card">
                        <img src="/images/image-removebg-preview (13).png" alt="Project 1" className="w-full h-80 object-cover" />
                    </motion.div>
            </div>
            </div>
        </section>
    );
}