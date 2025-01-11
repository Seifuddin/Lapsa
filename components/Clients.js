export default function Clients() {
  return (
    <div className="bg-gray-50 mx-auto py-16 p-2">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Our Clients</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 container mx-auto">
            <div className="service-card rounded-lg border border-gray-300">
                <div className="flex justify-center">
                    <img
                        src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                        alt="Web Design Icon"
                        className="w-full h-44 object-cover rounded-t-md border-b"
                    />
                </div>
                <h3 className="text-md p-1 text-white bg-gray-600 font-semibold text-center rounded-b-md">Government of Kenya</h3>
            </div>

            <div className="service-card rounded-lg border border-gray-300 bg-gray-100">
                <div className="flex justify-center">
                    <img
                        src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                        alt="Web Design Icon"
                        className="w-full h-44 object-cover rounded-t-md border-b"
                    />
                </div>
                <h3 className="text-md p-1 text-white bg-gray-600 font-semibold text-center rounded-b-md">Government of Kenya</h3>
            </div>

            <div className="service-card rounded-lg border border-gray-300 bg-gray-100">
                <div className="flex justify-center">
                    <img
                        src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                        alt="Web Design Icon"
                        className="w-full h-44 object-cover rounded-t-md border-b"
                    />
                </div>
                <h3 className="text-md p-1 text-white bg-gray-600 font-semibold text-center rounded-b-md">Government of Kenya</h3>
            </div>

            <div className="service-card rounded-lg border border-gray-300 bg-gray-100">
                <div className="flex justify-center">
                    <img
                        src="/images/IMG_20240804_185749_718~2.jpg" // Example icon image
                        alt="Web Design Icon"
                        className="w-full h-44 object-cover rounded-t-md border-b"
                    />
                </div>
                <h3 className="text-md p-1 text-white bg-gray-600 font-semibold text-center rounded-b-md">Government of Kenya</h3>
            </div>
            
        </div>
    </div>
  )
}
