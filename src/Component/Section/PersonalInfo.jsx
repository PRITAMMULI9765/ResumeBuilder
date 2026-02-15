import React from "react";
import InputComponent from "../InputComponent";
import { useState } from "react";
import TemplateSelector from "../Templates/TemplateSelector";
import TemplatePreview from "../Templates/TemplatePreview";

function PersonalInfo( {selectedTemplate}) {
    // const { selectedTemplate } = selectedTemplate;
    const [credentials, setCredentials] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phone: "",
    joblocation: "",
    summary: "",
  });

//   const [selectedTemplate, setSelectedTemplate] = useState("modern");

  console.log("selectedTemplate", selectedTemplate);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSummaryChange = (e) => {
    setCredentials({ ...credentials, summary: e.target.value });
  };

  const { fullname, jobtitle, email, phone, joblocation, summary } =
    credentials;

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          {/* Form Section */}
          <div className="form-section">
            {/* <TemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            /> */}

            <h2 className="personal_info_heading">Personal Information</h2>
            <InputComponent
              additionalClass="row"
              label="Full Name"
              name="fullname"
              onChange={handleChange}
              value={fullname}
              type="text"
              labelSpace="col-lg-3 col-md-3 col-sm-12"
              inputSpace="col-lg-9 col-md-9 col-sm-12"
            />

            <InputComponent
              additionalClass="row"
              label="Job Title"
              name="jobtitle"
              onChange={handleChange}
              value={jobtitle}
              type="text"
              labelSpace="col-lg-3 col-md-3 col-sm-12"
              inputSpace="col-lg-9 col-md-9 col-sm-12"
            />

            <h2 className="personal_info_heading">Contact Information</h2>
            <InputComponent
              additionalClass="row"
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
              type="email"
              labelSpace="col-lg-3 col-md-3 col-sm-12"
              inputSpace="col-lg-9 col-md-9 col-sm-12"
            />

            <InputComponent
              additionalClass="row"
              label="Phone"
              name="phone"
              onChange={handleChange}
              value={phone}
              type="text"
              labelSpace="col-lg-3 col-md-3 col-sm-12"
              inputSpace="col-lg-9 col-md-9 col-sm-12"
            />

            <InputComponent
              additionalClass="row"
              onChange={handleChange}
              name="joblocation"
              label="Job location"
              value={joblocation}
              type="text"
              labelSpace="col-lg-3 col-md-3 col-sm-12"
              inputSpace="col-lg-9 col-md-9 col-sm-12"
            />

            <h2 className="personal_info_heading">Professional Summary</h2>
            <div className="row">
              <div className="col-lg-12">
                <textarea
                  className="form-control"
                  name="summary"
                  id="summaryTextarea"
                  rows="5"
                  placeholder="Write a brief professional summary about yourself..."
                  onChange={handleSummaryChange}
                  value={summary}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          {/* Template Preview Section */}
          <div className="preview-section">
            <h2 className="preview-heading">Preview</h2>
            <div className="preview-container">
              <TemplatePreview templateType={selectedTemplate} data={credentials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
