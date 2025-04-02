"use client";
import { motion } from "framer-motion";

export default function Services() {

    return (
        <section className="bg-gray-300 py-16">
            <div className="p-5 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-1">
                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center mb-1">
                        <img src="/images/developing a website.o.avif" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700 border-2">Web Design</h3>
                            <p className="text-gray-600 text-left">We create visually stunning and highly functional websites tailored to your brand’s unique needs. Our custom web design solutions ensure a seamless user experience and a strong online presence.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center mb-1">
                        <img src="/images/graphic-designers-vs-logo-designers.webp" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Software Development</h3>
                            <p className="text-gray-600 text-left">Transform your innovative ideas into reality with our bespoke software development services. We design and build custom software solutions to meet your specific business needs and drive growth.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center mb-1">
                        <img src="/images/developing a website.o.avif" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Graphic Design</h3>
                            <p className="text-gray-600 text-left">Bring your ideas to life with our expert graphic design services. From logos, business cards, brochures and posters, we create visually stunning designs that captivate and communicate your message effectively.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center mb-1">
                        <img src="/images/developing a website.o.avif" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Digital Printing</h3>
                            <p className="text-gray-600 text-left">Digital printing is a modern printing method that offers high-quality and cost-effective solutions for both small and large-scale projects. Ideal for vibrant graphics and intricate details.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center mb-1">
                        <img src="/images/developing a website.o.avif" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Website Maintenance</h3>
                            <p className="text-gray-600 text-left">Our comprehensive website maintenance services ensure your site remains up-to-date, secure, and fully functional. Trust us to keep your website running smoothly and efficiently.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="project-card bg-gray-200 rounded-md shadow-lg overflow-hidden">
                        <div className="flex justify-center  mb-1">
                        <img src="/images/developing a website.o.avif" alt="Project 1" className="w-full h-44 object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">
                            Mobile App Development</h3>
                            <p className="text-gray-700 text-left">Engage your audience on-the-go with our cutting-edge mobile app development services. We create user-friendly, feature-rich mobile apps that enhance your brand’s reach and customer interaction.</p>
                            <a
                                href="#portfolio"
                                className="inline-block bg-orange-700 text-white py-2 px-8 mt-4 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                {/* Repeat for other projects */}
                </motion.div>
            </div>
        </section>
    );
}