import React, { useState } from 'react';
import robot from "../Images/RoboHead.jpg";
import bgImg from "../Images/BGIMAGE.png";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ValidateData = async (event) => {
    event.preventDefault();
    
    const data = {
      "username": username,
      "password": password
    };
    
    try {
      let response = await fetch("/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        navigate("selection", { state: { user: { username } } });
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorJson = await response.json();
          console.error('Error JSON:', errorJson);
          alert(`User Not Found! Error: ${JSON.stringify(errorJson)}`);
        } else {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          alert(`User Not Found! Response: ${errorText}`);
        }
      }
    } catch (exception) {
      console.error('Error occurred:', exception);
      alert("An error occurred! Please check the console for details.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-7"
      style={{
        background: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '100%',
        height: "100%"
      }}
    >
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-lg p-8">
        <form className="space-y-5" onSubmit={ValidateData}>
          <div className="flex flex-col items-center">
            <img src={robot} className="w-32 h-32" alt="image of a robot head" />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Ahmed_1911"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
        <div className="text-center text-sm mt-2 font-medium text-gray-500">
          Don't have an account? <a href="signup" className="text-blue-700 hover:underline dark:text-blue-500">Sign up</a>
        </div>
      </div>
    </div>
  );
};
