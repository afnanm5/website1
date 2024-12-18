// app/projects/ProjectSearch.tsx

'use client';

import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectSearchProps {
  projects: Project[];
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      />
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSearch;
