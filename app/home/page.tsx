'use client'; // Ensure it's a client-side component
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-600 to-blue-700 text-white p-6">
      {/* Welcome Section */}
      <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-indigo-800">
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="z-10 flex flex-col items-center justify-center space-y-6 py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-center sm:text-6xl md:text-7xl">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-center sm:text-2xl max-w-3xl">
            I am Afnan Monzur, a passionate computer science student focused on building innovative projects. Explore my work and experience below!
          </p>
          <div className="space-x-8">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md text-lg font-semibold hover:bg-teal-800 transition-all transform hover:scale-110"
            >
              View My Projects →
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bubbles */}
      <div className="flex space-x-8 mt-12">
        <div className="server-bubble">
          <Link href="/" className="text-center text-2xl font-semibold">
            Home
          </Link>
        </div>
        <div className="server-bubble">
          <Link href="/about" className="text-center text-2xl font-semibold">
            About
          </Link>
        </div>
        <div className="server-bubble">
          <Link href="/projects" className="text-center text-2xl font-semibold">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
