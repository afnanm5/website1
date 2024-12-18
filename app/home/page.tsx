'use client';

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white h-screen p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Welcome to My Portfolio</h1>
      <p className="text-lg mb-4 text-center">
        I'm Afnan Monzur, a passionate developer specializing in full-stack development, with experience in Python, JavaScript, and more.
      </p>
      <Link href="/projects" className="mt-6 inline-block text-teal-500 hover:text-teal-700 text-xl">
        View My Projects →
      </Link>
    </div>
  );
};

export default Home;
