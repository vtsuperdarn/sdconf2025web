"use client"

import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
    { href: '/travel', label: 'Travel & Lodging' },
    {
        href: 'https://book.passkey.com/e/50906985', // Updated with actual Hotel Roanoke booking link
        label: 'Registration',
        external: true
    },
    { href: '/participants', label: 'Participants' },
    { href: '/abstract', label: 'Submit Abstract' },
    { href: '/venue', label: 'Venue' }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const NavLink = ({ item }: { item: typeof navItems[0] }) => {
        if (item.external) {
            return (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-gray-900 transition-colors font-medium inline-flex items-center gap-1"
                >
                    {item.label}
                    <ExternalLink size={14} />
                </a>
            )
        }
        return (
            <Link
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
                {item.label}
            </Link>
        )
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-serif font-semibold text-gray-900">
                                SuperDARN 2025
                            </span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <NavLink key={item.href} item={item} />
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn(
                "md:hidden",
                isOpen ? "block" : "hidden"
            )}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
                    {navItems.map((item) => (
                        <div key={item.href} className="block px-3 py-2">
                            <NavLink item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
} 