import React from "react";
import { useData } from "./pi/hooks/useData";
import { useNavigate } from "react-router-dom";

export function PersonalInfo() {
    const {
        Fname, setFname,
        Lname, setLname,
        Email, setEmail, 
        Phone, setPhone, 
        isRemember, setRemember
    } = useData();

    const navigate = useNavigate();

    function PersonalData(e) {
        e.preventDefault();

        const obj = {
            fullName: `${Fname} ${Lname}`,
            email: Email,
            phone: Phone
        };

        navigate("/workExperience", { state: { Personal: obj } });
    }

    return (
        <div className="font-sans">
            <nav className="bg-blue-800 p-4 text-white w-full">
                <h2>Resume Builder</h2>
            </nav>
            <div className="p-6 m-5 shadow-xl rounded-xl">
                <h2 className="pb-4 text-xl">Let's collect some personal information</h2>
                <hr />
                <form onSubmit={PersonalData}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                onChange={(e) => setFname(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                onChange={(e) => setLname(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@company.com"
                            required
                        />
                    </div> 

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                        />
                    </div>

                    <div className="flex items-start mb-6 mt-2">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={isRemember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
                        </label>
                    </div>
                    
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
