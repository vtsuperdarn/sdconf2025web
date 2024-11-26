"use client"

import { RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RefreshButton() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleRefresh = async () => {
        setIsLoading(true)
        router.refresh()
        setTimeout(() => setIsLoading(false), 1000)
    }

    return (
        <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-vt-maroon text-white hover:bg-vt-burgundy transition-colors"
        >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
        </button>
    )
} 