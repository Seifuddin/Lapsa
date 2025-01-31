export default function Footer() {
    return (
      <section className='relative pb-10 pt-20 bg-blue-950 p-10'>
          <div className='grid'>
              <h2 className="text-2xl font-bold mb-4 text-left text-white">Lapsa Web and Graphics</h2>
                            {/* Row with 3 columns with more visually distinct styling */}
          <div className="flex flex-col md:flex-row mt-3 justify-center gap-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white">Our Services</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white"> <a href="#" className=" text-white">Web Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Graphic Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Printing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Marketing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">SEO </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Web Maintenance </a></li>
                </ul>
              </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white">Our Location</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white"> <a href="#" className=" text-white">Web Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Graphic Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Printing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Marketing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">SEO </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Web Maintenance </a></li>
                </ul>
              </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-left text-white">Contact Us</h3>

            <div className="footer-list mt-3">
                <ul>
                  <li className="text-white"> <a href="#" className=" text-white">Web Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Graphic Design </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Printing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Digital Marketing </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">SEO </a></li>
                  <li className="text-white"> <a href="#" className=" text-white">Web Maintenance </a></li>
                </ul>
              </div>
          </div>
          
          </div>

          
              <h2 className="text-center text-white mt-7">Copyright © 2025 Lapsa Web and Graphics Ltd  -All rights reserved.</h2>

          </div>
      </section>
    )
  }