'use client'; // Mark as a client component for React hooks to work

import React, { useState } from 'react';

const ProjectSearch = ({ projects }: { projects: { id: number; title: string; description: string }[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="w-full p-2 mb-4 bg-gray-800 text-white"
        placeholder="Search for projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-none">
        {filteredProjects.map((project) => (
          <li key={project.id} className="py-2">
            <h3 className="font-semibold text-teal-400">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSearch;
