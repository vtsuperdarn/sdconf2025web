import { MapPin, Phone, Globe, Car, Train, Utensils, Mountain, Coffee, Landmark, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'

export default function VenuePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className=" py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Conference Venue
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hotel Information */}
                <section className="mb-20">
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
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/hotel-roanoke.jpg"
                                alt="Hotel Roanoke & Conference Center"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="mb-20">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
                        Conference Facilities
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="font-serif font-semibold mb-4 text-lg">
                                Main Conference Hall
                            </h3>
                            <p className="text-gray-600">
                                Capacity for 300+ attendees with state-of-the-art AV equipment
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="font-serif font-semibold mb-4 text-lg">
                                Breakout Rooms
                            </h3>
                            <p className="text-gray-600">
                                Multiple rooms for parallel sessions and group discussions
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="font-serif font-semibold mb-4 text-lg">
                                Poster Area
                            </h3>
                            <p className="text-gray-600">
                                Dedicated space for poster presentations and networking
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Attractions */}
                <section className="mb-20">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
                        Things to Do
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Mountain className="w-6 h-6 text-vt-maroon" />
                                <h3 className="font-serif font-semibold text-lg">Outdoor Activities</h3>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Blue Ridge Parkway scenic drives</li>
                                <li>• McAfee Knob hiking trail</li>
                                <li>• Carvins Cove Natural Reserve</li>
                                <li>• Mill Mountain Star & Park</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="w-6 h-6 text-vt-maroon" />
                                <h3 className="font-serif font-semibold text-lg">Arts & Culture</h3>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Taubman Museum of Art</li>
                                <li>• Virginia Museum of Transportation</li>
                                <li>• Science Museum of Western Virginia</li>
                                <li>• O. Winston Link Museum</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <UtensilsCrossed className="w-6 h-6 text-vt-maroon" />
                                <h3 className="font-serif font-semibold text-lg">Food & Drink</h3>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Historic Roanoke City Market</li>
                                <li>• Local craft breweries</li>
                                <li>• Downtown restaurant district</li>
                                <li>• Multiple dining options within walking distance</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Local Tips */}
                <section>
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
                        Local Tips
                    </h2>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <ul className="space-y-6 text-gray-600">
                            <li className="flex items-start gap-4">
                                <Coffee className="w-6 h-6 mt-1 text-vt-maroon" />
                                <p>Downtown Roanoke is very walkable with numerous cafes, restaurants, and shops within easy reach of the hotel.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <ShoppingBag className="w-6 h-6 mt-1 text-vt-maroon" />
                                <p>Visit the Historic Roanoke City Market, one of the oldest continuously operating farmers' markets in Virginia.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mountain className="w-6 h-6 mt-1 text-vt-maroon" />
                                <p>The iconic Mill Mountain Star is just a short drive away and offers panoramic views of the Roanoke Valley.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
} 
