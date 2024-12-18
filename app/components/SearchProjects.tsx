import React, { useState } from 'react';

// Define a type for the project
type Project = {
  title: string;
  description: string;
};

// Example projects
const allProjects: Project[] = [
  { title: "Word Cloud Generator", description: "Developed a word cloud generator using Python and matplotlib." },
  { title: "Expense Tracker", description: "Implemented data storage and retrieval functionalities using Python." },
  { title: "BMI Calculator", description: "Implemented a BMI (Body Mass Index) calculator application in Python." },
  { title: "Trivia Quiz", description: "Developed a trivia quiz game using Python." },
  { title: "Weather Bot", description: "Developed using Python and the OpenWeatherMap API." },
];

const SearchProjects = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Filter projects based on the search term (case insensitive)
    const filtered = allProjects.filter(project =>
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for projects..."
        className="p-2 mb-4 border border-gray-300 rounded-md w-full"
      />

      <div>
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <ul>
            {filteredProjects.map((project, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchProjects;
