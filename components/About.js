export default function About() {
    return (
        <section className="bg-gray-200 py-16">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-10">About Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="service-card">
                        <img src="/images/CDG_blog_post_image_01-850x412.jpg" alt="Project 1" className="w-full h-80 object-cover" />
                </div>
                <div className="service-card mx-2 pl-2 rounded-lg">
                <p className="text-xl text-left text-orange-500 font-extrabold mb-2">Our Motto</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                We are commited to excellence in print and branding                </p>
                <p className="text-xl text-left text-orange-500 font-extrabold mb-2">Our Mission</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                Our mission is to deliver outstanding printing services that exceed customer expectations, using the latest technology and top-quality materials.                </p>
                <p className="text-lg text-left text-orange-500 font-extrabold mb-2">Our Vission</p>
                <p className="text-lg text-left text-gray-700 mb-2">
                Our Vision is to offer local and International organizations the finest of products and services in the market through Lapsa.                </p>
                <a
                    href="#portfolio"
                        className="inline-block ml-0 rounded-md bg-orange-400 text-white py-2 px-8 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                    About Us
                </a>
                </div>
            </div>
            </div>
        </section>
    );
}