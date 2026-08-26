"use client";

import { Check, ArrowRight, Rocket, Building2, Sparkles, Infinity, Zap } from "lucide-react";

const packages = [
  {
    id: "starter",
    name: "Starter",
    icon: Rocket,
    tag: "For startups",
    description: "Perfect for launching your brand online",
    price: "14,999",
    period: "one-time",
    complexity: "Simple",
    features: [
      "1–3 Professional Pages",
      "Fully Responsive Design",
      "Contact Form Integration",
      "Social Media Links",
      "Basic SEO Optimization",
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: Building2,
    tag: "For growing brands",
    description: "Scale your business with a powerful website",
    price: "24,999",
    period: "one-time",
    complexity: "Moderate",
    features: [
      "Up to 6 Custom Pages",
      "Unique UI/UX Design",
      "Inquiry & Contact Forms",
      "Google Maps Integration",
      "Comprehensive SEO Setup",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    icon: Sparkles,
    tag: "Best value",
    description: "Premium solution for established businesses",
    price: "39,999",
    period: "one-time",
    complexity: "Advanced",
    badge: "Popular Choice",
    popular: true,
    features: [
      "Up to 10 Custom Pages",
      "Premium Custom Design",
      "Advanced Form Builders",
      "Blog/News Integration",
      "Advanced SEO Strategy",
      "Priority Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Infinity,
    tag: "For large organizations",
    description: "Custom-built solutions for complex needs",
    price: "Custom",
    period: "custom",
    complexity: "Custom",
    features: [
      "Unlimited Custom Pages",
      "Complex Architecture",
      "Database & API Integration",
      "Advanced Security",
      "Dedicated Team Support",
    ],
  },
];

export default function PricingGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Compact */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Zap className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-xs font-medium text-slate-700">Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Transparent pricing for websites that drive results
          </p>
        </div>

        {/* Pricing Grid - Compact */}
        <div className="grid gap-4 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative flex flex-col rounded-xl transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-br from-violet-600 to-indigo-600 shadow-xl shadow-violet-200 scale-[1.02] z-10"
                  : `bg-slate-50 border border-slate-200 hover:shadow-md hover:-translate-y-1`
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg shadow-orange-200/50">
                    ⭐ {pkg.badge}
                  </span>
                </div>
              )}

              {/* Content - Compact Padding */}
              <div className={`p-5 ${pkg.popular ? "text-white" : ""}`}>
                {/* Header - Compact */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className={`text-[10px] font-semibold uppercase tracking-wider ${
                        pkg.popular ? "text-violet-200" : "text-slate-400"
                      }`}>
                        {pkg.complexity}
                      </p>
                      {pkg.tag && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                          pkg.popular 
                            ? "bg-white/20 text-white" 
                            : "bg-slate-200 text-slate-600"
                        }`}>
                          {pkg.tag}
                        </span>
                      )}
                    </div>
                    <h3 className={`mt-1 text-lg font-bold ${
                      pkg.popular ? "text-white" : "text-slate-900"
                    }`}>
                      {pkg.name}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-xl ${
                    pkg.popular ? "bg-white/20" : "bg-white"
                  }`}>
                    <pkg.icon className={`w-4 h-4 ${
                      pkg.popular ? "text-white" : "text-violet-600"
                    }`} />
                  </div>
                </div>

                {/* Description - Compact */}
                <p className={`text-xs leading-relaxed mb-3 ${
                  pkg.popular ? "text-violet-100" : "text-slate-500"
                }`}>
                  {pkg.description}
                </p>

                {/* Price - Compact */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-0.5">
                    {pkg.price !== "Custom" && (
                      <span className={`text-sm font-semibold ${
                        pkg.popular ? "text-violet-200" : "text-slate-600"
                      }`}>
                        KSh
                      </span>
                    )}
                    <span className={`text-2xl font-bold tracking-tight ${
                      pkg.popular ? "text-white" : "text-slate-900"
                    }`}>
                      {pkg.price}
                    </span>
                    {pkg.price !== "Custom" && (
                      <span className={`text-[10px] ${
                        pkg.popular ? "text-violet-200" : "text-slate-400"
                      }`}>
                        / {pkg.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features - Compact */}
                <div className="mb-4">
                  <ul className="space-y-1.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-violet-300" : "text-emerald-500"
                        }`} />
                        <span className={pkg.popular ? "text-violet-50" : "text-slate-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA - Compact */}
                <button
                  className={`w-full py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 group/btn ${
                    pkg.popular
                      ? "bg-white text-violet-600 hover:bg-violet-50 shadow-lg shadow-white/20"
                      : "bg-slate-900 text-white hover:bg-violet-700 hover:shadow-md hover:shadow-violet-200/30"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section - Compact */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-base">✅</span> 10+ websites delivered
            </div>
            <div className="w-px h-5 bg-slate-200" />
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-base">⭐</span> 4.9/5 average rating
            </div>
            <div className="w-px h-5 bg-slate-200" />
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-base">🚀</span> 2-week delivery
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            All packages include free consultation & 30-day support
          </p>
        </div>
      </div>
    </section>
  );
}