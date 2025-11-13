import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-20 px-6 md:px-12">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-16 z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-left flex-1">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight font-serif mb-5">
            We Design <br />
            <span className="text-yellow-300">Websites That Work</span>
          </h1>
          <p className="text-lg text-gray-100 mb-8 max-w-md mx-auto md:mx-0">
            Lapsa Web & Graphics helps businesses stand out online with
            beautiful, high-performing websites and creative visual design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-white text-center text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border text-center border-white/70 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Hero Image (optional) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl bg-gray-300 border-4 border-blue-500">
            <Image
              src="/images/image-removebg-preview (44).png" // <- replace with your image (e.g. a mockup)
              alt="Web design illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
