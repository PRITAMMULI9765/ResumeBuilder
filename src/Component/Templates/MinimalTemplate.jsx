import React from "react";

function MinimalTemplate({ data }) {
  return (
    <div className="template minimal-template">
      <div className="minimal-header">
        <div className="minimal-top">
          <h1 className="minimal-name">{data.fullname || "Your Name"}</h1>
          <p className="minimal-title">{data.jobtitle || "Professional"}</p>
        </div>
        <div className="minimal-contact">
          {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
          {data.phone && <span>{data.phone}</span>}
          {data.joblocation && <span>{data.joblocation}</span>}
        </div>
      </div>

      <div className="minimal-body">
        {data.summary && (
          <section className="minimal-section">
            <h4 className="minimal-section-title">About</h4>
            <p>{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="minimal-section">
            <h4 className="minimal-section-title">Experience</h4>
            {data.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong>{exp.jobTitle || "Job Title"}</strong>
                  <span style={{ fontSize: "12px", color: "#999" }}>{exp.years || ""}</span>
                </div>
                <p style={{ margin: "0 0 2px 0", fontSize: "13px" }}>{exp.company || "Company"}</p>
                {exp.description && <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="minimal-section">
            <h4 className="minimal-section-title">Education</h4>
            {data.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong>{edu.degree || "Degree"}</strong>
                  <span style={{ fontSize: "12px", color: "#999" }}>{edu.graduationYear || ""}</span>
                </div>
                <p style={{ margin: 0, fontSize: "13px" }}>{edu.institution || "Institution"}</p>
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="minimal-section">
            <h4 className="minimal-section-title">Skills</h4>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.7" }}>{data.skills.join(", ")}</p>
          </section>
        )}
      </div>
    </div>
  );
}

export default MinimalTemplate;
