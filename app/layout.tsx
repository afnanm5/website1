// Mark the file as a client component using "use client"
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

// Define the Layout component
const Layout = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  // Handle active link change
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <html lang="en">
      <head>
        <title>Afnan Monzur Portfolio</title>
        <meta name="description" content="Afnan Monzur's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-teal-50 text-gray-900">
        {/* Navigation bar */}
        <nav className="py-4 px-6 bg-teal-100 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              <Link href="/" className="hover:text-teal-600" onClick={() => handleLinkClick('home')}>
                Home
              </Link>
            </div>
            <div className="space-x-6">
              <Link
                href="/about"
                className={`hover:text-teal-600 ${activeLink === 'about' ? 'text-teal-600' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`hover:text-teal-600 ${activeLink === 'projects' ? 'text-teal-600' : ''}`}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-teal-100 py-4 text-center text-gray-800">
          <p>&copy; 2024 Afnan Monzur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
