// app/projects/ProjectSearch.tsx
import { useState } from "react";

const ProjectSearch = ({ projects }: { projects: any[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-6">
      <input
        type="text"
        className="p-3 w-full max-w-md rounded-md border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
        placeholder="Search Projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold text-teal-dark">{project.title}</h3>
              <p className="text-lg text-teal-muted">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="text-lg text-teal-muted">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;
