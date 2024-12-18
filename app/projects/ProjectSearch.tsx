'use client';

import React, { useState } from 'react';

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // Explicitly set the type as string
  const [searchResults, setSearchResults] = useState<Project[]>([
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
  ]);

  // Specify the event type for input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter projects based on search query
    setSearchResults(
      searchResults.filter((project) =>
        project.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <input
        type="text"
        className="p-3 w-full rounded-md mb-6 bg-gray-700 text-white"
        placeholder="Search projects"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {searchResults.map((project) => (
          <div key={project.id} className="mb-4">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSearch;
