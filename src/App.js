import logo from "./logo.svg";
import "./App.css";
import Signup from "./Auth/Signup";
import PersonalInfo from "./Component/Section/PersonalInfo";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SelectTemplatePage from "./Component/Section/SelectTemplate";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [currentStep, setCurrentStep] = useState("contacts");

  return (
    <Router>
      <div className="common_container">
        <Routes>
          <Route
            path="/"
            element={<SelectTemplatePage selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />}
          />
          <Route
            path="/personalInfo"
            element={<PersonalInfo selectedTemplate={selectedTemplate} onSelectTemplate={setSelectedTemplate} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
