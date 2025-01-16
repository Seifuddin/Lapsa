import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden relative py-10 mx-1">
      <h2 className="text-3xl font-semibold mb-10 text-center">Our Clients</h2>
      <div className="whitespace-nowrap animate-marquee">

        {/* Marquee Images */}
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 1"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 2"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 3"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 4"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 5"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        {/* Duplicate the images for continuous loop */}
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 1"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 2"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 3"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 4"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
        <img
          src="/images/2287947-removebg-preview.png"
          alt="Photo 5"
          className="inline-block w-48 h-32 object-cover mr-4"
        />
      </div>
    </div>
  );
};

export default Marquee;