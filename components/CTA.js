"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Ready to Take Your Business Online?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg md:text-xl mb-10 text-blue-100">
          Let Lapsa Web & Graphics help you build a stunning website that grows your brand, attracts clients, and boosts your sales.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-8 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            Get Started Today
          </Link>
          <Link
            href="/portfolio"
            className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-2 rounded-lg shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}