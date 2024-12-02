import { MapPin, Phone, Globe, Car, Train, Utensils } from 'lucide-react'
import Image from 'next/image'

export default function VenuePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Conference Venue
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hotel Information */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                                Hotel Roanoke & Conference Center
                            </h2>
                            <div className="prose max-w-none text-gray-600">
                                <p className="mb-6">
                                    A Tudor-style hotel that has been hosting visitors to Virginia&aposs Blue Ridge Mountains
                                    since 1882. This historic hotel combines old-world charm with modern amenities and
                                    is perfectly suited for our international conference.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
                                            <p>110 Shenandoah Avenue NE<br />Roanoke, VA 24016, USA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 mt-1 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">Phone</p>
                                            <p>+1 (540) 985-5900</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="w-5 h-5 mt-1 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">Website</p>
                                            <a
                                                href="https://www.hotelroanoke.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-900 hover:text-gray-600"
                                            >
                                                www.hotelroanoke.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <a
                                        href="https://book.passkey.com/event/50906985/owner/9515698/home"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-vt-maroon text-white px-8 py-3 rounded hover:bg-[#FF7A1A] transition-colors text-lg"
                                    >
                                        Book Your Room
                                    </a>
                                    <p className="mt-4 text-sm text-gray-500">
                                        Special conference rates available until May 15, 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/hotel-roanoke.jpg"
                                alt="Hotel Roanoke & Conference Center"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Conference Facilities
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-serif font-semibold mb-2">Main Conference Hall</h3>
                            <p className="text-gray-600">
                                Capacity for 300+ attendees with state-of-the-art AV equipment
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-serif font-semibold mb-2">Breakout Rooms</h3>
                            <p className="text-gray-600">
                                Multiple rooms for parallel sessions and group discussions
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-serif font-semibold mb-2">Poster Area</h3>
                            <p className="text-gray-600">
                                Dedicated space for poster presentations and networking
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Area */}
                <section>
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Exploring Roanoke
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Car className="w-5 h-5 text-gray-400" />
                                <h3 className="font-serif font-semibold">Transportation</h3>
                            </div>
                            <p className="text-gray-600">
                                Easy access to downtown Roanoke with complimentary hotel shuttle service
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Utensils className="w-5 h-5 text-gray-400" />
                                <h3 className="font-serif font-semibold">Dining</h3>
                            </div>
                            <p className="text-gray-600">
                                Multiple dining options within walking distance, featuring local cuisine
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Train className="w-5 h-5 text-gray-400" />
                                <h3 className="font-serif font-semibold">Attractions</h3>
                            </div>
                            <p className="text-gray-600">
                                Visit the Virginia Museum of Transportation and the Taubman Museum of Art
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
} 
