// app/layout.tsx
import "../styles/globals.css";  // Import global styles
import Link from 'next/link'; // Add this line to import Link

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-3xl font-bold">Afnan Monzur&apos;s Portfolio</h1>
          <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Afnan Monzur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
