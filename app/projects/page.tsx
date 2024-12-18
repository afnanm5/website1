// app/projects/page.tsx
import ProjectSearch from "./ProjectSearch";

const projects = [
  { id: 1, name: "Word Cloud Generator", description: "Developed a word cloud generator using Python and matplotlib." },
  { id: 2, name: "Expense Tracker", description: "Implemented data storage and retrieval functionalities using Python to track expenses." },
  { id: 3, name: "BMI Calculator", description: "Implemented a BMI calculator application to calculate BMI based on user input for height and weight." },
  { id: 4, name: "Trivia Quiz", description: "Created a trivia quiz game with a scoring system to track users' performance." },
  { id: 5, name: "Weather Bot", description: "Developed a weather bot using the OpenWeatherMap API to provide current weather conditions." },
];

const ProjectsPage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
};

export default ProjectsPage;
