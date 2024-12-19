// app/home/page.tsx
'use client'

import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-teal-800">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Resume Website</h1>

            <div className="flex space-x-8">
                <Link href="/home" className="bubble p-4 text-xl text-white hover:text-teal-500 hover:scale-125 transition-all duration-300">
                    Home
                </Link>
                <Link href="/about" className="bubble p-4 text-xl text-white hover:text-teal-500 hover:scale-125 transition-all duration-300">
                    About
                </Link>
                <Link href="/projects" className="bubble p-4 text-xl text-white hover:text-teal-500 hover:scale-125 transition-all duration-300">
                    Projects
                </Link>
            </div>
        </div>
    );
}
