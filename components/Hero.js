import Image from 'next/image';

// components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="mx-2 inset-0 bg-cover bg-center bg-opacity-50">
        <Image
          src="/images/CDG_blog_post_image_01-850x412.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-5">
      <div className="service-card relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Your Stunning Solution for Web & Graphic Design
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Transform your ideas into visually captivating designs. We specialize in both web and graphic design, offering creative solutions to help your business grow.
        </p>

        <div className='flex gap-10 mt-5'>
        <a
            href="#portfolio"
            className="inline-block bg-orange-600 text-white py-1 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            All Services
          </a>

          <a
            href="#portfolio"
            className="inline-block bg-blue-600 text-white py-1 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            All Services
          </a>
        </div>

        </div>

        <div className="service-card relative mx-5 px-14 rounded-md p-5">
          <img src="/images/Screenshot_20221022-170110-removebg-preview.png" alt="Project 1" className="w-72 h-96 object-cover border-b-4" />

          <ul className='list-disc pl-5 ml-5 text-lg font-semibold'>

          </ul>
        <div className='flex gap-10 mt-5'>

        </div>

        </div>
        

      </div>
              {/* Row with 3 columns with more visually distinct styling */}
                <div className="flex flex-col md:flex-row mt-12 justify-center gap-8 m-5">
          <div className="w-full md:w-1/3 p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
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
            <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">Computer Sales</h3>
            <p className=' text-center'>Top-quality computers and accessories to meet your needs, whether for work or personal use.</p>
          </div>
        </div>
    </section>
  );
}