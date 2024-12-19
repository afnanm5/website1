'use client'

import '../styles/globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="https://motionbgs.com/media/5044/abstract-blue-smoke.960x540.mp4" type="video/mp4" />
      </video>

      {/* Content Area */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}
