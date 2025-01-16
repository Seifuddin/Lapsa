import React from 'react'

export default function Request() {
  return (
    <section className='relative pb-10 pt-10 bg-blue-950 p-10'>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
            <h2 className="text-3xl font-semibold mb-4 text-white text-center">Request a Quotation</h2>
            <a
          href="#portfolio"
          className="inline-block text-center bg-orange-400 text-white py-3 px-2 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
        >
          Quotation
        </a>
        </div>
    </section>
  )
}
