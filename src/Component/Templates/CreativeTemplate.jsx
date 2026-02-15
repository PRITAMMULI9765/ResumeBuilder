import React from "react";

function CreativeTemplate({ data }) {
  return (
    <div className="template creative-template">
      <div className="creative-banner">
        <div className="creative-content">
          <h1 className="creative-name">{data.fullname || "Your Name"}</h1>
          <p className="creative-tagline">{data.jobtitle || "Creative Professional"}</p>
        </div>
      </div>

      <div className="creative-body">
        <div className="creative-info">
          {data.email && (
            <div className="creative-item">
              <span className="creative-icon">✉</span>
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="creative-item">
              <span className="creative-icon">☎</span>
              <span>{data.phone}</span>
            </div>
          )}
          {data.joblocation && (
            <div className="creative-item">
              <span className="creative-icon">📍</span>
              <span>{data.joblocation}</span>
            </div>
          )}
        </div>

        {data.summary && (
          <section className="creative-section">
            <h3 className="creative-section-title">About Me</h3>
            <p className="creative-text">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="creative-section">
            <h3 className="creative-section-title">Experience</h3>
            {data.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ margin: "0 0 4px 0", color: "#667eea" }}>{exp.jobTitle || "Job Title"}</h4>
                  <span style={{ fontSize: "12px", color: "#999" }}>{exp.years || ""}</span>
                </div>
                <p style={{ margin: "0 0 4px 0", fontSize: "13px", fontWeight: "500" }}>{exp.company || "Company"}</p>
                {exp.description && <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: "1.5" }}>{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="creative-section">
            <h3 className="creative-section-title">Education</h3>
            {data.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ margin: "0 0 4px 0", color: "#667eea" }}>{edu.degree || "Degree"}</h4>
                  <span style={{ fontSize: "12px", color: "#999" }}>{edu.graduationYear || ""}</span>
                </div>
                <p style={{ margin: 0, fontSize: "13px" }}>{edu.institution || "Institution"}</p>
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="creative-section">
            <h3 className="creative-section-title">Skills</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {data.skills.map((skill, idx) => (
                <span key={idx} className="creative-skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CreativeTemplate;
