import Image from 'next/image';

// components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white pt-5 md:pt-20 md:pb-25">
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

        <a
            href="#portfolio"
            className="inline-block bg-orange-400 text-white px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Quotation
          </a>

          <a
            href="#portfolio"
            className="inline-block bg-blue-600 text-white px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Services
          </a>

        <div className='flex gap-10 mt-5'>

                        {/* Row with 3 columns with more visually distinct styling  */}
                        <div className="flex justify-center gap-1">
          <div className="w-full md:w-1/3 p-6 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Stunning Websites</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Happy Clients</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Software</p>
          </div>

          <div className="w-full md:w-1/3 p-6 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex justify-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Software</p>
          </div>
           
        </div>
        
        
        </div>
        <p className="text-lg sm:text-xl mb-6">
        We're more than just a printing company. We're your creative partner, dedicated to helping individuals and businesses alike bring their ideas to life with vibrant, high-quality prints.
        </p>
        </div>
        

        <div className="service-card relative mx-5 px-14 rounded-md p-5">
          <ul className='list-disc pl-5 ml-5 text-lg font-semibold'>
          <img src="/images/image-removebg-preview (21).png" alt="Project 1" className="w-96 h-full object-cover m-0" />

          </ul>
        <div className='flex gap-10 mt-5'>
        </div>
        </div>
      </div>

      <div className='relative p-2'>
      <h3 className="text-3xl font-bold mb-2 text-white text-center">Our Clients</h3>

        <div className="flex gap-1">
          <div className="w-full md:w-1/3 p-1 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 bg-orange-400">
            <div className="flex justify-center">
              <img
                src="/images/government-of-kenya.jpg" // Example icon image
                alt="Web Design Icon"
                className="w-18 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black text-center">GOK</h3>
          </div>

          <div className="w-full md:w-1/3 p-1 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 bg-orange-400">
            <div className="flex justify-center">
              <img
                src="/images/government-of-kenya.jpg" // Example icon image
                alt="Web Design Icon"
                className="w-18 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black text-center">GOK</h3>
          </div>

          <div className="w-full md:w-1/3 p-1 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 bg-orange-400">
            <div className="flex justify-center">
              <img
                src="/images/government-of-kenya.jpg" // Example icon image
                alt="Web Design Icon"
                className="w-18 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black text-center">GOK</h3>
          </div>

          <div className="w-full md:w-1/3 p-1 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 bg-orange-400">
            <div className="flex justify-center">
              <img
                src="/images/government-of-kenya.jpg" // Example icon image
                alt="Web Design Icon"
                className="w-18 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black text-center">GOK</h3>
          </div>

          <div className="w-full md:w-1/3 p-1 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 bg-orange-400">
            <div className="flex justify-center">
              <img
                src="/images/government-of-kenya.jpg" // Example icon image
                alt="Web Design Icon"
                className="w-18 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black text-center">GOK</h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}