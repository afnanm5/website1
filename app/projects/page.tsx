// app/projects/page.tsx
"use client";

import ProjectSearch from "./ProjectSearch";

const projects = [
  { id: 1, title: "Word Cloud Generator", description: "A tool to generate word clouds from text input." },
  { id: 2, title: "Expense Tracker", description: "Track and analyze your spending habits." },
  { id: 3, title: "BMI Calculator", description: "A BMI calculator that shows results based on user input." },
  { id: 4, title: "Trivia Quiz", description: "A fun trivia quiz game with various subjects." },
  { id: 5, title: "Weather Bot", description: "Get real-time weather data based on your location." },
];

const ProjectsPage = () => {
  return (
    <div className="bg-[#F1FAF6] py-16">
      <h2 className="text-4xl font-bold text-[#2D4F4F] text-center">My Projects</h2>
      <ProjectSearch projects={projects} />
    </div>
  );
};

export default ProjectsPage;
