import { CreditCard, Building2, Check, ReceiptText } from 'lucide-react'

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

                    {/* 5 Day Full Registration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-serif font-semibold mb-4 text-vt-maroon border-b pb-2">
                            5 Day Full Registration
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Early Bird Rate (ends April 4, 2025 23:59 EDT)</span>
                                <span className="font-bold text-vt-maroon text-lg">$500</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Regular Rate (April 5 until May 19, 2025)</span>
                                <span className="font-bold text-vt-maroon text-lg">$600</span>
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
                                <span className="text-gray-700 font-medium">Early Bird Rate (ends April 4, 2025 23:59 EDT)</span>
                                <span className="font-bold text-vt-maroon text-lg">$375</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Regular Rate (April 5 until May 19, 2025)</span>
                                <span className="font-bold text-vt-maroon text-lg">$425</span>
                            </div>
                        </div>
                    </div>

                    {/* Companion Registration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-serif font-semibold mb-4 text-vt-maroon border-b pb-2">
                            Companion Registration*
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">5 Day Rate</span>
                                <span className="font-bold text-vt-maroon text-lg">$250</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">3 Day Rate</span>
                                <span className="font-bold text-vt-maroon text-lg">$175</span>
                            </div>
                        </div>
                    </div>


                    <p className="text-sm text-gray-600 mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                        * Companions not expected to attend scienitific meetings and presentations.
                    </p>
                </section>

                {/* Fee Wavier */}
                <section className="bg-amber-50 rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Fee Waiver</h2>
                     <div className="text-gray-600 space-y-4">
                        <p>
                        To encourage participation of studens and early-career researchers ( less than 5 years from PhD), limited funds are
                        available to waive the cost of registration (Early bird rates: $500 for full, $375 for mid-week). The costs
                        of traveling to the meeting and accommodation remain the responsibility of the attendee. Please fill 
                        out <a target="_blank" rel="noopener noreferrer"
                        href="https://forms.office.com/r/NwW6yp5jAL"> the form at https:forms.office.com/r/NwW6yp5jAL</a>.</p>
                        <p>
                        Note that an applicant needs to commit to making a presentation (oral or poster is TBD). The form will require 
                        a working title for the presentation.  Optionally, the applicant can also submit a draft abstract and a 
                        list of authors with affiliations.</p>
                        <p>
                        Review of the applications will begin <strong>March 1</strong> and decisions regarding support will begin to 
                        be made on <strong>March 15</strong> (note new dates).</p>
                        <p>
                        Questions may be directed to the Organizing Committee at sd-2025-g@vt.edu.</p>
                    </div>
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
                            <ReceiptText className="w-5 h-5 text-vt-maroon" />
                            <span>eCheck</span>
                        </div>
                    </div>
                </section>

                {/* Full 5-day Registration Includes */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Full (5-day) Registration Includes</h2>
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
                            Wednesday excursion and reception with dinner
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Thursday banquet
                        </li>
                    </ul>
                </section>


                {/* 3-day Registration Includes */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Mid-week (3-day) Registration Includes</h2>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Sunday night welcome reception (if registered for Monday)
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Breakfast and lunch for dates of registration
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Wednesday excursion and reception with dinner
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-vt-green" />
                            Thursday banquet (if registered for Thursday)
                        </li>
                    </ul>
                </section>


                {/* Registration Guide */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Registration Process Guide</h2>
                    <div>
                    <p className="text-grey-700">To assist with the registration process, please see <a
                        href="http://vt.superdarn.org/share/data/sd2025_workshop/Registration_Guide_20250317.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><strong> this guide.</strong></a>
                        </p>
                    </div>
                </section>

                {/* Registration Button */}
                <div className="text-center">
                    <div className="mt-8">
                        <a
                            href="https://register.cpe.vt.edu/search/publicCourseSearchDetails.do?method=load&courseId=7941341"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-vt-maroon text-white px-8 py-3 rounded hover:bg-[#FF7A1A] transition-colors text-lg"
                        >
                            Register Here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 
