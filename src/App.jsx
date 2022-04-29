import React, { useState } from "react";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import NotFound from "./NotFound";
import { Navigate } from "react-router-dom";
import AssignmentFullDetail from "./AssignmentFullDetail";
import StudentsList from "./StudentsList";
import ProfileRow from "./ProfileRow";
import AlertContext from "./AlertContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./Alert";

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const alertData = { message: alertMessage, setMessage: setAlertMessage };

  return (
    <AlertContext.Provider value={alertData}>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/lecture" />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="lecture" element={<LectureList />} />
            <Route path="assignment" element={<AssignmentList />} />
            <Route path="assignment/:id" element={<AssignmentFullDetail />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="profile" element={<ProfileRow />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AlertContext.Provider>
  );
}

export default App;
