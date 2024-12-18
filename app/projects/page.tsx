'use client';

import React, { useState } from 'react';
import ProjectSearch from './ProjectSearch'; // Correct path to your component

const ProjectsPage = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Word Cloud Generator',
      description: 'A Python app that generates word clouds from text.',
    },
    {
      id: 2,
      name: 'Expense Tracker',
      description: 'A simple Python app for tracking your expenses.',
    },
    {
      id: 3,
      name: 'BMI Calculator',
      description: 'A Python app to calculate BMI based on user input.',
    },
    // Add more projects here
  ]);

  return (
    <div>
      <h2>Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
};

export default ProjectsPage;
