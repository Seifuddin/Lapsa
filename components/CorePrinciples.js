"use client";
import { Target, Eye, Quote } from "lucide-react";

export default function CorePrinciples() {
  return (
    <div className="bg-gray-200 py-20 px-6">
      <h1 className="text-center max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    Our Mission, Vision & Motto<span className="text-orange-600"></span>
                  </h1>
                  <p className="italic text-center text-blue-900 font-semibold text-lg mb-10 max-w-6xl mx-auto">
            The Purpose & Goals of establishing Lapsa Web & Graphics.
          </p>
      <div className="max-w-6l mx-auto grid md:grid-cols-3 gap-10 text-center">
        {/* Mission */}
        <div className="bg-gray-50 border border-blue-200 rounded-md shadow-md p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Target className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-blue-600 mb-2">Our Mission</h3>
          <p className="text-blue-900">
            To empower businesses and individuals by crafting innovative digital experiences and impactful designs that inspire action, build trust, and ignite growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-50 border border-blue-200 rounded-md shadow-md p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Eye className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-blue-900">
            To be a global leader in digital design and development—where creativity meets functionality, and every pixel tells a story that connects people to brands.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-gray-50 border border-blue-200 rounded-md shadow-md p-8 hover:shadow-2xl transition">
          <div className="flex justify-center mb-4">
            <Quote className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-blue-600 mb-2">Our Motto</h3>
          <p className="text-blue-900 italic">
            “Elevate Your Brand Online...”
          </p>
          <p className="text-blue-900">
             We Design Your Digital Future by Elevating Your Brand Online.
          </p>
        </div>
      </div>
    </div>
  );
}