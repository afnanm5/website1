import React from 'react';

export default function About() {
  return (
    <div className="bg-dark text-white p-8">
      <h1 className="text-4xl font-bold text-teal-400">About Me</h1>
      <p className="mt-4 text-lg text-gray-300">
        I am a Computer Science student at Toronto Metropolitan University with a passion for technology and coding.
      </p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-500">Education</h2>
        <p className="mt-2">
          <strong>Bachelor of Science in Computer Science | Minor in Cyber-security</strong>
          <br />
          Toronto Metropolitan University, June 2025
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-teal-500">Projects</h2>
        <ul className="list-disc ml-8 mt-4">
          <li>Word Cloud Generator</li>
          <li>Expense Tracker</li>
          <li>BMI Calculator</li>
          <li>Trivia Quiz</li>
          <li>Weather Bot</li>
        </ul>
      </section>
    </div>
  );
}
