// app/layout.tsx
import "../styles/globals.css";  // Import global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-3xl font-bold">Afnan Monzur's Portfolio</h1>
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
