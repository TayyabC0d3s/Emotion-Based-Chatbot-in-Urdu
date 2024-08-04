import React, { useState } from 'react';
import axios from 'axios';
import { useExp } from './pi/hooks/useData';

const WorkExperience = () => {
    
    const {workExperiences, setWorkExperiences, formData, setFormData} = useExp();
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkExperiences([...workExperiences, formData]);
        
        //reset form data
        setFormData({
            jobTitle: '',
            company: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            comments: '',
        });
    };

    const GenerateAI = async () => {
        const { jobTitle } = formData.jobTitle;

        if (!jobTitle) {
            alert('Please enter a job title to generate suggestions.');
            return;
        }

        try {
            const response = await axios.post('/api/generate-suggestions', { jobTitle });
            const { suggestions } = response.data;
            setFormData({ ...formData, comments: suggestions });
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
        }
    };

    return (
        <>
        <nav className="bg-blue-800 p-4 text-white w-full">
                <h2>Resume Builder</h2>
            </nav>
        <div className="flex">
            <div className="p-6 m-5 shadow-xl rounded-xl w-3/4">
                <h2 className="pb-4 text-xl">Let's add your Work Experience</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                        <div>
                            <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                            <input type="text" id="jobTitle" value={formData.jobTitle} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="text" id="company" value={formData.company} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company" required />
                        </div>
                        <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input type="text" id="city" value={formData.city} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                        </div>
                        <div>
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input type="text" id="country" value={formData.country} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                        </div>
                        <div>
                            <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" id="startDate" value={formData.startDate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" id="endDate" value={formData.endDate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex w-full justify-between items-center p-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <button type="button" className="text-white bg-green-500 p-1 rounded" onClick={GenerateAI}>Suggest with AI</button>
                        </div>
                        <textarea id="comments" value={formData.comments} onChange={handleChange} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your comments here"></textarea>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+ Add Experience</button>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 p-2 pl-4 pr-4 rounded-lg">Next</button>
                    </div> 
                </form>
            </div>
            <div className="w-1/4 p-6 m-5 shadow-xl rounded-xl">
                <h3 className="pb-4 text-xl">Your Work Experience</h3>
                {workExperiences.map((exp, index) => (
                    <div key={index} className="mb-4 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                        <h4 className="text-lg font-bold">{exp.jobTitle}</h4>
                        <p className="text-sm">{exp.company}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default WorkExperience;