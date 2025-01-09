"use client";

import { Hero } from '@/components/hero'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Important Dates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Important Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Abstract Submission</h3>
              <p className="text-gray-600">Opens: To be determined <br />Deadline: early May</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Registration</h3>
              <p className="text-gray-600">Opens: late January 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Hotel Booking</h3>
              <p className="text-gray-600">Available Now<br />Special Rate Until April 18, 2025</p>
              <Link
                href="/venue"
                className="inline-block mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">VISA Information</h3>
              <p className="text-gray-600">
                Request Invitation Letter<br />
                <span className="text-sm">Allow 8-12 weeks for processing</span>
              </p>
              <Link
                href="/travel#visa"
                className="inline-block mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
