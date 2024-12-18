// app/projects/page.tsx
'use client';

import React from 'react';
import ProjectSearch from './ProjectSearch';

const projects = [
  { id: 1, title: 'Word Cloud Generator', description: 'A Python app that generates word clouds from user input.' },
  { id: 2, title: 'Expense Tracker', description: 'Track and analyze your spending habits with Python.' },
  { id: 3, title: 'BMI Calculator', description: 'Calculate BMI based on user input for height and weight.' },
  { id: 4, title: 'Trivia Quiz', description: 'A trivia quiz game built using Python.' },
  { id: 5, title: 'Weather Bot', description: 'Get weather updates based on location with Python.' },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
}
