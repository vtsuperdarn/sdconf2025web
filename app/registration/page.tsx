import { CreditCard, Building2, FileCheck, Check } from 'lucide-react'

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-900 text-center">
                        Registration
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Registration Fees */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Registration Fees</h2>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b">
                            <div>
                                <h3 className="font-serif font-semibold">Early Bird Registration</h3>
                                <p className="text-gray-600">Until April 1, 2025</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">$500</p>
                                <p className="text-gray-600">Regular</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b">
                            <div>
                                <h3 className="font-serif font-semibold">Student Registration</h3>
                                <p className="text-gray-600">Until April 1, 2025</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">$300</p>
                                <p className="text-gray-600">Student</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-serif font-semibold">Regular Registration</h3>
                                <p className="text-gray-600">After April 1, 2025</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">$600</p>
                                <p className="text-gray-600">Regular</p>
                            </div>
                        </div>
                    </div>

                    {/* Registration Button */}
                    <div className="mt-8">
                        <button
                            disabled
                            className="w-full bg-vt-gray-medium text-white px-8 py-3 rounded text-lg cursor-not-allowed"
                        >
                            Registration Opens December 15, 2024
                        </button>
                    </div>
                </section>

                {/* Payment Methods */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Payment Methods</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <CreditCard className="w-5 h-5 text-vt-maroon" />
                            <span>Credit Card</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <Building2 className="w-5 h-5 text-vt-maroon" />
                            <span>Wire Transfer</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                            <FileCheck className="w-5 h-5 text-vt-maroon" />
                            <span>Electronic Check</span>
                        </div>
                    </div>
                </section>

                {/* Registration Includes */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Registration Includes</h2>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Sunday night welcome reception
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Breakfast and lunch Monday through Friday
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Wednesday dinner
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Thursday banquet
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
} 