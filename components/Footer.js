import Image from "next/image"

export default function Footer() {
    return (
      <section className='w-full relative pt-20 bg-blue-950'>
          <div className='grid'>
                            {/* Row with 3 columns with more visually distinct styling */}
          <div className="flex flex-col md:flex-row mt-3 justify-center px-5 gap-5">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white pt-5 underline">Our Services</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white"> <a href="#" className=" text-white border-b">Web Design </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Graphic Design </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Digital Printing </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Digital Marketing </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">SEO </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Web Maintenance </a></li>
                </ul>
              </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white pt-5 underline">Our Location</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white"> <a href="#" className=" text-white">We are located in Nairobi CBD </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white">Lapsa Avenue </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white">Lapsa Plaza </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white">Room no 7 </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white">First Floor </a></li>
                </ul>
              </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white pt-5 underline">Contact Information</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white pt-2">
                    <a href="#" className="flex text-white">
                      <div className="flex mx-2">
                        <img
                          src="/images/phone-512.png" // Example icon image
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md"
                        />

                        <img
                          src="/images/pngtree-whatsapp-icon-png-image_3584845.jpg" // Example icon image
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md mx-1"
                        />
                      </div>
                      0111 608 331 </a>
                  </li>

                  <li className="text-white pt-2">
                    <a href="#" className="flex text-white">
                      <div className="flex mx-2">
                        <img
                          src="/images/gratis-png-direccion-de-correo-electronico-iconos-de-la-computadora-logo-usuario-gmail.png" // Example icon 
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md"
                        />
                      </div>
                      nguruedwin46@gmail.com </a>
                  </li>

                  <li className="text-white pt-2">
                    <a href="#" className="flex text-white">
                      <div className="flex mx-2">
                        <img
                          src="/images/2048px-Facebook_icon_2013.svg.png" // Example icon image
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md"
                        />
                      </div>
                      Lapsa Web and Graphics </a>
                  </li>

                  <li className="text-white pt-2">
                    <a href="#" className="flex text-white">
                      <div className="flex mx-2">
                        <img
                          src="/images/2048px-Instagram_icon.png" // Example icon image
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md"
                        />
                      </div>
                      Lapsa Web and Graphics </a>
                  </li>

                  <li className="text-white pt-2">
                    <a href="#" className="flex text-white">
                      <div className="flex mx-2">
                        <img
                          src="/images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" // Example icon image
                          alt="Brand Identity Icon"
                          className="w-7 h-7 border rounded-md"
                        />
                      </div>
                      Lapsa Web and Graphics </a>
                  </li>

                </ul>
              </div>
            </div>
          
          </div>

          
              <h2 className="text-center text-white mt-7 bg-gray-700 m-0 bottom-0 relative p-3 underline">Copyright © 2025 Lapsa Web and Graphics Ltd |Muriithi Nguru |  -All rights reserved.</h2>

          </div>
      </section>
    )
  }