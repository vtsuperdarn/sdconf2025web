"use client";
import Image from 'next/image'

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
                        Workshop in Hotel Roanoke
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="workshop001.jpg"
                                alt="Ray Greenwald on early SuperDARN"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="workshop002.jpg"
                                alt="Lunch at Hotel Roanoke"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="workshop003.jpg"
                                alt="Dr. Babatunde Rabiu"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="workshop004.jpg"
                                alt="Presentation room"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                        Excursions to Blacksburg
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="cascades001.jpg"
                                alt="SuperDARNers at Cascades waterfall"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="cascades002.HEIC"
                                alt="SuperDARNers at Cascades waterfall"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="cascades003.HEIC"
                                alt="SuperDARNers at Cascades waterfall"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="smithfield001.jpg"
                                alt="Gareth Chisham researching history"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="smithfield002.jpg"
                                alt="Group at Smithfield Plantation"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane001.jpg"
                                alt="Jo introduces the HokieBird"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane002.HEIC"
                                alt="HokieBird trying out cake"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane003.jpg"
                                alt="Ray Greenwald shakes hands with HokieBird"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane004.jpg"
                                alt="Gareth Chisham with HokieBird"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane005.jpg"
                                alt="HokieBird mingling"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="lane006.jpg"
                                alt="Virginia Tech SuperDARN family with HokieBird"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                        Thursday Night Banquet at Hotel Roanoke with New Standard bluegrass band
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="banquet001.jpg"
                                alt="New Standard plays for banquet"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="banquet002.jpg"
                                alt="Finale of performance at banquet"
                                fill
                                className="object-cover"
                                priority />
                        </div>    

                    </div>

                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                        Visit to the South Piedmont Agricultural Research Extension Campus of Virginia Tech and Blackstone Radar on Friday
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks001.jpg"
                                alt="Learning about tobacco picking eqiupment"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks002.HEIC"
                                alt="Examining dried tobacco leaves"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks003.jpg"
                                alt="SuperDARNers at the Blackstone radar site"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks004.HEIC"
                                alt="Getting a close look at antennas"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks005.HEIC"
                                alt="Mike Ruohoniemi in discussions at the site"
                                fill
                                className="object-cover"
                                priority />
                        </div>    
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                loader={imageLoader}
                                src="bks006.HEIC"
                                alt="Checking out the inside of the building"
                                fill
                                className="object-cover"
                                priority />
                        </div>    


                    </div>

                </section>



            We're working on posting some information that happened during the workshop here...
            </div>
        </div>
    )
} 
