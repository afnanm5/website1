// app/projects/ProjectSearch.tsx
"use client";  // Add this line at the top of your file to mark this as a client component

import { useState } from "react";

const ProjectSearch = ({ projects }: { projects: any[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-md w-full mb-4"
      />
      <div>
        {filteredProjects.length === 0 ? (
          <p>No projects found</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="p-4 border-b">
              <h3 className="font-semibold">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;
