"use client";

export default function AboutUs() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-6 text-gray-800">
     {/* style={{
        backgroundImage: `url('/images/pngwing.com (7).png')`,
      }}
        */}
    
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gray-50 z-0 opacity-01"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Intro */}
        <div className="text-center py-6 px-4 max-w-6xl mx-auto">
                  <h1 className="max-w-7xl text-xl md:text-2xl font-bold text-orange-600 mb-5">
                    About <span className="text-orange-600">Us</span>
                  </h1>
                  <p className="italic mt-4 text-lg font-semibold text-blue-900">
                    We Empower Businesses through innovative and Creative Digital solutions.
                  </p>
        </div>
        {/* Image + Who We Are */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 pt-3 pb-16 items-center">
          <img
            src="/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp"
            alt="Team Collaboration"
            className="w-full rounded-md shadow-lg object-cover"
          />
          <div>
            <h3 className="italic font-bold mb-2 text-orange-600">Who We Are</h3>
            <p className="text-blue-900 text-base leading-relaxed mb-4">
              At Lapsa, we believe that great design and thoughtful development go hand-in-hand. Our team of developers, designers, and digital experts works collaboratively to deliver visually compelling, fast, and functional solutions that help businesses make a lasting impression online.
            </p>
            <p className="text-blue-900 text-base leading-relaxed">
              We don’t just build websites — we create experiences that reflect your brand’s personality and communicate your value clearly. Whether you're looking to launch, scale, or refresh your digital presence, Lapsa is your creative partner.
            </p>
          </div>
        </div>

        {/* Core Principles <CorePrinciples /> (Mission, Vision, Motto) */}
        
      </div>
    </section>
  );
}

