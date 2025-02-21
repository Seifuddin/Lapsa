import Image from 'next/image';

// components/Hero.js
export default function Awards() {
  return (
    <section className="relative bg-gray-800 text-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="mx-1 inset-0 bg-cover bg-center bg-opacity-50">
        <Image
          src="/images/ai-generated-golden-winner-cup-on-dark-background-photo.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative px-4 text-center">
        <h1 className="text-3xl text-white font-semibold mb-8">
          Our Customer Care Service
        </h1>

        <div className="flex flex-col md:flex-row">
            <div className="left flex-1 service-card p-4">
                    <h2 className="text-xl text-white mb-10"> Customer  service is a priority at Lapsa. Our representatives are ready to assist and advice you throughout the business day. Whether your requirements are for general services or for specific, unique situations, rely on our representatives to help you with your purchasing decisions. Best of all, Our prices are unsurpassed.</h2>
                    <h2 className="text-xl text-white mb-10"> Incase you need any help or assistance, kindly WhatsApp or send a text our Customer Care Number below: </h2>
                    <p className="text-lg inline-block rounded-md text-left mt-5 bg-orange-500 p-2 px-5 text-white font-bold">
            Contact our customer care
        </p>
                </div>
                <div className="right flex-2 service-card rounded-lg p-0">
                <img src="/images/image-removebg-preview (19).png" alt="Project 1" className="w-full h-full object-cover m-0" />

                </div>
            </div>
        
      </div>
    </section>
  );
}