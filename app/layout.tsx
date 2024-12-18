// app/layout.tsx
import "../styles/globals.css";  // Import global styles
import Link from 'next/link'; // Add this line to import Link

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* Header Section */}
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-3xl font-bold">Afnan Monzur&apos;s Portfolio</h1>
          
          {/* Navigation Links */}
          <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="text-white hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:underline">Projects</Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline">About</Link>
              </li>
            </ul>
          </nav>

          {/* View Projects Button with Hover Animation */}
          <div className="mt-6">
            <Link href="/projects">
              <button className="transition-transform transform hover:scale-110 p-2 bg-blue-700 text-white rounded-md">
                View Projects
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Afnan Monzur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
