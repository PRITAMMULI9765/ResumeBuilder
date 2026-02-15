import React from "react";
import InputComponent from "../commonComponent/InputComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ButtonComponent from "../commonComponent/ButtonComponent";

function PersonalInfoForm({ credentials, handleChange, handleSummaryChange, setCurrentStep }) {
  const { fullname, jobtitle, email, phone, joblocation, summary } = credentials;

  return (
    <>
      <h1 className="personal_info_heading">Personal Information</h1>
      <p className="personal_info_text">
        Add your up-to-date contact information so employers and
        recruiters can easily reach you.
      </p>
      <form>
        <div className="mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <InputComponent
                label="Full Name"
                name="fullname"
                onChange={handleChange}
                value={fullname}
                type="text"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <InputComponent
                label="Email"
                name="email"
                onChange={handleChange}
                value={email}
                type="email"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <InputComponent
                additionalClass="row"
                label="Job Title"
                name="jobtitle"
                onChange={handleChange}
                value={jobtitle}
                type="text"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <InputComponent
                additionalClass="row"
                label="Phone"
                name="phone"
                onChange={handleChange}
                value={phone}
                type="text"
              />
            </div>
          </div>
        </div>
      </form>

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

      <div
        className="d-flex justify-between"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <ButtonComponent
          text="Previous"
          functionaction="previous"
          onClick={() => setCurrentStep("contacts")}
          className="btn btn-outline-primary"
          icon={<ArrowBackIcon />}
        />
        <ButtonComponent
          text="Next"
          functionaction="next"
          onClick={() => setCurrentStep("experience")}
          className="btn btn-outline-primary"
          icon={<ArrowRightAltIcon />}
        />
      </div>
    </>
  );
}

export default PersonalInfoForm;
