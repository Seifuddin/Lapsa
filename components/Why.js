export default function Why() {

    return (
        <section className="bg-gray-200 px-3 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-500">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/2287947-removebg-preview.png" // Example icon image
                                alt="Web Design Icon"
                                className="w-16 h-16"
                            />
                        </div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500 bg-gray-200 rounded-md border border-orange-200">Our Quality</h3>
                    <p>Responsive, modern web design tailored to your business needs.</p>
                </div>

                <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-500">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/2287947-removebg-preview.png" // Example icon image
                            alt="Web Design Icon"
                            className="w-16 h-16"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500 bg-gray-200 rounded-md border border-orange-200">Fast Delivery</h3>
                    <p>Creating a memorable brand identity that connects with your audience.</p>
                </div>

                <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-500">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/2287947-removebg-preview.png" // Example icon image
                            alt="Web Design Icon"
                            className="w-16 h-16"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500 bg-gray-200 rounded-md border border-orange-200">Affordable Prices</h3>
                    <p>Creative design solutions for print, digital, and social media marketing.</p>
                </div>

                <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg border border-orange-500">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/2287947-removebg-preview.png" // Example icon image
                            alt="Web Design Icon"
                            className="w-16 h-16"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500 bg-gray-200 rounded-md border border-orange-200">Modern Machines</h3>
                    <p>Creative design solutions for print, digital, and social media marketing.</p>
                </div>
                </div>
            </div>
        </section>
    );
}