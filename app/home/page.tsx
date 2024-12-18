import React from 'react';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700 py-8">
        Afnan Monzur - Full Stack Developer
      </h1>
      <p className="text-lg mb-6 text-gray-300">
        Passionate about technology, coding, and learning new things. I specialize in building web applications and solving complex problems.
      </p>
      <div className="py-6 px-4 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <p>Click below to explore some of the projects I've worked on.</p>
        <Link href="/projects" className="mt-4 inline-block text-teal-500 hover:text-teal-700">
          Explore Projects →
        </Link>
      </div>
    </div>
  );
}
