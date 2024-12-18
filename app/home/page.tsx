// app/home/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-800 to-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to My Portfolio</h1>
      <p className="text-xl mb-4 text-center">Discover my work and projects!</p>
      <Link href="/projects" className="mt-4 inline-block text-teal-500 hover:text-teal-700 text-xl">
        Explore Projects →
      </Link>
    </div>
  );
}
