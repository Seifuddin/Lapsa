"use client";

import {
  GlobeAltIcon,
  SparklesIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: GlobeAltIcon,
    title: "Visibility",
    before: "No one can find your business online",
    after: "Customers discover you 24/7 worldwide",
  },
  {
    icon: SparklesIcon,
    title: "Trust",
    before: "People doubt your legitimacy",
    after: "You look professional and credible",
  },
  {
    icon: ChartBarIcon,
    title: "Growth",
    before: "Limited reach and stagnant sales",
    after: "Endless growth through digital channels",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Conversion",
    before: "Visitors leave without action",
    after: "Visitors turn into paying clients",
  },
];

export default function WhyWebsite() {
  return (
    <section className="relative bg-black text-white py-16 px-4 md:px-10 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-red-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-yellow-400/10 blur-[120px]" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          The Difference a{" "}
          <span className="text-yellow-400">Website Makes</span> 
        </h2>
        <p className="text-gray-400 mt-4">
          It’s not optional anymore — it’s the line between invisible and unstoppable.
        </p>
      </div>

      {/* Split Layout */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* LEFT - BEFORE */}
        <div className="bg-white/5 border border-red-500/20 rounded-2xl p-6 backdrop-blur-lg">
          <h3 className="text-red-400 text-lg font-semibold mb-5">
            Without a Website
          </h3>

          <div className="space-y-5">
            {features.map(({ icon: Icon, title, before }, i) => (
              <div key={i} className="flex items-start gap-3 opacity-70">
                <Icon className="w-5 h-5 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">{title}</h4>
                  <p className="text-gray-400 text-sm">{before}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - AFTER */}
        <div className="relative bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/30 rounded-2xl p-6 overflow-hidden">

          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-400/10 blur-3xl opacity-30" />

          <h3 className="text-yellow-400 text-lg font-semibold mb-5 relative z-10">
            With a Website
          </h3>

          <div className="space-y-5 relative z-10">
            {features.map(({ icon: Icon, title, after }, i) => (
              <div
                key={i}
                className="flex items-start gap-3 group hover:translate-x-1 transition duration-300"
              >
                <Icon className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">{title}</h4>
                  <p className="text-gray-300 text-sm">{after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Punchline */}
      <div className="text-center mt-14">
        <p className="text-xl md:text-2xl font-semibold">
          Your business is already competing online.
        </p>
        <p className="text-yellow-400 text-xl md:text-2xl font-bold mt-2">
          The only question is — are you visible?
        </p>
      </div>
    </section>
  );
}