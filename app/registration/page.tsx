import { CreditCard, Building2, FileCheck, Check } from 'lucide-react'

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className=" py-12">
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
                    <h2 className="text-2xl font-serif font-semibold mb-8">Registration Options</h2>

                    {/* 1 Day Registration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-serif font-semibold mb-4 text-vt-maroon border-b pb-2">
                            1 Day Registration
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Regular Rate</span>
                                <span className="font-bold text-vt-maroon text-lg">$???</span>
                            </div>
                        </div>
                    </div>

                    {/* 3 Day Registration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-serif font-semibold mb-4 text-vt-maroon border-b pb-2">
                            3 Day Registration
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Regular Rate</span>
                                <span className="font-bold text-vt-maroon text-lg">$???</span>
                            </div>
                        </div>
                    </div>

                    {/* 5 Day Full Registration */}
                    <div className="mb-8">
                        <h3 className="text-xl font-serif font-semibold mb-4 text-vt-maroon border-b pb-2">
                            5 Day Full Registration
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                                <h4 className="font-semibold mb-4 text-gray-800">Early Bird (Until April 1, 2025)</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">Regular</span>
                                        <span className="font-bold text-vt-maroon text-lg">$???</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-700 font-medium">Student</span>
                                        <span className="font-bold text-vt-maroon text-lg">$???</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                                <h4 className="font-semibold mb-4 text-gray-800">Regular Rate (After April 1, 2025)</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">Regular</span>
                                        <span className="font-bold text-vt-maroon text-lg">$???</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-700 font-medium">Student</span>
                                        <span className="font-bold text-vt-maroon text-lg">$???</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                        * Pricing information will be announced soon. Student rates require valid student ID.
                    </p>
                </section>

                {/* Payment Methods */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Payment Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
