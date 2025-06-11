"use client";
import { Target, Eye, Quote } from "lucide-react";

export default function CorePrinciples() {
  return (
    <div className="bg-gray-300 py-20 px-6">
      <h1 className="text-center mb-10 max-w-7xl text-3xl md:text-3xl font-extrabold text-blue-900">
                    Our Mission, <span className="text-orange-500">Vision & Motto</span>
                  </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {/* Mission */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Target className="w-12 h-12 text-cyan-600" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-4">Our Mission</h3>
          <p className="text-blue-950">
            To empower businesses and individuals by crafting innovative digital experiences and impactful designs that inspire action, build trust, and ignite growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Eye className="w-12 h-12 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Our Vision</h3>
          <p className="text-blue-950">
            To be a global leader in digital design and development—where creativity meets functionality, and every pixel tells a story that connects people to brands.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Quote className="w-12 h-12 text-gray-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Motto</h3>
          <p className="text-blue-950 italic">
            “Elevate Your Brand Online...”
          </p>
        </div>
      </div>
    </div>
  );
}