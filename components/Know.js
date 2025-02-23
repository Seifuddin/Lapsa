"use client";
import { motion } from "framer-motion";

export default function Know() {
  return (
    <div className="container-know bg-gray-200 py-16">
            <div className="mx-1 text-center">
                <h2 className="text-3xl font-semibold mb-10 text-whit">Did You Know?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                     className="service-card m-1">
                        <img src="/images/download.jpg" alt="Project 1" className="w-full h-full object-cover rounded-xl m-0 border-2" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                 className="service-card p-5 rounded-lg">
                <p className="text-lg text-left text-whit mb-2">

                We are a passionate team of web and graphic designers committed to turning your ideas into captivating digital experiences. With years of experience, we specialize in designing intuitive websites and eye-catching graphics that help businesses grow.
                </p>

                <p className="text-lg text-left tet-white mb-2">
                With years of experience, we specialize in designing intuitive websites and eye-catching graphics that help businesses grow. With years of experience, we specialize in designing intuitive websites and eye-catching graphics that help businesses grow.
                </p>
                <a
                    href="#portfolio"
                        className="inline-block rounded-lg bg-orange-700 text-white py-2 px-8 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                    Get a Website for your Business
                </a>
                </motion.div>
            </div>
            </div>
    </div>
  )
}
