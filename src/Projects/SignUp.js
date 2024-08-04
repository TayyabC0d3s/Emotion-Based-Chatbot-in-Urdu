import React, { useState } from 'react';
import bgImg from '../Images/BGIMAGE.png';
import robot from "../Images/RoboHead.jpg";

export const SignUp = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function ValidateData(event) {
    event.preventDefault();
    let data = {
      "username": username,
      "password": password,
      "email": email
  };
    try {
      let response = await fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      let result = await response.json();

      if (response.ok) {
          alert(result.message);
      } else {
          alert(result.error);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
  }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5" style={{ background: `url(${bgImg})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-lg p-8">
        <form className="space-y-5" onSubmit={ValidateData}>
          <div className="flex flex-col items-center">
            <img src={robot} className="w-16 h-16" alt="image of a robot Head" />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ahmed_1911"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="someone@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            value="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create account
          </button>
        </form>
        <div className="text-center text-sm mt-2 font-medium text-gray-500">
          Already have an account? <a href="/" className="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
        </div>
      </div>
    </div>
  );
};
