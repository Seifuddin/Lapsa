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
        <h1 className="text-3xl font-semibold mb-8">
          Our Customer Service
        </h1>
        <p className="text-lg text-white font-bold text-center">
            Customer  service is a priority at Lapsa. Our representatives are ready to assist and advice you throughout the business day. Whether your requirements are for general services or for specific, unique situations, rely on our representatives to help ypu with your purchasing decisions. Best of all, Our prices are unsurpassed. 
        </p>

        <p className="text-lg text-white font-bold text-center">
            Incase you need any help or assistance, kindly WhatsApp or send a text our Customer Care Number below:
        </p>

        <p className="text-lg inline-block rounded-md text-left mt-5 bg-orange-500 p-2 px-5 text-white font-bold">
            0111 608 331
        </p>
      </div>
    </section>
  );
}