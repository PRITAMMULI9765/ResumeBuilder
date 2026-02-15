import React from "react";
 
function ProfessionalTemplate({ data }) {
  return (
    <div className="template professional-template">
      <div className="professional-sidebar">
        <div className="sidebar-content">
          <h2 className="sidebar-title">Contact</h2>
          <div className="sidebar-item">
            {data.email && (
              <p><strong>Email:</strong><br />{data.email}</p>
            )}
            {data.phone && (
              <p><strong>Phone:</strong><br />{data.phone}</p>
            )}
            {data.joblocation && (
              <p><strong>Location:</strong><br />{data.joblocation}</p>
            )}
          </div>
        </div>
      </div>

      <div className="professional-main">
        <div className="professional-header">
          <h1 className="professional-name">{data.fullname || "Your Name"}</h1>
          <p className="professional-title">{data.jobtitle || "Job Title"}</p>
        </div>

        {data.summary && (
          <section className="professional-section">
            <h3 className="professional-section-title">Professional Summary</h3>
            <p className="professional-text">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="professional-section">
            <h3 className="professional-section-title">Experience</h3>
            {data.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ margin: "0 0 4px 0", color: "#2c3e50" }}>{exp.jobTitle || "Job Title"}</h4>
                  <span style={{ fontSize: "12px", color: "#888" }}>{exp.years || ""}</span>
                </div>
                <p style={{ margin: "0 0 6px 0", fontSize: "13px", color: "#555" }}>{exp.company || "Company"}</p>
                {exp.description && <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: "1.5" }}>{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="professional-section">
            <h3 className="professional-section-title">Education</h3>
            {data.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ margin: "0 0 4px 0", color: "#2c3e50" }}>{edu.degree || "Degree"}</h4>
                  <span style={{ fontSize: "12px", color: "#888" }}>{edu.graduationYear || ""}</span>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>{edu.institution || "Institution"}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default ProfessionalTemplate;
