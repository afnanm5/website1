'use client'; // Add this at the top to make it a client component

import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <html lang="en">
      <head>
        <title>Afnan Monzur Portfolio</title>
      </head>
      <body>
        <nav>
          <div>
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/about" passHref>
              About
            </Link>
            <Link href="/projects" passHref>
              Projects
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
