export default function ParticipantsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-semibold text-gray-900 text-center">
                        Registered Participants
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Statistics */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="text-4xl font-semibold text-gray-900 mb-2">3</div>
                            <div className="text-lg text-gray-600">Total Participants</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="text-3xl font-semibold text-gray-900 mb-2">1</div>
                            <div className="text-gray-600">Countries</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="text-3xl font-semibold text-gray-900 mb-2">1</div>
                            <div className="text-gray-600">Institutions</div>
                        </div>
                    </div>
                </section>

                {/* Participant List */}
                <section>
                    <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
                        List of Participants
                    </h2>
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                            {/* This would be populated with actual participant data */}
                            <div className="p-4 border rounded-lg">
                                <h3 className="text-xl font-semibold">Dr. Mike Ruohoniemi</h3>
                                <p className="text-lg text-gray-600">Virginia Tech</p>
                                <p className="text-base text-gray-500">United States</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="text-xl font-semibold">Dr. Jo Baker</h3>
                                <p className="text-lg text-gray-600">Virginia Tech</p>
                                <p className="text-base text-gray-500">United States</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="text-xl font-semibold">Dr. Bharat Kundri</h3>
                                <p className="text-lg text-gray-600">Virginia Tech</p>
                                <p className="text-base text-gray-500">United States</p>
                            </div>
                            {/* More participant cards would be added here */}
                        </div>
                    </div>
                </section>

                <p className="mt-8 text-sm text-gray-500 text-center">
                    This list is updated as new participants register.
                </p>
            </div>
        </div>
    )
} 
