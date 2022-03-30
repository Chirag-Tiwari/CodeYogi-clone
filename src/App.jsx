import React from "react";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import NotFound from "./NotFound";
import { Navigate } from "react-router-dom";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/lecture"/>}/>
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/" element ={<MainLayout/>}>
           <Route path="lecture" element={<LectureList/>}/>
           <Route path="assignment" element={<AssignmentList/>}/>
        </Route>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
