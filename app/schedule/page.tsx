export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-semibold text-gray-900 text-center">
                        Schedule
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

               {/* Detailed Schedule */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Detailed Program
                    </h2>
                    <div className="mt-8 text-lg text-gray-600">
                        An initial draft of the detailed schedule is now <a
                        href="http://vt.superdarn.org/share/data/sd2025_workshop/SD2025_program_draft.pdf"
                        target="_blank"
                        rel="noopener noreferrer" className="text-vt-maroon hover:text-vt-burgundy"><strong>available.</strong></a>
                    </div>
                </section>

               {/* Schedule Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Schedule Overview
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <ul className="space-y-2 text-gray-600">
                           <li>• Sunday: Welcome Reception 4-8pm EDT </li>
                           <li>• Monday: Science sessions morning, afternoon. Working Group meetings in the evening</li>
                           <li>• Tuesday: Science sessions morning, afternoon. Working Group meetings in the evening</li>
                           <li>• Wednesday: Science session morning, excursion to Blacksburg in afternoon, dinner at Lane Stadium </li>
                           <li>• Thursday: Science sessions morning, afternoon with poster session late afternoon.  Banquet at Hotel Roanoke in evening.</li>
                           <li>• Friday: Science session morning with wrap-up by noon. Optional radar trip to Blackstone after lunch, will return to Roanoke later at night.</li>
                        </ul>
                    </div>
                </section>


            </div>
        </div>
    )
} 
