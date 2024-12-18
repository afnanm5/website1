'use client';

import React, { useState } from 'react';

const ProjectSearch = ({ projects }: { projects: any[] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search projects"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredProjects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSearch;
