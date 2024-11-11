import { CreditCard, Building2, FileCheck, Calendar, Check } from 'lucide-react'

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-semibold text-gray-900 text-center">
                        Registration
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Registration Status */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-4">Registration Status</h2>
                    <p className="text-lg text-gray-600">
                        Registration will open sometime in December 2024 or January 2025.
                        Please check back for updates or watch e-mail announcements for when registration opens.
                    </p>
                </section>

                {/* Registration Rates */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Registration Rates</h2>
                    <div className="space-y-4 text-lg">
                        <p>• Students and early career attendees: <span className="font-semibold">TBD</span></p>
                        <p>• Postdocs: <span className="font-semibold">TBD</span></p>
                        <p>• Regular registration: <span className="font-semibold">TBD</span></p>
                    </div>
                </section>

                {/* Payment Methods */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Payment Methods</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <CreditCard className="w-5 h-5" />
                            <span>Credit Card</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <Building2 className="w-5 h-5" />
                            <span>Wire Transfer</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <FileCheck className="w-5 h-5" />
                            <span>Electronic Check</span>
                        </div>
                    </div>
                </section>

                {/* Registration Includes */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Registration Includes</h2>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Sunday night welcome reception
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Breakfast and lunch Monday through Friday
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Wednesday dinner
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Thursday banquet
                        </li>
                    </ul>
                </section>

                {/* Additional Options */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Additional Options</h2>
                    <ul className="space-y-3 text-lg text-gray-600">
                        <li>• Companion ticket (includes meals, excursion and banquet, excluding presentations)</li>
                        <li>• Additional options TBD</li>
                    </ul>
                </section>
            </div>
        </div>
    )
} 