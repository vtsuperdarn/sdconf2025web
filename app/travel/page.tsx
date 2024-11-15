"use client"

export default function TravelPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Travel & Lodging Information
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Venue Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Conference Venue
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4">
                            The conference will be held at the Hotel Roanoke & Conference Center, a historic hotel
                            located in downtown Roanoke, Virginia.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="font-serif font-semibold mb-2">Hotel Roanoke & Conference Center</h3>
                            <p className="text-gray-600">
                                110 Shenandoah Avenue NE<br />
                                Roanoke, VA 24016<br />
                                United States
                            </p>
                        </div>
                    </div>
                </section>

                {/* Transportation Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Getting Here
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-4">By Air</h3>
                            <p className="text-gray-600 mb-4">
                                The nearest airport is Roanoke-Blacksburg Regional Airport (ROA),
                                located approximately 15 minutes from the conference venue.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Distance from airport: 4.5 miles</li>
                                <li>Estimated taxi fare: $15-20</li>
                                <li>Airport shuttle service available</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-4">By Train</h3>
                            <p className="text-gray-600 mb-4">
                                Roanoke is served by Amtrak's Northeast Regional line with daily service.
                                The Amtrak station is within walking distance of the hotel.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Walking distance to venue: 0.3 miles</li>
                                <li>Regular service from major East Coast cities</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Accommodation Section */}
                <section>
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Accommodation
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="font-serif font-semibold mb-2">Conference Rate</h3>
                        <p className="text-gray-600 mb-4">
                            A special conference rate of $169/night is available for attendees.
                            This rate is available until May 15, 2025.
                        </p>
                        <a
                            href="https://booking-link-here.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-900 font-medium hover:text-gray-600"
                        >
                            Book your room
                        </a>
                    </div>
                    <p className="text-sm text-gray-500">
                        Note: Rooms at the conference rate are limited and available on a first-come,
                        first-served basis. Early booking is recommended.
                    </p>
                </section>
            </div>
        </div>
    )
} 