"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-gray-200 py-16">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-10">About Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                     className="service-card p-3">
                        <img src="/images/IMG-20230803-WA0032.jpg" alt="Project 1" className="w-full h-80 object-cover rounded-md" />
                </motion.div>
                <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                 className="service-card mx-2 pl-2 rounded-lg">
                <p className="text-xl text-left text-blue-700 font-bold mb-1 underline">Our Motto</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                We are commited to excellence in print and branding                </p>
                <p className="text-xl text-left text-blue-700 font-bold mt-5 mb-1 underline">Our Mission</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                Our mission is to deliver outstanding printing services that exceed customer expectations, using the latest technology and top-quality materials.                </p>
                <p className="text-xl text-left text-blue-700 font-bold mt-5 mb-1 underline">Our Vission</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                Our Vision is to offer local and International organizations the finest of products and services in the market through Lapsa.                </p>
                <a
                    href="#portfolio"
                        className="flex w-fit rounded-md bg-blue-700 text-white py-2 px-8 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                    About Us
                </a>
                </motion.div>
            </div>
            </div>
        </section>
    );
}