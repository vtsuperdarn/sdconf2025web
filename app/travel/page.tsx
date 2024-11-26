import { Plane, Train, Car, Mountain, Coffee, Landmark, ShoppingBag, UtensilsCrossed } from 'lucide-react'

export default function TravelPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Explore Roanoke
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 text-center">
                        Discover Virginia's Blue Ridge Mountains
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Getting Here */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Getting Here
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Plane className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">By Air</h3>
                            </div>
                            <p className="text-gray-600">
                                Roanoke-Blacksburg Regional Airport (ROA) is just 15 minutes from the venue.
                                Alternative airports include Charlottesville (CHO) and Dulles International (IAD).
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Train className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">By Train</h3>
                            </div>
                            <p className="text-gray-600">
                                Amtrak provides daily service to Roanoke from Washington DC and other major cities
                                along the Northeast corridor.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Car className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">By Car</h3>
                            </div>
                            <p className="text-gray-600">
                                Roanoke is easily accessible via I-81 and US-460. The venue offers
                                complimentary parking for hotel guests.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Attractions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Things to Do
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Mountain className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">Outdoor Activities</h3>
                            </div>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Blue Ridge Parkway scenic drives</li>
                                <li>• McAfee Knob hiking trail</li>
                                <li>• Carvins Cove Natural Reserve</li>
                                <li>• Mill Mountain Star & Park</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Landmark className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">Arts & Culture</h3>
                            </div>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Taubman Museum of Art</li>
                                <li>• Virginia Museum of Transportation</li>
                                <li>• Science Museum of Western Virginia</li>
                                <li>• O. Winston Link Museum</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <UtensilsCrossed className="w-5 h-5 text-gray-600" />
                                <h3 className="font-serif font-semibold">Food & Drink</h3>
                            </div>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Historic Roanoke City Market</li>
                                <li>• Local craft breweries</li>
                                <li>• Downtown restaurant district</li>
                                <li>• Black Dog Salvage</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Local Tips */}
                <section>
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Local Tips
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <Coffee className="w-5 h-5 mt-1 text-gray-400" />
                                <p>Downtown Roanoke is very walkable with numerous cafes, restaurants, and shops within easy reach of the hotel.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShoppingBag className="w-5 h-5 mt-1 text-gray-400" />
                                <p>Visit the Historic Roanoke City Market, one of the oldest continuously operating farmers' markets in Virginia.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mountain className="w-5 h-5 mt-1 text-gray-400" />
                                <p>The iconic Mill Mountain Star is just a short drive away and offers panoramic views of the Roanoke Valley.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
} 