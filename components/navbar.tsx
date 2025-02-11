"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const imageLoader = ({ src }: { src: string }) => {
    return `/workshop/images/${src}`
  }

const navItems = [
    { href: '/', label: 'Home', external: false },
    { href: '/venue', label: 'Venue & Lodging', external: false },
    { href: '/registration', label: 'Register', external: false },
    { href: '/abstract', label: 'Submit Abstract', external: false },
    { href: '/participants', label: 'Participants', external: false },
    { href: '/travel', label: 'Travel', external: false },
    { href: '/schedule', label: 'Schedule', external: false }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Desktop Left Logo */}
                    <div className="flex items-center">
                        <div className="mr-4 hidden md:block bg-white p-1 rounded">
                            <a
                                href="http://vt.superdarn.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    loader={imageLoader}
                                    src="vt-logo.png"
                                    alt="Virginia Tech"
                                    width={48}
                                    height={48}
                                    className="h-10 w-auto"
                                    loading="eager"
                                    quality={100}
                                />
                            </a>
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
                        <a
                            href="https://www.nsf.gov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image
                                loader={imageLoader}
                                src="nsf-logo.png"
                                alt="NSF Logo"
                                width={48}
                                height={48}
                                className="h-12 w-auto ml-4"
                                loading="eager"
                                quality={100}
                            />
                        </a>
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
                            <div key={item.href} className="py-3 px-2">
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className="block text-gray-600 hover:text-gray-900 transition-colors py-1"
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

                    {/* Mobile Logos */}
                    <div className="border-t">
                        <div className="flex items-center space-x-8 px-4 pt-6">
                            <a
                                href="http://vt.superdarn.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    loader={imageLoader}
                                    src="vt-logo.png"
                                    alt="Virginia Tech Logo"
                                    width={48}
                                    height={48}
                                    className="h-8 sm:h-10 w-auto"
                                    loading="eager"
                                    quality={100}
                                />
                            </a>
                            <a
                                href="https://www.nsf.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    loader={imageLoader}
                                    src="/images/nsf-logo.png"
                                    alt="NSF Logo"
                                    width={48}
                                    height={48}
                                    className="h-10 w-auto"
                                    loading="eager"
                                    quality={100}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
} 
