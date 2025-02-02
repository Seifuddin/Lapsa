import Image from 'next/image';
import Subhero from './Subhero';

// components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white pt-24 md:pt-30">
      <div className="mx-2 inset-0 bg-cover bg-center bg-opacity-50">
        <Image
          src="/images/CDG_blog_post_image_01-850x412.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
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
            className=" bg-orange-400 text-white px-6 p-2 mx-1 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Quotation
          </a>

          <a
            href="#portfolio"
            className=" bg-blue-600 text-white px-6 p-2 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Services
          </a>



          <div className='flex relative mt-5'>
        <div className="p-4 justify-center m-2 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
        <p className=' text-center font-semibold'>Stunning Websites</p>
            </div>

            <div className="p-4 justify-center m-2 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Happy Clients</p>
            </div>

            <div className="p-4 justify-center m-2 bg-orange-400 text-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <h3 className="text-xl font-bold text-white text-center">100+</h3>
            <p className=' text-center font-semibold'>Software Developed</p>
            </div>

           
        </div>
        
        

        </div>
        

        <div className="service-card relative mx-5 px-14 rounded-md p-5">
          <ul className='list-disc pl-5 ml-5 text-lg font-semibold'>

          </ul>
        </div>
      </div>
        <div className='flex relative justify-center place-items-center bg-gray-900 border-t'>
        <div className="flex justify-center m-2">
              <img
                src="/images/2048px-Facebook_icon_2013.svg.png" // Example icon image
                alt="Brand Identity Icon"
                className="w-10 h-10 border rounded-md"
              />
            </div>

            <div className="flex justify-center m-2">
              <img
                src="/images/2048px-Instagram_icon.png" // Example icon image
                alt="Brand Identity Icon"
                className="w-10 h-10 border rounded-md"
              />
            </div>

            <div className="flex justify-center m-2">
              <img
                src="/images/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.jpg" // Example icon image
                alt="Brand Identity Icon"
                className="w-10 h-10 border rounded-md"
              />
            </div>

            <div className="flex justify-center m-2">
              <img
                src="/images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" // Example icon image
                alt="Brand Identity Icon"
                className="w-14 h-14"
              />
            </div>

            <div className="flex justify-center m-2">
              <img
                src="/images/social-media-icon-illustration-youtube-youtube-icon-vector-illustration_561158-2132.jpg" // Example icon image
                alt="Brand Identity Icon"
                className="w-10 h-10 rounded-md"
              />
            </div>

      </div>

    </section>
  );
}