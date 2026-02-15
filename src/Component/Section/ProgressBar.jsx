import React from "react";
import Experience from "./Experience";
import PersonalInfoForm from "./PersonalInfoForm";

function ProgressBar({ currentStep, setCurrentStep, credentials, handleChange, handleSummaryChange }) {
  const steps = [
    { label: "Contacts", key: "contacts" },
    { label: "Experience", key: "experience" },
    { label: "Education", key: "education" },
    { label: "Skills", key: "skills" },
    { label: "Summary", key: "summary" },
    { label: "Finalize", key: "finalize" }
  ];

  const stepOrder = steps.map(s => s.key);
  const currentStepIndex = stepOrder.indexOf(currentStep);
  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-steps">
        {steps.map((step, index) => (
          <div
            key={step.key}
            className={`progress-step ${step.key === currentStep ? "active" : ""} ${
              index < currentStepIndex ? "completed" : ""
            }`}
          >
            <div className="step-label">{step.label}</div>
            {/* <div className="step-number">{step.id}</div> */}
          </div>
        ))}
      </div>
      <div className="progress-line-container">
        <div className="progress-line" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="component-container">
        {currentStep === "contacts" && (
          <PersonalInfoForm 
            credentials={credentials} 
            handleChange={handleChange} 
            handleSummaryChange={handleSummaryChange}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === "experience" && (
          <Experience setCurrentStep={setCurrentStep} />
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
