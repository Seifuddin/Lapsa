import React from 'react'

export default function Whatis() {
  return (
    <section className="relative bg-green-50 px-6 pb-10 overflow-hidden">
      <div className="mx-auto px-3 bg-gradient-to-r from-blue-900 to-blue-700 text-center max-w-7xl text-white py-16 rounded-md">
      {/* Background Overlay with Patterns */}
      <div className="relative inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="relative inset-0 bg-[url('/images/patterns.png')] opacity-10 bg-cover bg-center z-0"></div>
        <div className="max-w-6xl mx-auto px-3 text-center">
          <h3 className="relative textleft md: text-center  text-2xl md:text-4xl fontmedium fontserif font-bold text-yellow-300 mb-4">Did You  Know?</h3>
          <p className="relative font-base mt-2 text-left md:text-center text-white max-w-4xl mx-auto">A website is your digital storefront — a space on the internet where people can learn about your business, products, and services at any time, from anywhere. It’s often the first impression customers get of your brand.</p>

          <div className="relative mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-yellow-300 text-gray-900 font-semibold py-2 md:py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border border-white/70 text-white font-semibold py-2 md:py-3 px-8 rounded-lg hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
        </div>
      </section>
  )
}
