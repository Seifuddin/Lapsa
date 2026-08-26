"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Sparkles, 
  TrendingUp, 
  MousePointer, 
  ArrowRight,
  XCircle,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Visibility",
    without: "No one can find your business online",
    with: "Customers discover you 24/7 worldwide",
  },
  {
    icon: Sparkles,
    title: "Trust",
    without: "People doubt your legitimacy",
    with: "You look professional and credible",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    without: "Limited reach and stagnant sales",
    with: "Endless growth through digital channels",
  },
  {
    icon: MousePointer,
    title: "Conversion",
    without: "Visitors leave without action",
    with: "Visitors turn into paying clients",
  },
];

export default function WhyWebsite() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Why It Matters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The Difference a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Website Makes
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            It's not optional anymore — it's the line between invisible and unstoppable.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Without Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-100">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700">
                Without a Website
              </h3>
            </div>

            <div className="space-y-5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-red-50 shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.without}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* With Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl border border-blue-100 p-6 md:p-8 relative overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  With a Website
                </h3>
                <span className="ml-auto text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                  TRANSFORMED
                </span>
              </div>

              <div className="space-y-5">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-100 shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-800">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feature.with}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-sm text-slate-600">
              Your business is already competing online.
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              The only question is — are you visible?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 group"
            >
              Get Visible Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Simple Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-slate-400">
            Join 50+ businesses that have transformed their digital presence
          </p>
        </motion.div>
      </div>
    </section>
  );
}