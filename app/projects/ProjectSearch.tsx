// app/projects/ProjectSearch.tsx

interface Project {
  id: number;
  title: string;
  description: string;
  // Add any other properties relevant to your project
}

const ProjectSearch = ({ projects }: { projects: Project[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSearch;
