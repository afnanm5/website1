// app/about/page.tsx
'use client';

import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-center max-w-3xl mb-6">
        Hi! I'm Afnan Monzur, a Computer Science student at Toronto Metropolitan University with a focus in Cyber-security. 
        I enjoy coding, problem solving, and working on interesting projects. I&rsquo;m passionate about learning and continuously improving my skills.
      </p>
      <p className="text-lg text-center max-w-3xl">
        Currently, I'm looking for opportunities to apply my knowledge in real-world projects. I have experience in Python, Java, ReactJS, and more!
      </p>
    </div>
  );
}
