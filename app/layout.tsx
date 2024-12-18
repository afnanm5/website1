import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <html lang="en">
      <head>
        <title>Afnan Monzur Portfolio</title>
      </head>
      <body className="bg-dark text-white">
        <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-500 to-teal-700">
          <div>
            <Link
              href="/"
              className={`p-4 ${activeLink === 'home' ? 'text-yellow-500' : 'text-white'}`}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`p-4 ${activeLink === 'about' ? 'text-yellow-500' : 'text-white'}`}
              onClick={() => setActiveLink('about')}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`p-4 ${activeLink === 'projects' ? 'text-yellow-500' : 'text-white'}`}
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </Link>
          </div>
        </nav>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
