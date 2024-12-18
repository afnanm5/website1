// app/projects/ProjectSearch.tsx
import { useState } from 'react'; // <-- Add this import statement

interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectSearch = ({ projects }: { projects: Project[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-md border"
      />
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <h3 className="font-bold">{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSearch;
