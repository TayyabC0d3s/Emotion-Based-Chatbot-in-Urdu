import React, { useState } from 'react';
import { useEducation } from './pi/hooks/useData';
import { useLocation, useNavigate } from 'react-router-dom';

const Education = () => {
    
    const navigate  = useNavigate();
    const location = useLocation();
    let data = location.state;
    

    const {Education, setEducation, formData, setFormData} = useEducation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducation([...Education, formData]);
        setFormData({
            Degree: '',
            Institute: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
        });
    };

    function EducationData(){
        navigate('../Skills', {state: {'PrevData': data, 'Education':Education}})
    }
    return (
        <>
        <nav className="bg-blue-800 p-4 text-white w-full">
            <h2>Resume Builder</h2>
        </nav>
        <div className="flex">
            <div className="p-6 m-5 shadow-xl rounded-xl w-3/4">
                <h2 className="pb-4 text-xl">Let's add your Qualifications</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                        <div>
                            <label htmlFor="Degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                            <input type="text" id="Degree" value={formData.Degree} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Degree" required />
                        </div>
                        <div>
                            <label htmlFor="Institute" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institute</label>
                            <input type="text" id="Institute" value={formData.Institute} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Institute" required />
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

                    <div className="flex justify-between">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+ Add Education</button>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 p-2 pl-4 pr-4 rounded-lg" onClick={EducationData}>Next</button>
                    </div> </form>
            </div>
            <div className="w-1/4 p-6 m-5 shadow-xl rounded-xl">
                <h3 className="pb-4 text-xl">Your Education</h3>
                {Education.map((exp, index) => (
                    <div key={index} className="mb-4 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                        <h4 className="text-lg font-bold">{exp.Degree}</h4>
                        <p className="text-sm">{exp.Institute}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Education;
