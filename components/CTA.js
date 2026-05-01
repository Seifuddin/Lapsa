"use client";
import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050b1a]" />

      {/* Soft cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_60%)]" />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">

        {/* Label */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
          One Action • Real Impact
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Ready to Take Your 
          <span className="text-yellow-400"> Business Online?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          Let Lapsa Web & Graphics help you build a stunning website that grows your brand, attracts clients, and boosts your sales.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">

          <a
            href="/contacts"
            className="
              px-7 py-2.5 rounded-full
              bg-white text-black text-sm font-medium
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            Get Started
          </a>

          <a
            href="/portfolio"
            className="
              px-7 py-2.5 rounded-full
              border border-white/20 text-white/70 text-sm
              hover:border-white hover:text-white
              transition
            "
          >
            Our Portfolio
          </a>
        </div>

        {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
      </div>
    </section>
  );
}