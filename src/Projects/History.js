// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import hey from "../Images/cute-3d-robot-say-hello-png-removebg-preview.png";
// import bgImg from "../Images/BGIMAGE.png";
// import robohead from "../Images/RoboHead.jpg";
// import deleteIcon from "../Images/delete.png";

// export function History() {

//   const [ValuesToPass, setValues] = useState({});
//   const [Session_id, setID] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();

//   let username = "";
//   let bot = "";

//   let jsonString = location.state;

//   try {
//     // Parse the JSON string directly (without stringify)
//     const values = jsonString.value;
//     console.log(values)
  
//     // Access username after parsing (assuming the structure is as expected)
//     const user = JSON.parse(values.user);
//     username = user.username;
//     bot = values.bot;

  
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//   }
//   // useEffect(() => {
//   //   if (location.state != null) {
//   //     setValues(location.state);
//   //   }
//   // }, []);

//   const [sessionID, setSessionID] = useState('');
//   const [sessionsData, setSessionsData] = useState({
//     Male: [],
//     Female: [],
//     Angry: []
//   });

//   const [selectedBot, setSelectedBot] = useState('Male'); // Default to 'Male'

//   async function getBotid(bot)
//   {
//     try {
//       let response = await fetch(`/bot_id/${bot}`);

//     if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }

//       let data = await response.json();
//       console.log('Response data:', data);
//       return data.bot_id;
//     } catch (error) {
//         console.error('Fetch error:', error);
//         return null;  // or some default value
//     }
//   }

//   useEffect(() => {
    
//     if (!username || !bot) {
//       // Navigate back or show an error message if user or bot is not provided
//       navigate('../chatbot');
//       return;
//     }

//     // Fetch session ID first
//     const fetchSessionID = async () => {
//       let bot_id = await getBotid(bot); 
//       console.log('Bot ID:', bot_id);   
//       try {
//         const response = await fetch(`/sessions/${username}/${bot_id}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setID(data.SESSION_ID);
//       } catch (error) {
//         console.error('Error fetching session ID:', error);
//       }
//     };

//     fetchSessionID();
//   }, [username, bot, navigate]);


//   useEffect(() => {
//     if (sessionID) {
//       const fetchSessionData = async () => {
//         try {
//           const response = await fetch(`/sessions/${sessionID}`);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           const newSessionsData = { Male: [], Female: [], Angry: [] };

//           data.forEach(session => {
//             if (session.BOT_ID === 1)
//               newSessionsData.Male.push(session.TITLE);
//             else if (session.BOT_ID === 2)
//               newSessionsData.Female.push(session.TITLE);
//             else if (session.BOT_ID === 3)
//               newSessionsData.Angry.push(session.TITLE);
//           });

//           setSessionsData(newSessionsData);
//         } catch (error) {
//           console.error('Error fetching session data:', error);
//         }
//       };

//       fetchSessionData();
//     }
//   }, [sessionID]);

//   const handleTabClick = (bot) => {
//     setSelectedBot(bot);
//   };

//   const handleDelete = async (bot, session) => {
//     try {
//       await fetch(`/delete_session/${session}`, { method: 'DELETE' });
//       setSessionsData(prevData => ({
//         ...prevData,
//         [bot]: prevData[bot].filter(item => item !== session)
//       }));
//     } catch (error) {
//       console.error('Error deleting session:', error);
//     }
//   };

//   function OpenChat(id)
//   {
//     navigate('/chatbot', {state: {"sessionID":id}});
//   }
  
//   const bots = Object.keys(sessionsData);

//   return (
//     <div
//       className="flex justify-center items-center min-h-screen p-4 md:p-8"
//       style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
//     >
//       <button onClick={() => navigate(-1)}>Go Back</button>
//       <div className="w-full max-w-xl bg-white border object-cover border-gray-200 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-8 mx-4 lg:mx-0 lg:ml-auto overflow-hidden max-h-full">
//         <div className="grid grid-cols-3 gap-4 items-center justify-center px-4 sm:px-12">
//           <img
//             className="w-24 h-24 col-span-3 place-self-center mb-4"
//             src={robohead}
//             alt="robo head"
//           />
//           <div className="col-span-3 flex justify-center space-x-4 mb-4">
//             {bots.map((bot) => (
//               <button
//                 key={bot}
//                 className={`p-2 rounded-xl ${bot === selectedBot ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
//                 onClick={() => handleTabClick(bot)}
//               >
//                 {bot}
//               </button>
//             ))}
//           </div>
//           <div className="col-span-3 mt-4 flex flex-col p-2 rounded-lg space-y-4 border-t-2 overflow-y-auto no-scrollbar h-48">
//             {sessionsData[selectedBot].map((session) => (
//               <div key={session} className="bg-gray-200 p-4 rounded-3xl flex justify-between items-center">
//                 <button onClick={() => OpenChat(sessionID)} className="bg-blue-500 text-white p-4 rounded-xl flex-grow">
//                   {session}
//                 </button>
//                 <button className="transparent p-2" onClick={() => handleDelete(selectedBot, session)}>
//                   <img src={deleteIcon} height={30} width={30} alt="delete icon" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hey from "../Images/cute-3d-robot-say-hello-png-removebg-preview.png";
import bgImg from "../Images/BGIMAGE.png";
import robohead from "../Images/RoboHead.jpg";
import deleteIcon from "../Images/delete.png";

export function History() {
  const [sessionID, setSessionID] = useState('');
  const [sessionsData, setSessionsData] = useState({ Male: [], Female: [], Angry: [] });
  const [selectedBot, setSelectedBot] = useState('Male');
  const location = useLocation();
  const navigate = useNavigate();

  let { username, bot } = location.state || {};
  username = username || "";
  bot = bot || "";

  const getBotId = async (bot) => {
    try {
      const response = await fetch(`/bot_id/${bot}`);
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
      const data = await response.json();
      return data.bot_id;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };

  useEffect(() => {
    if (!username || !bot) {
      navigate('../chatbot');
      return;
    }

    const fetchSessionID = async () => {
      const bot_id = await getBotId(bot);
      try {
        const response = await fetch(`/sessions/${username}/${bot_id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setSessionID(data.SESSION_ID);
      } catch (error) {
        console.error('Error fetching session ID:', error);
      }
    };

    fetchSessionID();
  }, [username, bot, navigate]);

  useEffect(() => {
    if (sessionID) {
      const fetchSessionData = async () => {
        try {
          const response = await fetch(`/sessions/${sessionID}`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          const newSessionsData = { Male: [], Female: [], Angry: [] };

          data.forEach(session => {
            if (session.BOT_ID === 1) newSessionsData.Male.push(session.TITLE);
            else if (session.BOT_ID === 2) newSessionsData.Female.push(session.TITLE);
            else if (session.BOT_ID === 3) newSessionsData.Angry.push(session.TITLE);
          });

          setSessionsData(newSessionsData);
        } catch (error) {
          console.error('Error fetching session data:', error);
        }
      };

      fetchSessionData();
    }
  }, [sessionID]);

  const handleDelete = async (bot, session) => {
    try {
      await fetch(`/delete_session/${session}`, { method: 'DELETE' });
      setSessionsData(prevData => ({
        ...prevData,
        [bot]: prevData[bot].filter(item => item !== session)
      }));
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-8 mx-4 lg:mx-0 lg:ml-auto overflow-hidden max-h-full">
        <div className="grid grid-cols-3 gap-4 items-center justify-center px-4 sm:px-12">
          <img className="w-24 h-24 col-span-3 place-self-center mb-4" src={robohead} alt="robo head" />
          <div className="col-span-3 flex justify-center space-x-4 mb-4">
            {Object.keys(sessionsData).map((bot) => (
              <button key={bot} className={`p-2 rounded-xl ${bot === selectedBot ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setSelectedBot(bot)}>
                {bot}
              </button>
            ))}
          </div>
          <div className="col-span-3 mt-4 flex flex-col p-2 rounded-lg space-y-4 border-t-2 overflow-y-auto no-scrollbar h-48">
            {sessionsData[selectedBot].map((session) => (
              <div key={session} className="bg-gray-200 p-4 rounded-3xl flex justify-between items-center">
                <button onClick={() => navigate('/chatbot', { state: { sessionID } })} className="bg-blue-500 text-white p-4 rounded-xl flex-grow">
                  {session}
                </button>
                <button className="transparent p-2" onClick={() => handleDelete(selectedBot, session)}>
                  <img src={deleteIcon} height={30} width={30} alt="delete icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

