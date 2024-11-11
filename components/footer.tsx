export function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        © <span className='hidden'>{new Date().getFullYear()} </span>
                        SuperDARN 2025 Conference. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 