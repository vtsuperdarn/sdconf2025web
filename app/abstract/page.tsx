export default function AbstractPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className=" py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Abstract Submission
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Submission Status Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
                    <h2 className="text-xl font-serif font-semibold text-amber-800 mb-2">
                        Abstract Submission Not Yet Open
                    </h2>
                    <p className="text-amber-700">
                        Please check back later.
                    </p>
                </div>

                {/* Guidelines Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Submission Guidelines
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-6">
                            We invite submissions for oral and poster presentations at the SuperDARN 2025 Workshop.
                            All submissions must be in English and follow the format guidelines below.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="font-serif font-semibold mb-4">Key Dates</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Submission Deadline: TBD</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Format Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Format Requirements
                    </h2>
                    <div className="space-y-6 text-gray-600">
                        <p>Abstracts should include:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Title (maximum 150 characters)</li>
                            <li>Author list with affiliations</li>
                            <li>Abstract text (maximum 300 words)</li>
                            <li>Preference for oral or poster presentation</li>
                        </ul>
                    </div>
                </section>

                {/* Topic Areas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Topic Areas
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-2 text-gray-600">
                                <li>• Ionospheric Physics</li>
                                <li>• Space Weather</li>
                                <li>• Magnetosphere Dynamics</li>
                                <li>• Technical Developments</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-2 text-gray-600">
                                <li>• Data Analysis Techniques</li>
                                <li>• Wave Phenomena</li>
                                <li>• Radar Operations</li>
                                <li>• Machine Learning Applications</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        disabled
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded cursor-not-allowed opacity-75 text-lg"
                    >
                        Submit Your Abstract
                    </button>
                    <p className="mt-4 text-sm text-gray-500">
                        Submission system is not yet open.
                    </p>
                </div>
            </div>
        </div>
    )
} 
