export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-semibold text-gray-900 text-center">
                        Workshop Presentations
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

               {/* Presentations */}
                <section className="mb-12">
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
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Introduction.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 2.2MB)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Review of the Status of SuperDARN in 2025</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Status_Review.pdf"
                                target="blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 4.1MB)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td>Scheduling Working Group Report</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Sterne, K.T.</td>
                            <td>Data Analysis Working Group Report</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/DAWG_Report_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf
                                </strong></a> (size 109KB)</td>
                        </tr>
                        <tr>
                            <td>Fuli, M.</td>
                            <td>Data Distribution Working Group Report</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/SuperDARN%20worksop%20DDWG%20report.mp4"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.mp4 </strong></a> (size 20MB)</td>
                        </tr>
                        <tr>
                            <td>Billet, D.</td>
                            <td>Data Visualization Working Group Report</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/dvwg-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 1.1MB)</td>
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
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Refractive_Index.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 3.3MB)</td>
                        </tr>
                        <tr>
                            <td>Thomas, E.G.</td>
                            <td className="align-text-top">On the need for a new working group to consistently and transparently handle external data rquests</td>
                            <td>.pdf (size TBD)</td>
                        </tr>
                        <tr>
                            <td>Galeschuk, D.</td>
                            <td>On the acceleration of pyDARNio DMAP operations using Rust</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/On_the_acceleration_of_pyDARNio_DMAP_operations_using_Rust.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 1.1MB)</td>
                        </tr>
                        <tr>
                            <td>Ponomarenko, P.</td>
                            <td>Utilising elevation angle for improved SuperDARN velocity and geolocation estimates</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Ponomarenko_refractive_index_Monday.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 1.4MB)</td>
                        </tr>
                        <tr>
                            <td>Kolkman, T.</td>
                            <td>Improved Receive Path Amplification Circuitry</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Kolkman_rxpath_design_final.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 4.0MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Monday 3:45pm-5:15pm</td>
                            <td>Technical Developments & Operations</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Ponomarenko, P.</td>
                            <td>Determination of Heppner-Maynard boundary: ongoing problems and potential solutions</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Ponomarenko_HMB_Monday.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 1.4MB)</td>
                        </tr>
                        <tr>
                            <td>Ruohoniemi, J.M.</td>
                            <td>Enhanced operations at Blackstone with USRP-based electronics</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Monday/Enhanced_ops_at_Blackstone_with_USRP-based_electronics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 1.9MB)</td>
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
                            <td>Geomagnetic Storms & Modeling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Merkin, V.G.</td>
                            <td><span className="font-semibold">Invited talk:</span> Understanding stormtime geospace as a complex system: Recent progress from the Center for Geospace Storms</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SuperDARN-June2025_slava.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 6.8MB)</td>
                        </tr>
                        <tr>
                            <td>Sibeck, D.G.</td>
                            <td>Dynamics of the Subsolar Megnetosheath</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/Sibeck_SuperDARN_Presentation.pdf"
                                target="_blank"
                                rel="noopener noreferr"><strong> .pdf  </strong></a> (size 479KB)</td>
                        </tr>
                        <tr>
                            <td>Foster, J.C.</td>
                            <td>Multi-instrument Observations of Stormtime Mid-Latitude Geospace Phenomena</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SuperDARN2025_Foster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.3MB)</td>
                        </tr>
                        <tr>
                            <td>Kunduri, B.S.R.</td>
                            <td>An examination of HF radar observations during a super geomagnetic storm</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/May11_storm_SD.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.9MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 11:00am - Noon</td>
                            <td>Geomagnetic Storms & Modeling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lin, D.</td>
                            <td>MAGE simulation of the effects of subauroral polarization streams (SAPS) on the global thermosphere and ionosphere during geomagnetic storms</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SuperDARN-SAPS-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 4.7MB)</td>
                        </tr>
                        <tr>
                            <td>Zhang, J.J.</td>
                            <td>Observation of Subauroral Polarization Streams Cutoff during Super Geomagnetic Storm</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/Observation_of_Subauroral_Polarization_Streams-jjzhang.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 7.5MB)</td>
                        </tr>
                        <tr>
                            <td>Zou, Y.</td>
                            <td>Hemispheric symmetry and asymmetry of poleward moving radar auroral forms (PMRAFs) and associated polar cap patches during a geomagnetic storm</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SuperDARN2025_YZ2.pdf"
                                target="_blank"
                                rel="noopener noreferer"><strong> .pdf </strong></a> (size 2.1MB)</td>
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
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SD2025_Remington.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.9MB)</td>
                        </tr>
                        <tr>
                            <td>Billett, D.</td>
                            <td>New observations and insights from four-second resolution convection maps</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/fbi_billett.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 7.7MB)</td>
                        </tr>
                        <tr>
                            <td>Galeschuk, D.</td>
                            <td>Borealis Update - v1.0 New Capabilities and Enhancements</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/dgaleschuk_superdarn_boeralis_cfs_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 5.9MB)</td>
                        </tr>
                        <tr>
                            <td>Nishimura, Y.</td>
                            <td>High-Time Resolution Ionospheric Convection Associated with Nightside Auroral Intensifications</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/SuperDARN_Nishimura.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.5MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Tuesday 3:45pm - 5:15pm</td>
                            <td>MI Coupling</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lyons, L.</td>
                            <td><span className="font-semibold">Invited talk:</span> SuperDARN: Observations Demonstrating Meso-scale Coupling from the Polar Cap to Major Auroral Oval Disturbances</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/Lyons_SuperDARN_2025short.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 11MB)</td>
                        </tr>
                        <tr>
                            <td>Bristow, W.A.</td>
                            <td>Convection Velocity Covariance Estimated from SuperDARN Observation</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/VelocityCovariance.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 12MB)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Developing an Empirical Model of Auroral Boundaries</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/2025_AGB_SuperDARN_Bounds.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 12MB)</td>
                        </tr>
                        <tr>
                            <td>Lin, D.</td>
                            <td>Magnetospheric Inputs of Poynting Flux to and Its Effects in the Ionosphere</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/20250603P_SuperDARN_Workshop_PF.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.0MB)</td>
                        </tr>
                        <tr>
                            <td>Rabiu, A.B.</td>
                            <td>VT-Nigerian Bowen Equatorial Aeronomy Radar (VT-NigerBEAR)</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Tuesday/Nigerbear_June_2025_Roanoke.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 1.8MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Wednesday 9:00am - 10:30am</td>
                            <td>TIDs & Neutral Atmosphere</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Frissell, N.A.</td>
                            <td><span className="font-semibold">Invited talk:</span> MSTID Response to Weak Polar Vortex Events as Obesrved by SuperDARN Radars in the Nothern Southern Hemispheres</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/20250603_Frissell_SuperDARN_Workshop_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 11MB)</td>
                        </tr>
                        <tr>
                            <td>Erickson, P.J.</td>
                            <td>Recent Studies of Multiscale Cold Plasma Dynamics and TIDs at Subauroral Latitudes</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/Multiscale_Subauroral_SD2025_Erickson.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 15MB)</td>
                        </tr>
                        <tr>
                            <td>Wang, W.</td>
                            <td>Study of Continental-scale Poleward Medium-Scale Traveling Ionospheric Disturbance Observed at Middle Latitudes</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/Wei_wang.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 4.1MB)</td>
                        </tr>
                        <tr>
                            <td>Shi, X.</td>
                            <td>Multi-scale Traveling Ionospheric Disturbances Generated by High-Latitude Ultra-Low-Frequency Waves in Numerical Simulations</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/SD_ULF_TID_23May_simulation_XS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.6MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Wednesday 11:00am - Noon</td>
                            <td>Multi-Instrument & Collaboration</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Gallardo-Lacourt, B.</td>
                            <td><span className="font-semibold">Invited talk:</span> Exploring the prospects for a vivid collaborative science between the GDC mission and the Ground-Based community</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/BGL_SuperDARN_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 5.0MB)</td>
                        </tr>
                        <tr>
                            <td>Hussey, G.C.</td>
                            <td>Phase and Amplitude Calibration of ICEBEAR and SuperDARN Receiver Arrays Using Aircraft Echoes</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/SuperDARN2025-icebear-superdarn-airplanes.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.1MB)</td>
                        </tr>
                        <tr>
                            <td>Nishitani, N.</td>
                            <td>Initial results of the Fall 2023 SuperDARN-Arase conjunction campaign: subauroral polarization streams wave structure (SAPSWS)</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Wednesday/Hori_SD_ERG_2023_campaign_SD2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.0MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 9:00am - 10:30am</td>
                            <td>Ionospheric Physics and Irregularities</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Erickson, P.J.</td>
                            <td><span className="font-semibold">Invited talk:</span> Incoherent scatter radar: An invaluable tool in the field of space and plasma physics</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/IS_Radar_ISSI_SD2025_Erickson.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.2MB)</td>
                        </tr>
                        <tr>
                            <td>Nishitani, N.</td>
                            <td>Statistics of dusk scatter echoes including ULF waves</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/caterpillar_statistics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.0MB)</td>
                        </tr>
                        <tr>
                            <td>Emmons, D.J.</td>
                            <td>GNSS Radio Occultation Measurements of Sporadic-E Layers</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Emmons_GPSRO_SuperDARN_Jun2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.9MB)</td>
                        </tr>
                        <tr>
                            <td>Anderson, T.S.</td>
                            <td>Artificial field-aligned irregularity generation at HAARP and upcoming bistatic coherent imaging campaign</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Anderson_SuperDARN2025_LA-UR-25-25250.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.3MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 11:00am - Noon</td>
                            <td>Ionospheric Physics and Irregularities</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Zhang, J.J.</td>
                            <td>Auroral Activity Observed from Unusual Latitudes in China and Its Underlying Significance</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Auroral_Activity_Observed_from_Unusual_Latitudes_in_China_and_Its_Underlying_Significance.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 6.1MB)</td>
                        </tr>
                        <tr>
                            <td>Perry, G.W.</td>
                            <td>Remote sensing of the ionospheric impact of the April 2024 total solar eclipse</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SuperDARN_2025_Perry.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 66MB)</td>
                        </tr>
                        <tr>
                            <td>Feng, J.Y.</td>
                            <td>Rapid Lower Ionospheric Responses to the April 2023 Geomagnetic Storm as Observed by VLF Transmitter Signals</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Presentation_Jingyuan_Feng.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.8MB)</td>
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
                            <td>SuperDARN HOP radars observation of Ionospheric convection associated with low-latitude auroras</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/pre2506b_sd_website.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 6.3MB)</td>
                        </tr>
                        <tr>
                            <td>Beser, K.</td>
                            <td>Automatic detection of polar cap patches in SuperDARN observations</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Beser_SuperDARN-2025.pptx.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 4.3MB)</td>
                        </tr>
                        <tr>
                            <td>Troyer, R.</td>
                            <td>Using oblique, bistatic receptions of SuperDARN signals to measure HF propagation in the auroral and polar cap regions</td>
                            <td><a
                                 href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Troyer_superdarn-2025-meeting-presentation-updated.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.9MB)</td>
                        </tr>
                        <tr className="h-16 text-xl font-semibold">
                            <td>Thursday 3:45pm - 5:05pm</td>
                            <td>Poster Session</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Billett, D.</td>
                            <td>The 2022 Starlink Geomagnetic Storms: Global Thermospheric Response to a High-Latitude Ionospheric Driver</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/billett_poster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 4.3MB)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Automated identification of Auroral Luminosity Boundaries using pyIntensityFeatures</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/IntFeatPoster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 3.6MB)</td>
                        </tr>
                        <tr>
                            <td>Burrell, A.G.</td>
                            <td>Equitable Letters for Space and Physics</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/elsp_poster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 392KB)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Using vorticity to characterise meso-scale ionospheric flow variations</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SD2025_Chisham.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.2MB)</td>
                        </tr>
                        <tr>
                            <td>Conti, C.M.</td>
                            <td>Preliminary Analysis of the Effect of Earth's Magnetic Field on HF Propagation</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Conti_Poster_Final.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 710KB)</td>
                        </tr>
                        <tr>
                            <td>Frissell, N.A.</td>
                            <td>First Observations Linking Large-Scale Traveling Ionospheric Disturbances to Polar Vortex Strength</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SuperDARN_2025_Frissell_LSTID_MSTID_PV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.9MB)</td>
                        </tr>
                        <tr>
                            <td>Haralambous, H.</td>
                            <td>Monitoring plasma drifts over Europe using Digisondes</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/2025-SuperDARN_2025_VT_H.Haralambous.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong>.pdf</strong></a> (size 261KB)</td>
                        </tr>
                        <tr>
                            <td>Pitzl, A.P.</td>
                            <td>Analysis of Phase Code Modulation on Optimizing Data Resolution at the Blackstone SuperDARN Site</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/pitzl_sd2025_FINAL.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.3MB)</td>
                        </tr>
                        <tr>
                            <td>Romanek, V.</td>
                            <td>An examination of the impact of Strong Thermal Emission Velocity Enhancement (STEVE) on mid-latitude ionosphere</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SuperDARN_Workshop_Poster_Romanek.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 1.3MB)</td>
                        </tr>
                        <tr>
                            <td>Ruohoniemi, J.M.</td>
                            <td>The Blacksotne SuperDARN HF Radar</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Ruohoniemi_Blackstone.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 1.7MB)</td>
                        </tr>
                        <tr>
                            <td>Sanchez, D.</td>
                            <td>Climatology of Large-Scale Traveling Ionospheric Disturbances Observed with 14 MHz Amateur Radio Using a Novel Automated Detection Technique</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Sanchez_Diego_SuperDARN_2025_Poster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 2.3MB)</td>
                        </tr>
                        <tr>
                            <td>Sengupta, S.</td>
                            <td>Probabilistic Regional Forecasting of Geomagnetically Induced Currents (GICs) using a Refinded Machine Learning-Based Classifier</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Sengupta_Poster_SuperDARN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 623KB)</td>
                        </tr>
                        <tr>
                            <td>Shi, X.</td>
                            <td>Solar flare-induced gradient drift instability observed by SuperDARN HF radars</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/Chakraborty_Shibaji_SuperDARN_Workshop_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 1.2MB)</td>
                        </tr>
                        <tr>
                            <td>Sterne, K.T.</td>
                            <td>Remote Transmitter Monitoring Project</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/S25-25_Poster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 927KB)</td>
                        </tr>
                        <tr>
                            <td>Wanner, T.</td>
                            <td>A SuperDARN-Based Validation method for the REMIX Ionospheric Model by Asessing ExB Convection Patterns</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SuperMAGE_poster_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 1.6MB)</td>
                        </tr>
                        <tr>
                            <td>van Wyk, D.J.</td>
                            <td>Enhanced Capabilities of SANSA's SuperDARN Radar: Dual-Channel, Interferometry, and Expanded Space Weather Observations</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Thursday/SANSA_SuperDARN_2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 5.6MB)</td>
                        </tr>



                        <tr className="h-16 text-xl font-semibold">
                            <td>Friday 9:00am - 10:40am</td>
                            <td>Open Session, Planning & Summary</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Greenwald, R.</td>
                            <td>History of SuperDARN (pre-SuperDARN days)</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Friday/History_of_SuperDARN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 6.5MB)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Ray & Mike at Goose Bay</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Friday/Slides_Ray_BAS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 978KB)</td>
                        </tr>
                        <tr>
                            <td>Chisham, G.</td>
                            <td>Closing summary by the Chair of the SuperDARN PI Executive Council</td>
                            <td><a
                                href="http://vt.superdarn.org/share/data/sd2025_workshop/presentations/Friday/Closing_Summary.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><strong> .pdf </strong></a> (size 229KB)</td>
                        </tr>



                        </tbody>
                    </table>


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



            </div>


        </div>
    )
} 
