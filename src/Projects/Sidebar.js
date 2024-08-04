import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, data }) => {
  let navigate = useNavigate();
  
  function MoveToHistory()
  {
    if (!data) {
      console.error('Data is undefined or null');
      return;
    }
    alert(data)

    let value = data;
    navigate('/history', {state:{value}})
  }

  function MoveToSelection()
  {
    navigate('/selection', {state: {data}});
  }

  return (
    <div
      className={`fixed top-0 left-0 h-full w-3/4 md:w-1/4 bg-white p-8 shadow-2xl flex flex-col justify-between rounded-2xl transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div>
        <h2 className="text-xl font-bold mb-4">Chat Settings</h2>
        
        <button className="w-full py-2 mb-2 bg-green-500 text-white rounded-lg" onClick={MoveToSelection}>New Session</button>
        {/* <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded-lg">Analytics</button> */}
        <button className="w-full py-2 mb-2 bg-blue-300 text-black rounded-lg" onClick={MoveToHistory}>Chat History</button>
         
      </div>
      
      <button className="w-full py-2 bg-red-500 text-white rounded-lg" onClick={()=>{
        navigate('../selection', {state:{data}})
      }}>Abort Session</button>
    </div>
  );
};

export default Sidebar;
