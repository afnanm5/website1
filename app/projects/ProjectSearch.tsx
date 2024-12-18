'use client';

import React, { useState } from 'react';

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
}

// Define props to accept the projects array
interface ProjectSearchProps {
  projects: Project[];
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Project[]>(projects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter projects based on search query
    setSearchResults(
      projects.filter((project) =>
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
