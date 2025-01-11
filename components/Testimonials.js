export default function Testimonials() {

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    <div className="testimonial-card bg-black p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <p className="text-white mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                        <p className="font-semibold">Client Name</p>
                        <p className="text-gray-600">Company Name</p>
                    </div>

                    <div className="testimonial-card bg-black p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <p className="text-white mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                        <p className="font-semibold">Client Name</p>
                        <p className="text-gray-600">Company Name</p>
                    </div>

                    <div className="testimonial-card bg-black p-6 rounded-lg shadow-lg w-80 border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                                alt="Web Design Icon"
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <p className="text-white mb-4">"The team delivered an exceptional website that exceeded our expectations. Highly recommended!"</p>
                        <p className="inline-block p-1 rounded-sm font-semibold bg-orange-500 text-white">Muriithi Nguru</p>
                        <p className="text-white">Lapsa</p>
                    </div>
                    
                {/* Repeat for other testimonials */}
                </div>
            </div>
        </section>
    );
}