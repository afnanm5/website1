// app/projects/page.tsx

import React from 'react';
import ProjectSearch from './ProjectSearch'; // Ensure this import is correct

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Word Cloud Generator', description: 'Developed a word cloud generator using Python and matplotlib.' },
    { id: 2, name: 'Expense Tracker', description: 'Implemented data storage and retrieval functionalities using Python.' },
    { id: 3, name: 'BMI Calculator', description: 'Created a BMI calculator application in Python to calculate BMI based on user input.' },
    { id: 4, name: 'Trivia Quiz', description: 'Developed a trivia quiz game with a scoring system.' },
    { id: 5, name: 'Weather Bot', description: 'Developed a bot using the OpenWeatherMap API to provide weather updates.' }
  ];

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
}
