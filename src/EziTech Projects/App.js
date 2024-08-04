import { Route, Routes } from "react-router-dom";
import {Login} from './Projects/Login';
import {SignUp} from './Projects/SignUp';
import { Selection } from "./Projects/SelectionScreen";
import { Chatbot } from "./Projects/Chatbot";
import Landingpage from "./EziTech Projects/Landingpage";

function App() {
  return(
    <>
      <Landingpage />
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="selection" element={<Selection />}></Route>
        <Route path="chatbot" element={<Chatbot />}></Route>
      </Routes> */}
    </>
      
  );
}

export default App;
