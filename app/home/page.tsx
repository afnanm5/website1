// app/home/page.tsx

import React from 'react';
import { BackgroundLines } from '@/components/ui/BackgroundLines'; // Ensure this path is correct
import Link from 'next/link';

export default function HomePage() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-10">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Afnan Monzur Portfolio
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-6">
        Welcome to my portfolio. I am a Computer Science student with experience in software development and cybersecurity.
      </p>
      <Link href="/projects" className="text-blue-500 hover:underline">View My Projects</Link>
    </BackgroundLines>
  );
}
