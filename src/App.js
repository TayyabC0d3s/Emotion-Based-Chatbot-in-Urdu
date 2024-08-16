import { Route, Routes } from "react-router-dom";
// import {Login} from './Projects/Login';
// import {SignUp} from './Projects/SignUp';
// import { Selection } from "./Projects/SelectionScreen";
// import { Chatbot } from "./Projects/Chatbot";
// import Landingpage from "./EziTech Projects/Landingpage";
// import { History } from "./Projects/History";

import {Login} from './NLP ITSolera/Login'
import { PersonalInfo } from "./NLP ITSolera/PersonalInfo";
import WorkExperience from "./NLP ITSolera/WorkExp";
import Education from "./NLP ITSolera/Education";
import SkillsForm from "./NLP ITSolera/Skills";
import Resume from "./NLP ITSolera/Resume";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="personalInformation" element={<PersonalInfo />}></Route>
        <Route path="workExperience" element={<WorkExperience />}></Route>
        <Route path="Education" element={<Education />}></Route>
        <Route path="Skills" element={<SkillsForm />}></Route>
        <Route path="Resume" element={<Resume />}></Route>
      </Routes>
    </>
      
  );
}

export default App;
