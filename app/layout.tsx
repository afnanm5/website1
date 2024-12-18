// app/layout.tsx
"use client";

import "../styles/globals.css";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F1FAF6] font-sans text-gray-800 min-h-screen">
      <header className="bg-[#A7D8D8] py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-[#2D4F4F]">Afnan Monzur</h1>
          <nav className="space-x-6 text-lg">
            <Link href="/" className="hover:text-[#2D4F4F] transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-[#2D4F4F] transition duration-300">About</Link>
            <Link href="/projects" className="hover:text-[#2D4F4F] transition duration-300">Projects</Link>
          </nav>
        </div>
      </header>
      <main className="py-12 px-6">{children}</main>
      <footer className="bg-[#A7D8D8] py-6 text-center text-white">
        <p>&copy; 2024 Afnan Monzur</p>
      </footer>
    </div>
  );
};

export default Layout;
