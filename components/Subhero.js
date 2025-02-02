import React from 'react'

export default function Subhero() {
  return (
    <div>
                 {/* Row with 3 columns with more visually distinct styling */}
                 <div className="flex flex-col md:flex-row mt-12 justify-center gap-8 mx-10 pb-5">
          <div className="w-full md:w-1/3 p-6 bg-gray-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="/images/2287947-removebg-preview.png" // Example icon image
                alt="Web Design Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">Web Design</h3>
            <p className=' text-center'>High-quality and responsive web design tailored to your business needs.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="/images/4668243-removebg-preview.png" // Example icon image
                alt="Graphic Design Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">Graphic Design</h3>
            <p className=' text-center'>Creative and impactful graphics that capture your brand's essence.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="/images/image-removebg-preview (11).png" // Example icon image
                alt="Brand Identity Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">Software Development</h3>
            <p className=' text-center'>Top-quality computers and accessories to meet your needs, whether for work or personal use.</p>
          </div>
        </div>
    </div>
  )
}
