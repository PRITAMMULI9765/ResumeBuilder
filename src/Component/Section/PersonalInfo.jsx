import React from "react";
import InputComponent from "../commonComponent/InputComponent";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TemplateSelector from "../Templates/TemplateSelector";
import TemplatePreview from "../Templates/TemplatePreview";
import ProgressBar from "./ProgressBar";
import ButtonComponent from "../commonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

function PersonalInfo({ selectedTemplate, currentStep, setCurrentStep }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phone: "",
    joblocation: "",
    summary: "",
  });

  console.log("selectedTemplate", selectedTemplate);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSummaryChange = (e) => {
    setCredentials({ ...credentials, summary: e.target.value });
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-section">
            <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} credentials={credentials} handleChange={handleChange} handleSummaryChange={handleSummaryChange} />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          {/* Template Preview Section */}
          <div className="preview-section">
            <h2 className="preview-heading">Preview</h2>
            <div className="preview-container">
              <TemplatePreview
                templateType={selectedTemplate}
                data={credentials}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
