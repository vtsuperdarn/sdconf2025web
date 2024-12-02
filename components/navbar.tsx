"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
    { href: '/venue', label: 'Venue & Lodging', external: false },
    { href: '/registration', label: 'Register', external: false },
    { href: '/abstract', label: 'Submit Abstract', external: false },
    { href: '/participants', label: 'Participants', external: false },
    { href: '/travel', label: 'Travel', external: false }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

    // Logo component to avoid repetition
    const LogoSection = () => (
        <div className="flex items-center space-x-8 px-4">
            <Image
                src="/vt-seal-white.png"
                alt="Virginia Tech Seal"
                width={48}
                height={48}
                className="h-12 w-auto"
                loading="eager"
                quality={100}
            />
            <Image
                src="/nsf-logo.png"
                alt="NSF Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                loading="eager"
                quality={100}
            />
        </div>
    )

    return (
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Desktop Left Logo */}
                    <div className="flex items-center">
                        <div className="mr-4 hidden md:block">
                            <Image
                                src="/vt-seal-white.png"
                                alt="Virginia Tech Seal"
                                width={48}
                                height={48}
                                className="h-12 w-auto"
                                loading="eager"
                                quality={100}
                            />
                        </div>
                        <Link href="/" onClick={closeMenu} className="text-xl font-serif font-semibold text-gray-900">
                            SuperDARN 2025
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Right Logo */}
                    <div className="hidden md:flex md:items-center">
                        <Image
                            src="/nsf-logo.png"
                            alt="NSF Logo"
                            width={48}
                            height={48}
                            className="h-12 w-auto ml-4"
                            loading="eager"
                            quality={100}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "md:hidden bg-white border-t",
                isOpen ? "block" : "hidden"
            )}>
                <div className="pt-2 pb-6">
                    {/* Navigation Items */}
                    <div className="space-y-1 px-4">
                        {navItems.map((item) => (
                            <div key={item.href} className="py-2">
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Logos at Bottom */}
                    <div className="border-t">
                        <div className="pt-6">
                            <LogoSection />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
} 