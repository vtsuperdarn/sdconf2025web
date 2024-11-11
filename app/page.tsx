import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "June 10-14, 2025",
    description: "Five days of scientific presentations and collaborative discussions"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Roanoke, Virginia",
    description: "Hotel Roanoke & Conference Center"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "International Community",
    description: "Join researchers and scientists from the global SuperDARN network"
  }
]

const importantDates = [
  {
    date: "March 1, 2025",
    event: "Abstract Submission Deadline",
    description: "Deadline for scientific abstract submissions"
  },
  {
    date: "April 1, 2025",
    event: "Early Registration Deadline",
    description: "Early registration rate ends"
  },
  {
    date: "May 15, 2025",
    event: "Accommodation Deadline",
    description: "Last day for guaranteed conference rate at Hotel Roanoke"
  }
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-gray-900">
              SuperDARN Workshop Conference 2025
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-serif">
              June 10-14, 2025 • Roanoke, Virginia, USA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration"
                className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors text-lg"
              >
                Register Now
              </Link>
              <Link
                href="/abstract"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded hover:bg-gray-50 transition-colors text-lg"
              >
                Submit Abstract
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-900 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">
            Important Dates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <time className="text-gray-900 font-semibold">{item.date}</time>
                <h3 className="text-xl font-serif font-semibold mt-2">{item.event}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">Join the Scientific Community</h2>
          <p className="text-xl mb-8 text-gray-300">
            Participate in advancing SuperDARN research and collaboration
          </p>
          <Link
            href="/registration"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition-colors text-lg"
          >
            Register for the Workshop
          </Link>
        </div>
      </section>
    </div>
  )
}
