import React, { useState } from 'react';
import ProjectSearch from '@/components/ProjectSearch';

const projects = [
  { id: 1, title: 'Word Cloud Generator', description: 'Created a word cloud generator using Python.' },
  { id: 2, title: 'Expense Tracker', description: 'Track and manage your expenses easily.' },
  { id: 3, title: 'BMI Calculator', description: 'Calculate your Body Mass Index with ease.' },
  { id: 4, title: 'Trivia Quiz', description: 'Test your knowledge with a trivia quiz.' },
  { id: 5, title: 'Weather Bot', description: 'Get weather updates using OpenWeatherMap API.' },
];

export default function Projects() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-teal-400 mb-6">Projects</h1>
      <ProjectSearch projects={projects} />
    </div>
  );
}
