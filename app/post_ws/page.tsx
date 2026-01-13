"use client";
import Image from 'next/Image'

const imageLoader = ({ src }: { src: string }) => {
    return `/workshop/images/${src}`
}

export default function PostwsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-semibold text-gray-900 text-center">
                        Post Workshop
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Pictures */}

                <section className="mb-12">

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Pictures from the Week
                    </h2>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                        Excursions to Blacksburg

                    </h3>

                </section>



            We're working on posting some information that happened during the workshop here...
            </div>
        </div>
    )
} 
