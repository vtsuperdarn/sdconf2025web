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
              <Link
                href="/abstract"
                className="inline-block mt-2 text-sm text-primary hover:test-primary/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-serif font-semibold mb-2">Registration</h3>
              <p className="text-gray-600">Opens: early Feb. 2025 <br />Closes: May 19, 2025</p>
              <Link
                href="/registration"
                className="inline-block mt-2 text-sm text-primary hover:test-primary/80 transition-colors"
              >
                Learn More →
              </Link>
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

      {/* Welcome Message Section */}
      <section>
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Welcome!</h2>
          <div className="bg-gray-50 text-gray-700 p-8 rounded-lg">
            <p> The 2025 SuperDARN Workshop will be held June 2-6 at the Hotel Roanoke and Conference Center in Roanoke, Virginia, USA.  
                The Workshop is being hosted by the Virginia Tech SuperDARN group with support from the National Science Foundation and
                other contributors.  This event will continue the tradition of SuperDARN Workshops in bringing together scientists, 
                engineers, and students with shared interests in space science, especially as these can be advanced by application
                of the radars of the international SuperDARN collaboration.  We will discuss technical developments, planning across the 
                collaboration, scientific advances, and coordination with satellite missions and other ground-based instrumentation.  The 
                schedule includes a half-day excursion to Blacksburg, home of Virignia Tech, with visits offered to local points of 
                interest, a reception, and a dinner.
            </p>
            <br/>
            <p><b> 3-day versus 5-day programs:</b> For those more interested in attending the scientific sessions, we offer a registration
                   that extends from Tuesday to Thursday where these sessions will be concentrated.  The 3-day program includes 
                   participation in the excursion to Blacksburg and the Workshop banquet on Thursday evening.
            </p>
            <br/>
            <p> We look forward to welcoming you to a stimulating week in the beautiful and relaxed setting of the Blue Ridge Mountains 
                of Virginia!
            </p>
            <br/>
            <p className="font-bold">The Virginia Tech SuperDARN 2025 Workshop Organizing Committee
            </p>
            <p>Mike Ruohoniemi &nbsp;&nbsp;&nbsp;&nbsp; Jo Baker &nbsp;&nbsp;&nbsp;&nbsp; Bharat Kunduri &nbsp;&nbsp;&nbsp;&nbsp;
               Kevin Sterne
            </p>
            <br/>
            <p> Email: <a href="mailto:sd-2025-g@vt.edu?subject=[Workshop website]"> sd-2025-g@vt.edu</a>
            </p>
          </div>

      </section>
    </div>
  )
}
