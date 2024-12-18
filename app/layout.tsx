// app/layout.tsx

'use client'; // Add this line to make the component a client component

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <html lang="en">
      <head>
        <title>Afnan Monzur Portfolio</title>
      </head>
      <body className="bg-gray-50">
        <nav className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="flex justify-center space-x-8">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/about" className="hover:text-blue-300">About</Link>
            <Link href="/projects" className="hover:text-blue-300">Projects</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
