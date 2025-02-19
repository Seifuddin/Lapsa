export default function Discount() {
  return (
    <div className='pt-20 bg-gradient-to-r from-blue-950 to-orange-400'>
      <h2 className="text-3xl font-semibold mb-10 text-center text-white">Get the best for less</h2>
      <div className="flex flex-col md:flex-row">
            <div className="left flex-1 service-card p-4">
                    <h2 className="text-xl font-semibold text-white mb-10">Get yourself a Website starting from Kes 13,000 only</h2>
                    <p className="text-lg text-gray-100 text-left">Quality web Design doesnt have to come with a hefty price tag. At Lapsa, we offer affordable, custom web design services tailored to fit your budget. Whether you're aa small business or a growing brand, we're here to help you create a proffessional online presence without breaking the bank. Let's work together to build your dream website at a price that works for you! </p>
                    <a
                    href="#portfolio"
                        className="inline-block ml-0 rounded-md bg-orange-500 text-white my-5 py-2 px-10 text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                    Request Quotation
                </a>
                </div>
                <div className="right flex-2 service-card rounded-lg p-0">
                <img src="/images/image-removebg-preview (14).png" alt="Project 1" className="w-full h-full object-cover m-0" />

                </div>
            </div>
    </div>
  )
}
