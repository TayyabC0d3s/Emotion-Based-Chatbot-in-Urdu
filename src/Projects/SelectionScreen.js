import React, { useEffect, useState } from "react";
import hey from "../Images/cute-3d-robot-say-hello-png-removebg-preview.png";
import bgImg from "../Images/BGIMAGE.png";
import robohead from "../Images/RoboHead.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Selection() {

  const navigate = useNavigate();
  const [SelectedBot, setSelectedBot] = useState("");
  const location  = useLocation()
  const user = JSON.stringify(location.state.user);

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4 md:p-8"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="w-full max-w-xl bg-white border object-cover border-gray-200 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-8 mx-4 lg:mx-0 lg:ml-auto">
        <div className="grid grid-cols-3 gap-4 items-center justify-center px-4 sm:px-12">
          <img
            className="w-24 h-24 col-span-3 place-self-center mb-4"
            src={robohead}
            alt="robo head"
          />
          <div className="col-span-3 flex justify-between space-x-4 sm:space-x-12 text-center">
            <div className="flex flex-col items-center">
              <div onClick={()=> setSelectedBot("male")} className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full overflow-hidden bg-gradient-to-t from-blue-700 to-blue-400 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={hey}
                  alt="Bonnie image"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Male</h5>
            </div>
            <div className="flex flex-col items-center">
              <div onClick={()=> setSelectedBot("angry male")} className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full overflow-hidden bg-gradient-to-t from-green-700 to-green-400 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={hey}
                  alt="Bonnie image"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Angry Male</h5>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={()=> {setSelectedBot("female");
                                  alert(SelectedBot);
                          }}
                          className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full overflow-hidden bg-gradient-to-t from-red-700 to-red-400 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={hey}
                  alt="Bonnie image"
                />
              </button>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Female</h5>
            </div>
          </div>

          <span className="text-md text-gray-500 col-span-3 text-center dark:text-gray-400">
            Please choose a bot to continue
          </span>

          <div className="flex flex-col sm:flex-row col-span-3 justify-center sm:justify-between mt-4">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 sm:mb-0 sm:mr-2"
            >
              Logout
            </a>
            <span className="text-center md:hidden">OR</span>
            <button onClick={
              () => {
                navigate("/chatbot", {state:{bot:`${SelectedBot}`, user:`${user}`}})
              }
            }
            
              className="w-full sm:w-auto inline-flex items-center justify-center py-2 px-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Start Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
