// app/projects/page.tsx
const ProjectsPage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
      <p className="text-gray-600 mt-2">Here are some of the projects I&apos;ve worked on:</p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Word Cloud Generator</strong>: Developed a word cloud generator using Python and matplotlib.</li>
        <li><strong>Expense Tracker</strong>: Implemented data storage and retrieval functionalities using Python, allowing users to store and analyze their spending habits.</li>
        <li><strong>BMI Calculator</strong>: Created an application that calculates BMI based on user input for height and weight.</li>
        <li><strong>Trivia Quiz</strong>: Developed a trivia quiz game using Python with a scoring system.</li>
        <li><strong>Weather Bot</strong>: Built using Python and OpenWeatherMap API to provide current weather conditions and forecasts.</li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
