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
                        The detailed schedule is now <a
                        href="http://vt.superdarn.org/share/data/sd2025_workshop/SD2025_program.pdf"
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

               {/* Presentations */}
                <section className="mb-12">
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                        Presentations
                    </h1>

                    <table className="w-full">
                        <thead>
                        <tr>
                            <th className="text-left text-xl w-1/4">Presenting Author</th>
                            <th className="text-left text-xl w-1/2">Title</th>
                            <th className="text-left text-xl w-1/4">Presentation</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr className="h-16 text-xl">
                            <td className="font-semibold">Monday 9:00 - 10:30am</td>
                            <td className="font-semibold">Welcome and Reports</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Introduction by the Chair of the SuperDARN PI Executive Council</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Review of the Status of SuperDARN in 2025</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td>Schedluing Working Group Report</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sterne, K.T.</td>
                            <td>Data Analysis Working Group Report</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Fuli, M.</td>
                            <td>Data Distribution Working Group Report</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Billet, D.</td>
                            <td>Data Visualization Working Group Report</td>
                            <td>.pdf (size TBD)</td>
                        </tr>

                        <tr className="h-16 text-xl">
                            <td className="font-semibold">Monday 11:00am - Noon</td>
                            <td className="font-semibold">In Memoriam: Dieter Andre and Kathryn McWilliams</td>
                        </tr>


                        <tr className="h-16 text-xl font-semibold">
                            <td>Monday 1:30 - 3:15pm</td>
                            <td>Technical Developments & Operations</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>A proposal for a SUperDARN refractive index task force</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td className="align-text-top">On the need for a new working group to consistently and transparently handle external data rquests</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Galeschuk, D.</td>
                            <td>On the acceleration of pyDARNio DMAP operations using Rust</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Ponomarenko, P.</td>
                            <td>Utilising elevation angle for improved SuperDARN velocity and geolocation estimates</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Kolkman, T.</td>
                            <td>Improved Receive Path Amplification Circuitry</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Monday 3:45pm-5:15pm</td>
                            <td>Technical Developments & Operations</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Ponomarenko, P.</td>
                            <td>Determination of Heppner-Maynard boundary: ongoing problems and potential solutions</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Ruohoniemi, J.M.</td>
                            <td>Enhanced operations at Blackston with USRP-based electronics</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td>Conversion of Iceland radars to USRP-based electronics and first results</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>All</td>
                            <td>Open/Discussion</td>
                            <td></td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 9:00am - 10:30am</td>
                            <td>Geomagnetic Storsm & Modeling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Merkin, V.G.</td>
                            <td><span className="font-semibold">Invited talk:</span> Understanding stormtime geospace as a complex system: Recent progress from the Center for Geospace Storms</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sibeck, D.G.</td>
                            <td>Dynamics of the Subsolar Megnetosheath</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Foster, J.C.</td>
                            <td>Multi-instrument Observations of Stormtime Mid-Latitude Geospace Phenomena</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Kunduri, B.S.R.</td>
                            <td>An examination of HF radar observations during a super geomagnetic storm</td>
                            <td>.pdf (size TBD)</td>
                        </tr>


                        </tbody>
                    </table>


                </section>


            </div>


        </div>
    )
} 
