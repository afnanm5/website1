'use client'; // Ensure it's a client-side component
import React from "react";
import Image from "next/image"; // Optional for images

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center py-20 space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Hello! I'm Afnan Monzur, a computer science student at Toronto Metropolitan University. I specialize in building web applications, data analysis tools, and more. My primary focus is enhancing my skills in programming and problem-solving.
        </p>
        <div className="space-x-8 mt-8">
          <Image
            src="/path/to/your-image.jpg" // Add your profile image
            alt="Afnan Monzur"
            width={200}
            height={200}
            className="rounded-full border-4 border-teal-500"
          />
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>
          <ul className="text-lg text-gray-400">
            <li>Python, Java, C, Smalltalk</li>
            <li>ReactJS, Next.js</li>
            <li>Matplotlib, OpenWeatherMap API</li>
            <li>Git, GitHub</li>
            <li>Cybersecurity Basics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
