import { getSheetData } from '@/lib/sheets'
import { AlertCircle, Clock, MapPin } from 'lucide-react'
import { RefreshButton } from '@/components/refresh-button'

export default async function LiveUpdatesPage() {
    const updates = await getSheetData()

    // Helper function to get icon based on update type
    const getIcon = (type: string) => {
        switch (type) {
            case 'announcement':
                return <AlertCircle className="w-6 h-6 text-blue-500" />
            case 'schedule_change':
                return <Clock className="w-6 h-6 text-amber-500" />
            case 'room_change':
                return <MapPin className="w-6 h-6 text-green-500" />
            case 'emergency':
                return <AlertCircle className="w-6 h-6 text-red-500" />
            default:
                return <AlertCircle className="w-6 h-6 text-gray-500" />
        }
    }

    // Helper function to format timestamp
    const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white py-12 border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-4">
                        <h1 className="text-4xl font-serif font-semibold text-gray-900">
                            Live Updates
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            Real-time conference announcements and updates
                        </p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <RefreshButton />
                    </div>
                </div>
            </div>

            {/* Updates Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {updates.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow">
                        <p className="text-gray-600">No active updates at this time.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {updates.map((update, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="mt-1">
                                        {getIcon(update.type)}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h2 className="text-xl font-serif font-semibold text-gray-900">
                                                {update.title}
                                            </h2>
                                            <time className="text-sm text-gray-500 shrink-0">
                                                {formatTime(update.timestamp)}
                                            </time>
                                        </div>
                                        <p className="mt-2 text-gray-600 whitespace-pre-line">
                                            {update.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
} 