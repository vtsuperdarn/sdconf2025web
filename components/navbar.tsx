"use client"

import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
    { href: '/travel', label: 'Travel & Lodging', external: false },
    {
        href: 'https://book.passkey.com/e/50906985',
        label: 'Registration',
        external: true
    },
    { href: '/participants', label: 'Participants', external: false },
    { href: '/abstract', label: 'Submit Abstract', external: false },
    { href: '/venue', label: 'Venue', external: false }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-[#861F41] text-white border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-serif font-semibold text-white">
                                SuperDARN 2025
                            </span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-white/90 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                                    >
                                        {item.label}
                                        <ExternalLink size={14} />
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-lg text-white/90 hover:text-white transition-colors font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    "md:hidden",
                    isOpen ? "block" : "hidden"
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
                    {navItems.map((item) => (
                        <div key={item.href} className="block px-3 py-2">
                            {item.external ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-gray-700 hover:text-gray-900 transition-colors font-medium inline-flex items-center gap-1"
                                >
                                    {item.label}
                                    <ExternalLink size={14} />
                                </a>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-lg text-gray-700 hover:text-gray-900 transition-colors font-medium"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
} 