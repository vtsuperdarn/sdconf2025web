"use client";

import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
    return (
        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center">
            {/* Blue Ridge Mountains Background */}
            <Image
                src="/images/blue-ridge2.png"
                alt="Blue Ridge Mountains"
                fill
                className="object-cover object-[center_35%]"
                loading="eager"
                priority
                quality={100}
                sizes="100vw"
            />

            {/* BKS Radars Background */}
            {/* <Image
                src="/images/bks_radars.png"
                alt="BKS Radars"
                fill
                className="object-cover object-[center_40%]"
                loading="eager"
                priority
                quality={100}
                sizes="100vw"
            /> */}

            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center text-white px-4 mt-[-50px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
                    SuperDARN Workshop 2025
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-2 drop-shadow-lg">
                    June 2-6, 2025
                </p>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-lg">
                    Roanoke, Virginia, USA
                </p>
            </div>
        </div>
    )
} 