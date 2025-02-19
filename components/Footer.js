export default function Footer() {
    return (
      <section className='relative pt-20 bg-blue-950'>
          <div className='grid'>
              <h2 className="text-2xl font-bold mb-4 text-center text-white px-5">Lapsa Web and Graphics</h2>
                            {/* Row with 3 columns with more visually distinct styling */}
          <div className="flex flex-col md:flex-row mt-3 justify-center px-5 gap-5">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white pt-5 border-b">Our Services</h3>

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
            <h3 className="text-xl font-semibold text-left text-white pt-5 border-b">Our Location</h3>

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
            <h3 className="text-xl font-semibold text-left text-white pt-5 border-b">Contact Information</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Lapsa Web and Graphics </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">0111 608 331 </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">lapsaone@gmail.com </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Lapsa Web and Graphics </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Lapsa Web and Graphics </a></li>
                  <li className="text-white pt-2"> <a href="#" className=" text-white border-b">Lapsa Web and Graphics </a></li>
                </ul>
              </div>
          </div>
          
          </div>

          
              <h2 className="text-center text-white mt-7 bg-gray-700 m-0 bottom-0 relative p-3 ">Copyright © 2025 Lapsa Web and Graphics Ltd |Muriithi Nguru |  -All rights reserved.</h2>

          </div>
      </section>
    )
  }