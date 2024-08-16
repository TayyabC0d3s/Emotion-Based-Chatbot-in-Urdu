import React, { useState, useEffect } from 'react';
import axios from 'axios';

const suggestionsList = [
    'JavaScript',
    'Java',
    'Python',
    'C++',
    'C#',
    'Ruby',
    'Go',
    'Swift',
    'Kotlin',
    'TypeScript',
];

const SkillsForm = () => {
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value =  e.target.value
        setSkill(value);

        if (value) {
            // For suggestion on user input

            const filteredSuggestions = suggestionsList.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSkill(suggestion);
        setSuggestions([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (skill.trim()) {
            setSkills([...skills, skill]);
            setSkill('');
            setSuggestions([]);
        }
    };


    // Function to fetch suggestions
    const fetchSuggestions = async () => {
        let jobTitle = 'Data Analyst'
        try {
            const response = await axios.post('/generate_skills', { jobTitle });
            setSuggestions(response.data);
            alert(response.data)
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
        }
    };

    // Fetch suggestions when the component mounts
    useEffect(() => {
        fetchSuggestions();
    }, []);

    return (
        <>
        <nav className="bg-blue-800 p-4 text-white w-full">
                <h2>Resume Builder</h2>
        </nav>
        <div className="p-6 m-5 shadow-xl rounded-xl">
            <h2 className="pb-4 text-xl">Add Your Skills</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill</label>
                    <input type="text" id="skill" value={skill} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a skill" required />
                    {suggestions.length > 0 && (
                        <ul className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* <div>
                    <h1>Suggestions</h1>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div> */}
                <div className="flex justify-between">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Skill</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 p-2 pl-4 pr-4 rounded-lg">Next</button>
                </div>
            </form>
            <div className="mt-6">
                <h3 className="pb-4 text-xl">Your Skills</h3>
                <ul className="list-none pl-5 flex ">
                    {skills.map((skill, index) => (
                        <li key={index} className="p-2 ml-1 shadow-md bg-blue-800 text-white rounded text-gray-900 dark:text-white">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};

export default SkillsForm;