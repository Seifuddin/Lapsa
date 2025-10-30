"use client";

import { Globe, TrendingUp, Users, Smartphone } from "lucide-react";
import CTA from "./CTA"; // adjust path if needed

export default function WhyWebsite() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What is a Website?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-12">
          A website is your business’s online home — a digital space where 
          customers can learn about who you are, what you offer, and how to 
          connect with you. It works 24/7, giving your brand visibility and 
          credibility in today’s digital world.
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Why Your Business Needs a Website
        </h3>

        {/* Reason Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14 text-left">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Globe className="text-blue-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Global Reach</h4>
            <p className="text-gray-600 text-sm">
              Reach customers beyond your local area and grow your business worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <TrendingUp className="text-green-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Business Growth</h4>
            <p className="text-gray-600 text-sm">
              Attract new clients, showcase your services, and increase sales opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="text-purple-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Credibility</h4>
            <p className="text-gray-600 text-sm">
              A professional website builds trust and shows that your brand is reliable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Smartphone className="text-pink-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">24/7 Availability</h4>
            <p className="text-gray-600 text-sm">
              Customers can find you anytime, anywhere, even outside business hours.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CTA />
      </div>
    </section>
  );
}
