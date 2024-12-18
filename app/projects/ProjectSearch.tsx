// app/projects/ProjectSearch.tsx
"use client";

import { useState } from "react";

// Change 'title' to 'name' here
interface Project {
  id: number;
  name: string;  // use 'name' instead of 'title'
  description: string;
}

const ProjectSearch = ({ projects }: { projects: Project[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-4">
      <input
        type="text"
        className="p-2 rounded border"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="mb-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSearch;
