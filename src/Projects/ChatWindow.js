import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ChatWindow = ({ messages, onSendMessage }) => {
  const location  =  useLocation();
  const bot = location.state.bot;
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  return (
    <div className="w-full h-full md:w-full md:h-full p-4 flex flex-col">
      <div className="flex-grow overflow-y-scroll max-h-[80%] p-4 bg-white rounded-2xl shadow-2xl no-scrollbar">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 m-2 rounded-lg ${message.sender === 'user' ? 'bg-[#03A9F4] text-white max-w-[60%]' : 'bg-[#696969] text-white max-w-[60%]'}`}>
              {message.text+'['+message.emotion+']'}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ہیلو آپ کیسے ہیں؟'',"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
