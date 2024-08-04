// import React, { useState, useEffect } from 'react';
// import ChatWindow from './ChatWindow';
// import Sidebar from './Sidebar';
// import { Alert } from '@material-tailwind/react';
// import { useLocation } from 'react-router-dom';

// export const Chatbot = (props) => {

//   const location = useLocation();
  
//   const bot = location.state.bot;
//   const user = location.state.user;
//   const session = location.state.sessionID;

//   const ValuesToPass = {
//     "user": user,
//     "bot": bot
//   }

//   async function getMessages()
//   {
//     let response = await fetch(`/messages/${session}`);
//     if(response.ok)
//     {
//       alert(response);
//     }
//   } 
//   const [sessionId, setSessionID] = useState('')
//   const [messages, setMessages] = useState([]);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [emotion, setEmotions] = useState('');
//   useEffect(() => {


//     alert(bot);
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 576);
//       if (window.innerWidth > 576) {
//         setIsSidebarOpen(false); // Close the sidebar if screen size increases
//       }
//     };

//     // Initial check
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   async function get_emotion(message)
//   {
//     let response = await fetch('/get_emotion', {
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify(message)
//     })

//     var dat = await response.json();
//     return dat.emotion;
//   }


//   //Save Message in database
//   async function SaveMessage(message)
//   {
//     let date = new Date()
//     setEmotions(get_emotion(message))
//     let MessageData = {
//       "emotion": emotion,
//       "source": message.sender,
//       "text": message.text,
//       "entry_date": date.getDate(),
//       "session_id": `${sessionId}`
//     }

//     try{
//       const response = await fetch('/savemessages', {
//         method:'POST',
//         headers:{
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify(MessageData)
//       })
//     }catch(error)
//     {
//       alert(error);
//     }
//   }

//   //Get Bot Response
//   async function getBotMessage(message)
//   {
//     let data = { "sentence":message, "type": bot }
//     try {
//       const response = await fetch('/generateReply',{
//         method:"POST",
//         headers:{
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify(data)
//       });

//       let responseData = await response.json()
//       return responseData; // Assuming the API returns a JSON with a 'message' field
//     } catch (error) {
//       console.error('Error fetching bot message:', error);
//       return 'Error fetching bot message';
//     }
//   }

//   const handleSendMessage = async (message) => {
    
//     let currentMessage = { sender: 'user', text: `${message}`, emotion: emotion }
    
//     // setMessages((prevMessages) => [...prevMessages, currentMessage]);
//     messages.push(currentMessage)
//     if(messages.length > 0)
//     {
//         let Sessiondata = {
//           "title":message,
//           "userId": await fetch(`/user_id/${user}`),
//           "bot_id": await fetch(`/bot_id/${bot}`)
//         }
        
//         let session = await fetch('/create_session',{
//           method:"POST",
//           headers:{
//           'Content-Type':'application/json'
//           },
//           body:JSON.stringify(Sessiondata)
//         })
        
//         let result = await session.json();
//         setSessionID(result.sessionId);
//       }
//       SaveMessage(currentMessage);

//     // Simulate bot response
//     setTimeout(async () => {
//       var botMessage = await getBotMessage(message)
//       let botM= { sender: 'bot', text: botMessage.reply, emotion: emotion }
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         botM
//       ]);

//       SaveMessage(botM)
//     }, 300);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row p-4 md:p-0 md:pl-4 md:pr-4 pt-8 pb-8 relative overflow-hidden">
//       {/* Sidebar */}
//       {isSmallScreen ? (
//         <>
//           <button
//             className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-md md:hidden"
//             onClick={toggleSidebar}
//           >
//             {/* Hamburger Menu Icon */}
//             <div className="space-y-1">
//               <span className="block w-6 h-0.5 bg-white"></span>
//               <span className="block w-6 h-0.5 bg-white"></span>
//               <span className="block w-6 h-0.5 bg-white"></span>
//             </div>
//           </button>
//           <div
//             className={`fixed inset-0 z-40 flex transition-transform transform ${
//               isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//             }`}
//           >
//             <div className="fixed inset-0" onClick={toggleSidebar}></div>
//             <div className="relative w-3/4 max-w-xs bg-white p-8 shadow-2xl flex flex-col justify-between z-50">
//               <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} data= {ValuesToPass} />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="w-1/4">
//           <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} data = {ValuesToPass}/>
//         </div>
//       )}

//       {/* Chat Window */}
//       <div
//         className={`flex-1 ${
//           isSmallScreen && isSidebarOpen ? 'hidden' : 'block'
//         } ${isSmallScreen ? 'absolute inset-0' : 'relative'}`}
//       >
//         <ChatWindow messages={messages} onSendMessage={handleSendMessage} className="w-full h-full" />
//       </div>
//     </div>
//   );
// };

// //export default Chatbot;

import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

export const Chatbot = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bot, user, sessionID } = location.state || {};
  const [sessionId, setSessionID] = useState(sessionID);
  const [messages, setMessages] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [emotion, setEmotion] = useState('');

  useEffect(() => {
    if (!bot || !user) {
      navigate('/chatbot'); // Redirect to an error page or handle the error appropriately
      return;
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
      if (window.innerWidth > 576) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bot, user, navigate]);

  const getEmotion = async (message) => {
    const response = await fetch('/get_emotion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data.emotion;
  };

  const saveMessage = async (message) => {
    const date = new Date();
    const emotion = await getEmotion(message);
    const messageData = {
      emotion,
      source: message.sender,
      text: message.text,
      entry_date: date.toISOString(),
      session_id: sessionId,
    };

    try {
      await fetch('/savemessages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const getBotMessage = async (message) => {
    const response = await fetch('/generateReply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentence: message, type: bot }),
    });
    const data = await response.json();
    return data.reply;
  };

  const handleSendMessage = async (messageText) => {
    const userMessage = { sender: 'user', text: messageText, emotion };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    if (!sessionId) {
      const sessionData = {
        title: messageText,
        userId: (await (await fetch(`/user_id/${user}`)).json()).id,
        bot_id: (await (await fetch(`/bot_id/${bot}`)).json()).id,
      };
      const response = await fetch('/create_session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sessionData),
      });
      const result = await response.json();
      setSessionID(result.sessionId);
    }

    await saveMessage(userMessage);

    const botReply = await getBotMessage(messageText);
    const botMessage = { sender: 'bot', text: botReply, emotion };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    await saveMessage(botMessage);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-4 md:p-0 md:pl-4 md:pr-4 pt-8 pb-8 relative overflow-hidden">
      {isSmallScreen ? (
        <>
          <button
            className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-md md:hidden"
            onClick={toggleSidebar}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
          <div
            className={`fixed inset-0 z-40 flex transition-transform transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="fixed inset-0" onClick={toggleSidebar}></div>
            <div className="relative w-3/4 max-w-xs bg-white p-8 shadow-2xl flex flex-col justify-between z-50">
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} data={{ user, bot }} />
            </div>
          </div>
        </>
      ) : (
        <div className="w-1/4">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} data={{ user, bot }} />
        </div>
      )}

      <div
        className={`flex-1 ${
          isSmallScreen && isSidebarOpen ? 'hidden' : 'block'
        } ${isSmallScreen ? 'absolute inset-0' : 'relative'}`}
      >
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} className="w-full h-full" />
      </div>
    </div>
  );
};
