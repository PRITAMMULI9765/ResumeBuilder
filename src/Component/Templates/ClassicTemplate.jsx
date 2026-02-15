import React from "react";

function ClassicTemplate({ data }) {
  return (
    <div className="template classic-template">
      <div className="classic-header">
        <h1 className="classic-name">{data.fullname || "Your Name"}</h1>
        <div className="classic-contact">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span> | {data.phone}</span>}
          {data.joblocation && <span> | {data.joblocation}</span>}
        </div>
      </div>

      <hr className="classic-divider" />

      {data.jobtitle && (
        <section className="classic-section">
          <h3 className="classic-title">Professional Title</h3>
          <p className="classic-content">{data.jobtitle}</p>
        </section>
      )}

      {data.summary && (
        <section className="classic-section">
          <h3 className="classic-title">Professional Summary</h3>
          <p className="classic-content">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="classic-section">
          <h3 className="classic-title">Experience</h3>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="classic-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{exp.jobTitle || "Job Title"}</strong>
                <span>{exp.years || ""}</span>
              </div>
              <p style={{ margin: "4px 0 8px 0", fontSize: "11pt" }}>{exp.company || "Company"}</p>
              {exp.description && <p style={{ margin: 0, fontSize: "10pt", color: "#666" }}>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="classic-section">
          <h3 className="classic-title">Education</h3>
          {data.education.map((edu, idx) => (
            <div key={idx} className="classic-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{edu.degree || "Degree"}</strong>
                <span>{edu.graduationYear || ""}</span>
              </div>
              <p style={{ margin: "4px 0", fontSize: "11pt" }}>{edu.institution || "Institution"}</p>
            </div>
          ))}
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="classic-section">
          <h3 className="classic-title">Skills</h3>
          <p className="classic-content">{data.skills.join(" • ")}</p>
        </section>
      )}
    </div>
  );
}

export default ClassicTemplate;
