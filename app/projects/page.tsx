'use client';

import React from 'react';
import ProjectSearch from './ProjectSearch'; // Update the path as needed

const Page = () => {
  const projects = [
    {
      id: 1,
      name: 'Word Cloud Generator',
      description: 'Developed a word cloud generator using Python and matplotlib.',
    },
    {
      id: 2,
      name: 'Expense Tracker',
      description: 'Implemented a user-friendly expense tracking tool with Python.',
    },
    {
      id: 3,
      name: 'BMI Calculator',
      description: 'A BMI calculator using Python to assess health metrics.',
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
};

export default Page;
