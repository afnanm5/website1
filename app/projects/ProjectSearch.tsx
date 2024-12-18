// app/projects/ProjectSearch.tsx
'use client';

import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectSearchProps {
  projects: Project[];
}

const ProjectSearch = ({ projects }: ProjectSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-800 text-white"
      />
      <div className="mt-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSearch;
