import {
  GlobeAltIcon,
  SparklesIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

export default function WhyWebsite() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-blue-800 text-3xl md:text-4xl font-bold font-serif tracking-tight mb-6">
          Why Every Business Needs a Website
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">Lapsa Web & Graphics</span>, 
          we craft websites that do more than look good — they help businesses grow. 
          Your website is your brand’s digital foundation, where design meets strategy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border-t-4 border-blue-600">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-full p-4 rounded-full mb-4">
            <GlobeAltIcon className="h-10 w-10 text-bwhite" />
          </div>
          <h3 className="md:text-xl font-semibold text-blue-800 mb-2 font-serif">
            Establish Your Online Presence
          </h3>
          <p className="text-gray-600">
            A professional website gives your business a home on the internet — visible 24/7 to customers everywhere.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border-t-4 border-red-600">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-full p-4 rounded-full mb-4">
            <SparklesIcon className="h-10 w-10 text-white" />
          </div>
          <h3 className="md:text-xl font-semibold text-blue-800 mb-2 font-serif">
            Build Trust & Credibility
          </h3>
          <p className="text-gray-600">
            A clean, modern design from Lapsa shows professionalism — convincing clients they’re in good hands.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border-t-4 border-blue-600">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-full p-4 rounded-full mb-4">
            <ChartBarIcon className="h-10 w-10 text-white" />
          </div>
          <h3 className="md:text-xl font-semibold text-blue-800 mb-2 font-serif">
            Expand Your Reach
          </h3>
          <p className="text-gray-600">
            Your website connects you to new audiences through search, social media, and digital marketing.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border-t-4 border-red-600">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-full p-4 rounded-full mb-4">
            <CursorArrowRaysIcon className="h-10 w-10 text-white" />
          </div>
          <h3 className="md:text-xl font-semibold text-blue-800 mb-2 font-serif">
            Convert Visitors into Clients
          </h3>
          <p className="text-gray-600">
            With intuitive design and strong calls-to-action, your website turns visitors into loyal customers.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-4 px-10 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Let’s Build Your Website
        </a>
      </div>
    </section>
  );
}
