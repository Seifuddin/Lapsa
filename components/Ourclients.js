import Clients from "./Clients";

export default function Ourclients() {
    return (
      <div className="container-know bg-gray-200 py-16">
              <div className="mx-1 text-center">
                  <h2 className="text-3xl font-semibold mb-10 text-whit">Client Testimonials</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                      <div className="service-card">
                          <img src="/images/image-removebg-preview (20).png" alt="Project 1" className="w-full h-90 object-cover bg-oange-400 border-2 border-orange-400" />
                  </div>
                  <div className="service-card p-5 rounded-lg">
                  <Clients />
                  </div>
              </div>
              </div>
      </div>
    )
  }
  