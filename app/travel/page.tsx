import { Plane, Train, Car, Mountain, Coffee, Landmark, ShoppingBag, UtensilsCrossed, Bus, FileText } from 'lucide-react'
import Image from 'next/image'

export default function TravelPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/roanoke_night.png"
                    alt="Roanoke at Night"
                    fill
                    className="object-cover object-[center_35%]"
                    loading="eager"
                    priority
                    quality={100}
                    sizes="100vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center mt-[-50px]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white text-center drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
                        Explore Roanoke
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-white text-center drop-shadow-lg">
                        Discover Virginia's Blue Ridge Mountains
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Visa Information */}
                <section id="visa" className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Visa Information
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <FileText className="w-5 h-5 mt-1 text-vt-maroon" />
                            <div>
                                <h3 className="font-serif font-semibold mb-2">Visa Requirements</h3>
                                <p className="text-gray-600">
                                    International participants may need to obtain a visa to enter the United States.
                                    Please check the <a href="https://travel.state.gov/content/travel/en/us-visas.html"
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-vt-maroon hover:text-vt-burgundy">U.S. Department of State website</a> for visa requirements based on your country of origin.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 mt-1 text-vt-maroon" />
                            <div>
                                <h3 className="font-serif font-semibold mb-2">Invitation Letters</h3>
                                <p className="text-gray-600">
                                    If you need an invitation letter for your visa application, please register for the conference first.
                                    After registration, you can request an invitation letter through your registration confirmation email.
                                    Allow 8-12 weeks for visa processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Here */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Getting Here
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/clt-airport.png"
                                    alt="Charlotte Douglas International Airport"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Plane className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-serif font-semibold">By Air</h3>
                                </div>
                                <p className="text-gray-600">
				    The Roanoke-Blacksburg Regional Airport (ROA) is the closest to venue with a free shuttle to Hotel 
				    Roanoke. Washington-Dulles (IAD) or Washington-Reagan (DCA) are the closest major airports, but require additional modes of travel (rail, car rental, etc.)
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/amtrak-station.png"
                                    alt="Roanoke Amtrak Station"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Train className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-serif font-semibold">By Train</h3>
                                </div>
                                <p className="text-gray-600">
                                    <a href="https://www.amtrak.com" target="_blank" rel="noopener noreferrer"
                                    className="text-vt-maroon hover:text-vt-burgundy">Amtrak</a> 
                                    provides daily service to Roanoke (RNK) from Washington DC's Union Station (WAS) and other major cities
                                    along the Northeast corridor. Washington DC's Union Station connects to the Washington Dulles airport
                                    through multiple service lines/tracks of the <a href="https://www.wmata.com/schedules/maps/" 
                                    target="_blank" rel="noopener noreferrer" className="text-vt-maroon hover:text-vt-burgundy">
                                    Washington Metropolitian Area Transit Authority</a> (commonly known as the Metro).
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/downtown-roanoke.png"
                                    alt="Downtown Roanoke"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Car className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-serif font-semibold">By Car</h3>
                                </div>
                                <p className="text-gray-600">
                                    Roanoke is easily accessible via Interstate 81 (I-81) and US-460. The Hotel Roanoke provides:
                                </p>
                                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                                    <li>On-site parking for hotel guests (per day):</li>
                                    <li>Self-parking overnight: $15</li>
                                    <li>Valet Parking: $21</li>
                                    <li>Convenient downtown location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Transportation */}
                <section className="mb-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Local Transportation
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <Bus className="w-5 h-5 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-serif font-semibold mb-2">Hotel Shuttle Service</h3>
                                    <p className="text-gray-600">
                                        The Hotel Roanoke provides complimentary shuttle service:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                                        <li>Airport pickup and drop-off (reservation required)</li>
                                        <li>Downtown Roanoke shuttle service</li>
                                        <li>Operating hours: 7:00 AM - 10:30 PM daily</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Car className="w-5 h-5 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-serif font-semibold mb-2">Downtown Access</h3>
                                    <p className="text-gray-600">
                                        Easy access to downtown Roanoke with complimentary hotel shuttle service.
                                        Walking distance to many local attractions and dining options.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
} 
