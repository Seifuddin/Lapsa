import { useState } from "react";

export default function Testimonials() {
    // State to track the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Array of testimonials
    const testimonials = [
      {
        text: "The team delivered an exceptional website that exceeded our expectations. Highly recommended!",
        name: "Client Name 1",
        company: "Company Name 1",
        imgSrc: "/images/IMG_20240804_185749_718~2.jpg",
      },
      {
        text: "Great service! The team was very professional and the results were fantastic.",
        name: "Client Name 2",
        company: "Company Name 2",
        imgSrc: "/images/IMG_20240804_185749_718~2.jpg",
      },
      {
        text: "I would recommend them to anyone. Their attention to detail is unmatched.",
        name: "Muriithi Nguru",
        company: "Lapsa",
        imgSrc: "/images/IMG_20240804_185749_718~2.jpg",
      },
      // Add more testimonials as needed
    ];
  
    // Function to go to the next testimonial
    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    // Function to go to the previous testimonial
    const prevTestimonial = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    };
  
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
          
          {/* Carousel wrapper */}
          <div className="relative">
            {/* Testimonial card */}
            <div className="testimonial-card bg-black p-6 rounded-lg shadow-lg w-80 mx-auto mb-8 border border-gray-400">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonials[currentIndex].imgSrc}
                  alt="Client Image"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-white mb-4">
                {testimonials[currentIndex].text}
              </p>
              <p className="inline-block p-1 rounded-sm font-semibold bg-orange-500 text-white">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-white">{testimonials[currentIndex].company}</p>
            </div>
  
            {/* Carousel Navigation */}
            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              >
                &#8592; {/* Left Arrow */}
              </button>
              <button
                onClick={nextTestimonial}
                className="text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              >
                &#8594; {/* Right Arrow */}
              </button>
            </div>
          </div>
  
          {/* Optionally, you can add indicator dots below */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"}}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }