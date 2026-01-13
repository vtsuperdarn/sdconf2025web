
"use client";

import { Hero } from '@/components/hero'
import Link from 'next/link'
import Image from 'next/image'

const imageLoader = ({ src }: { src: string }) => {
    return `/workshop/images/${src}`
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />


     {/* Group photo */}
    <section className="py-6 bg-white flex items-center justify-center">
      <div className="w-5/6">
            <img
                src="http://vt.superdarn.org/share/data/sd2025_workshop/photos/group_photo_2025.jpeg"
                alt="Group photo of SuperDARN 2025 Workshop attendees"
            />

{/*     Using this method loads the image at the top of the page in the
        hero section.  But, why?  

           <Image
            loader={imageLoader}
            src="group_photo_2025.jpeg"
            alt="Group photo of SuperDARN 2025 Workshop attendees"
            fill
            className="object-cover"
            priority />
*/}
      </div>
    </section>

      {/* Welcome Message Section */}
      <section>
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Welcome!</h2>
          <div className="bg-gray-50 text-gray-700 p-8 rounded-lg">
            <p> The 2025 SuperDARN Workshop was held June 2-6 at the Hotel Roanoke and Conference Center in Roanoke, Virginia, USA.  
                The Workshop was hosted by the Virginia Tech SuperDARN group with support from the National Science Foundation and
                other contributors.  This event continued the tradition of SuperDARN Workshops in bringing together scientists, 
                engineers, and students with shared interests in space science, especially as these can be advanced by application
                of the radars of the international SuperDARN collaboration.  Discussions centered around technical developments, 
                planning across the collaboration, scientific advances, and coordination with satellite missions and other ground-
                based instrumentation.  The Workshop included a half-day excursion to Blacksburg, home of Virignia Tech, with visits offered                 to local points of interest, a reception, and a dinner.
            </p>
            <br/>
            <p> We enjoyed welcoming attendees to a stimulating week in the beautiful and relaxed setting of the Blue Ridge Mountains of 
                Virginia!
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
