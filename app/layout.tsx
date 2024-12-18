// app/layout.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Afnan Monzur Portfolio</title>
      </head>
      <body className="bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <Link href="/" className="text-2xl text-teal-400 hover:text-teal-600">Home</Link>
            <Link href="/about" className="text-2xl text-teal-400 hover:text-teal-600">About</Link>
            <Link href="/projects" className="text-2xl text-teal-400 hover:text-teal-600">Projects</Link>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
