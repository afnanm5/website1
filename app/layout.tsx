// app/layout.tsx
"use client";  // Add this line at the top of your file to mark this as a client component

import { useState } from "react";
import "../styles/globals.css";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  // Handler to add active class for button animation
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <html lang="en">
      <body>
        <header className="bg-teal-200 p-4 text-white text-center">
          <h1 className="text-3xl font-semibold">Afnan Monzur&apos;s Portfolio</h1>
          <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("home")}
                  className={`transition-transform transform p-2 bg-blue-500 text-white rounded-md hover:scale-110 ${
                    activeLink === "home" ? "scale-110" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => handleLinkClick("about")}
                  className={`transition-transform transform p-2 bg-blue-500 text-white rounded-md hover:scale-110 ${
                    activeLink === "about" ? "scale-110" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => handleLinkClick("projects")}
                  className={`transition-transform transform p-2 bg-blue-500 text-white rounded-md hover:scale-110 ${
                    activeLink === "projects" ? "scale-110" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-teal-200 text-white text-center p-4">
          <p>&copy; 2024 Afnan Monzur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
