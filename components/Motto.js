export default function Motto() {

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Our Motto</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="testimonial-card bg-blue-500 p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/government-of-kenya.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-22 rounded-full"
                            />
                        </div>
                        <p className="font-semibold">Our Motto</p>
                        <p className="text-gray-700 mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                    </div>

                    <div className="testimonial-card bg-blue-500 p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/government-of-kenya.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-22 rounded-full"
                            />
                        </div>
                        <p className="font-semibold">Our Mission</p>
                        <p className="text-gray-700 mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                    </div>

                    <div className="testimonial-card bg-blue-500 p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/government-of-kenya.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-22 rounded-full"
                            />
                        </div>
                        <p className="font-semibold">Our Vision</p>
                        <p className="text-gray-700 mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                    </div>
                    
                {/* Repeat for other testimonials */}
                </div>
            </div>
        </section>
    );
}