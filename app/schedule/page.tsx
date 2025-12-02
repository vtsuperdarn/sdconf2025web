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
                            <td>A proposal for a SuperDARN refractive index task force</td>
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
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 11:00am - Noon</td>
                            <td>Geomagnetic Storms & Modeling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lin, D.</td>
                            <td>MAGE simulation of the effects of subauroral polarization streams (SAPS) on the global thermosphere and ionosphere during geomagnetic storms</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Zhang, J.J.</td>
                            <td>Observation of Subauroral Polarization Streams Cutoff during Super Geomagnetic Storm</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Zou, Y.</td>
                            <td>Hemispheric symmetry and asymmetry of poleward moving radar auroral forms (PMRAFs) and associated polar cap patches during a geomagnetic storm</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 1:30pm - 3:15pm</td>
                            <td>Convection (Kathryn McWilliams Session)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Yeoman, T.</td>
                            <td>Overview of Kathryn's work on convection</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Hussey, G.C.</td>
                            <td>On the improvement of simultaneous full field-of-view operations</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Billett, D.</td>
                            <td>New observations and insights from four-second resolution convection maps</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Galeschuk, D.</td>
                            <td>Boeralis Update - v1.0 New Capabilities and Enhancements</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Nishimura, Y.</td>
                            <td>High-Time Resolution Ionospheric Convection Associated with Nightside Auroral Intensifications</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 3:45pm - 5:15pm</td>
                            <td>MI Coupling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lyons, L.</td>
                            <td><span className="font-semibold">Invited talk:</span> SuperDARN: Observations Demonstrating Meso-scale Coupling from the Polar Cap to Major Auroral Oval Disturbances</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Bristow, W.A.</td>
                            <td>Convection Velocity Covariance Estimated from SuperDARN Observation</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Developing an Empirical Model of Auroral Boundaries</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Lin, D.</td>
                            <td>Magnetospheric Inputs of Poynting Flux to and Its Effects in the Ionosphere</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Rabiu, A.B.</td>
                            <td>VT-Nigerian Bowen Equatorial Aeronomy Radar (VT-NigerBEAR)</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Wednesday 9:00am - 10:30am</td>
                            <td>TIDs & Neutral Atmosphere</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Frissell, N.A.</td>
                            <td><span className="font-semibold">Invited talk:</span> MSTID Response to Weak Polar Vortex Events as Obesrved by SuperDARN Radars in the Nothern Southern Hemispheres</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Erickson, P.J.</td>
                            <td>Recent Studies of Multiscale Cold Plasma Dynamics and TIDs at Subauroral Latitudes</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Wang, W.</td>
                            <td>Study of Continental-scale Poleward Medium-Scale Traveling Ionospheric Disturbance Observed at Middle Latitudes</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Shi, X.</td>
                            <td>Multi-scale Traveling Ionospheric Disturbances Generated by High-Latitude Ultra-Low-Frequency Waves in Numerical Simulations</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Wednesday 11:00am - Noon</td>
                            <td>Multi-Instrument & Collaboration</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Gallardo-Lacourt, B.</td>
                            <td><span className="font-semibold">Invited talk:</span> Exploring the prospects for a vivid collaborative science between the GDC mission and the Ground-Based community</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Hussey, G.C.</td>
                            <td>Phase and Amplitude Calibration of ICEBEAR and SuperDARN Receiver Arrays Using Aircraft Echoes</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Nishitani, N.</td>
                            <td>Initial results of the Fall 2023 SuperDARN-Arase conjunction campaign: subauroral polarization streams wave structure (SAPSWS)</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 9:00am - 10:30am</td>
                            <td>Ionospheric Physics and Irregularities</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Erickson, P.J.</td>
                            <td><span className="font-semibold">Invited talk:"</span> Incoherent scatter radar: An invaluable tool in the field of space and plasma physics</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Nishitani, N.</td>
                            <td>Statistics of dusk scatter echoes including ULF waves</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Emmons, D.J.</td>
                            <td>GNSS Radio Occultation Measurements of Sporadic-E Layers</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Anderson, T.S.</td>
                            <td>Artificial field-aligned irregularity generation at HAARP and upcoming bistatic coherent imaging campaign</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 11:00am - Noon</td>
                            <td>Ionospheric Physics and Irregularities</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Zhang, J.J.</td>
                            <td>Auroral Activity Observed from Unusual Latitudes in China and Its Underlying Significance</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Perry, G.W.</td>
                            <td>Remote sensing of the ionospheric impact fo the April 2024 total solar eclipse</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Feng, J.Y.</td>
                            <td>Rapid Lower Ionospheric Responses to the April 2023 Geomagnetic Storm as Observed by VLF Transmitter Signals</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 1:30pm - 3:15pm</td>
                            <td>Novel Observations & Techniques</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Bailey, S.</td>
                            <td>Space@VT Overview</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td>Multi-frequency sounding experiments with SuperDARN radars: Recent results and future directions</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Nishitani, N.</td>
                            <td>SuperDARN HOP radars observation of Ionospheric convectino associated with low-latitude auroras</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Beser, K.</td>
                            <td>Automatic detection of polar cap patches in SuperDARN observations</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Troyer, R.</td>
                            <td>Using oblique, bistatic receptions of SuperDARN signals to measure HF propagation in the auroral and polar cap regions</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 3:45pm - 5:05pm</td>
                            <td>Poster Session</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Billett, D.</td>
                            <td>The 2022 Starlink Geomagnetic Storms: Global Thermospheric Response to a High-Latitude Ionospheric Driver</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>van Wyk, D.J.</td>
                            <td>Enhanced Capabilities of SANSA's SuperDARN Radar: Dual-Channel, Interferometry, and Expanded Space Weather Observations</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Using vorticity to characterise meso-scale ionospheric flow variations</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Automated identification of Auroral Luminosity Boundaries using pyIntensityFeatures</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Frissell, N.A.</td>
                            <td>First Observations Linking Large-Scale Traveling Ionospheric Disturbances to Polar Vortex Strength</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Equitable Letters for Space and Physics</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Shi, X.</td>
                            <td>Solar flare-induced gradient drift instability observed by SuperDARN HF radars</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Romanek, V.</td>
                            <td>An examination of the impact of Strong Thermal Emission Velocity Enhancement (STEVE) on mid-latitude ionosphere</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sterne, K.T.</td>
                            <td>Remote Transmitter Monitoring Project</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Wanner, T.</td>
                            <td>A SuperDARN-Based Validation method for the REMIX Ionospheric Model by Asessing ExB Convection Patterns</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sengupta, S.</td>
                            <td>Probabilistic Regional Forecasting of Geomagnetically Induced Currents (GICs) using a Refinded Machine Learning-Based Classifier</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Pitzl, A.P.</td>
                            <td>Analysis of Phase Code Modulation on Optimizing Data Resolution at the Blackstone SuperDARN Site</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Conti, C.M.</td>
                            <td>Preliminary Analysis of the Effect of Earth's Magnetic Field on HF Propagation</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Ruohoniemi, J.M.</td>
                            <td>TBD</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sanchez, D.</td>
                            <td>Climatology of Large-Scale Traveling Ionospheric Disturbances Observed with 14 MHz Amateur Radio Using a Novel Automated Detection Technique</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Haralambous, H.</td>
                            <td>Monitoring plasma drifts over Europe using Digisondes</td>
                            <td>.pdf (size TBD)</td>
                        </tr>




                        <tr className="h-16 text-xl font-semibold">
                            <td>Friday 9:00am - 10:40am</td>
                            <td>Open Session, Planning & Summary</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Greenwald, R.</td>
                            <td>History of SuperDARN (pre-SuperDARN days)</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>TBD</td>
                            <td>Proposal for future SuperDARN Workshops</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Closing summary by the Chair of the SuperDARN PI Executive Council</td>
                            <td>.pdf (size TBD)</td>
                        </tr>



                        </tbody>
                    </table>


                </section>


            </div>


        </div>
    )
} 
