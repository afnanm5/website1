import React from 'react';
import Link from 'next/link';  // <-- Add this import statement

const HomePage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>Click below to explore some of the projects I've worked on.</p>
      <Link href="/projects" className="mt-4 inline-block text-teal-500 hover:text-teal-700">
        Explore Projects →
      </Link>
    </div>
  );
};

export default HomePage;
