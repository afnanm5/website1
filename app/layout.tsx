// app/layout.tsx
import "../styles/globals.css";
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <html lang="en">
      <body className="bg-teal-light text-teal-dark">
        <header className="bg-teal-500 p-4 text-white text-center">
          <h1 className="text-3xl font-bold">Afnan Monzur&apos;s Portfolio</h1>
          <nav className="mt-6">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link
                  href="/#home"
                  onClick={() => handleLinkClick("Home")}
                  className={`text-white hover:text-gray-200 transition-transform transform ${
                    activeLink === "Home" ? "scale-110" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => handleLinkClick("About")}
                  className={`text-white hover:text-gray-200 transition-transform transform ${
                    activeLink === "About" ? "scale-110" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => handleLinkClick("Projects")}
                  className={`text-white hover:text-gray-200 transition-transform transform ${
                    activeLink === "Projects" ? "scale-110" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-teal-800 text-white text-center p-4 mt-10">
          <p>&copy; 2024 Afnan Monzur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
