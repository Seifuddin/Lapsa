"use client";
import CorePrinciples from "./CorePrinciples"; // Adjust path if needed

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-tr from-orange-200 via-white to-orange-200 py-16 text-gray-800">
      {/* Intro */}
      <div className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">About Lapsa Web & Graphics</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are a passionate digital agency focused on building powerful websites and creative designs that elevate brands. From small businesses to growing startups, we transform ideas into impactful digital experiences that drive real growth.
        </p>
      </div>

      {/* Image + Who We Are */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-10 items-center">
        <img
          src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp"
          alt="Team Collaboration"
          className="w-full rounded-md shadow-lg object-cover"
        />
        <div>
          <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            At Lapsa, we believe that great design and thoughtful development go hand-in-hand. Our team of developers, designers, and digital experts works collaboratively to deliver visually compelling, fast, and functional solutions that help businesses make a lasting impression online.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We don’t just build websites — we create experiences that reflect your brand’s personality and communicate your value clearly. Whether you're looking to launch, scale, or refresh your digital presence, Lapsa is your creative partner.
          </p>
        </div>
      </div>

      {/* Core Principles (Mission, Vision, Motto) */}
    </section>
  );
}