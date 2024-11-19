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

    // Function to close menu
    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" onClick={closeMenu} className="text-xl font-serif font-semibold text-gray-900">
                            SuperDARN 2025
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-600 hover:text-gray-900"
                                    >
                                        {item.label}
                                        <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900"
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

            {/* Mobile menu */}
            <div className={cn(
                "md:hidden",
                isOpen ? "block" : "hidden"
            )}>
                <div className="pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <div key={item.href} className="px-4">
                            {item.external ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="inline-flex items-center py-2 text-gray-600 hover:text-gray-900"
                                >
                                    {item.label}
                                    <ExternalLink className="ml-1 w-4 h-4" />
                                </a>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block py-2 text-gray-600 hover:text-gray-900"
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