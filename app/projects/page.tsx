// app/projects/page.tsx
import ProjectSearch from "./ProjectSearch";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Word Cloud Generator",
      description:
        "Developed using Python and matplotlib. It generates visually appealing word clouds based on text input like blog posts, articles, or research papers.",
    },
    {
      title: "Expense Tracker",
      description:
        "Implemented data storage and retrieval with Python. It allows users to track and analyze their spending habits with reports.",
    },
    {
      title: "BMI Calculator",
      description:
        "A Python application that calculates Body Mass Index based on user inputs for height and weight.",
    },
    {
      title: "Trivia Quiz",
      description:
        "Developed a trivia quiz game with a database of trivia questions and scoring system to track users' performance.",
    },
    {
      title: "Weather Bot",
      description:
        "Built using Python and the OpenWeatherMap API to provide weather data for any location entered by the user.",
    },
  ];

  return (
    <div className="py-10 px-4 bg-teal-light text-teal-dark">
      <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
};

export default ProjectsPage;

