// app/projects/page.tsx
const ProjectsPage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
      <p className="text-gray-600 mt-2">Here are some of the projects I have worked on:</p>
      <ul className="mt-4 space-y-4 text-left text-gray-700">
        <li>
          <h3 className="font-semibold">Word Cloud Generator</h3>
          <p>
            Developed a word cloud generator using Python and matplotlib. It allows users to input a block of text, such as articles or research papers, and generates a visually appealing word cloud highlighting the most frequently used words.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Expense Tracker</h3>
          <p>
            Implemented data storage and retrieval functionalities using Python, allowing users to store and analyze their spending habits. Designed a user-friendly interface to track expenses and generate financial reports.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">BMI Calculator</h3>
          <p>
            Created a BMI (Body Mass Index) calculator application in Python. It calculates BMI based on user input for height and weight and displays the result with the BMI category.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Trivia Quiz</h3>
          <p>
            Developed a trivia quiz game using Python. Created a database of trivia questions and answers, implementing a scoring system to track users' performance.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Weather Bot</h3>
          <p>
            Developed a weather bot using Python and the OpenWeatherMap API. The bot allows users to input a location and receive current weather conditions and forecasts.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
