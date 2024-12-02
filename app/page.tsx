"use client";

import Image from 'next/image'
import Link from 'next/link'

const imageLoader = ({ src }: { src: string }) => {
  return `/workshop/${src}`
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          loader={imageLoader}
          src= "blue-ridge.png"
          alt="Blue Ridge Mountains"
          fill
          className="object-cover"
          loading="eager"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Lighter overlay for better visibility */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4 drop-shadow-lg">
            SuperDARN Workshop 2025
          </h1>
          <p className="text-xl md:text-2xl mb-2 drop-shadow-lg">
            June 2-6, 2025
          </p>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
            Roanoke, Virginia, USA
          </p>

          {/* Live Updates Button */}
          <Link
            href="/live-updates"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded text-white bg-red-600 hover:bg-red-700 transition-colors duration-150 ease-in-out"
          >
            Live Updates
          </Link>
        </div>
      </div>

      {/* Important Dates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Abstract Submission</h3>
              <p className="text-gray-600">Opens: January 15, 2025<br />Deadline: March 1, 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Registration</h3>
              <p className="text-gray-600">Opens: December 15, 2024<br />Early Bird Deadline: April 1, 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Hotel Booking</h3>
              <p className="text-gray-600">Available Now<br />Special Rate Until May 15, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Link
              href="/venue"
              className="inline-block bg-[#861F41] text-white px-8 py-3 rounded hover:bg-[#6B1934] transition-colors text-lg mx-2"
            >
              Conference Venue
            </Link>
            <a
              href="https://book.passkey.com/event/50906985/owner/9515698/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF6600] text-white px-8 py-3 rounded hover:bg-[#FF7A1A] transition-colors text-lg mx-2"
            >
              Book Hotel Room
            </a>
          </div>
          <p className="mt-6 text-gray-600">
            Conference registration will open in December 2024
          </p>
        </div>
      </section>
    </div>
  )
}
