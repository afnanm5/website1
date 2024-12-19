// app/projects/page.tsx
'use client'

import { useState } from 'react';
import SearchBar from '../components/SearchBar';

export default function ProjectsPage() {
    const projects = [
        { name: 'Word Cloud Generator', description: 'Developed a word cloud generator using Python and matplotlib.' },
        { name: 'Expense Tracker', description: 'Implemented data storage and retrieval functionalities using Python.' },
        { name: 'BMI Calculator', description: 'Implemented a BMI calculator application to calculate BMI.' },
        { name: 'Trivia Quiz', description: 'Developed a trivia quiz game using Python.' },
        { name: 'Weather Bot', description: 'Developed a weather bot using Python and the OpenWeatherMap API.' }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-teal-800 text-white p-8">
            <h2 className="text-3xl font-semibold mb-4">My Projects</h2>

            {/* Search Bar */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <ul className="mt-4">
                {filteredProjects.map((project, index) => (
                    <li key={index} className="bg-white text-black p-4 my-2 rounded-lg">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
