import React from "react";

function ModernTemplate({ data }) {
  return (
    <div className="template modern-template">
      <div className="template-header">
        <div className="header-content">
          <h1 className="candidate-name">{data.fullname || "Your Name"}</h1>
          <p className="job-title">{data.jobtitle || "Job Title"}</p>
        </div>
      </div>

      <div className="template-body">
        <section className="contact-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="contact-items">
            {data.email && <p><strong>Email:</strong> {data.email}</p>}
            {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
            {data.joblocation && <p><strong>Location:</strong> {data.joblocation}</p>}
          </div>
        </section>

        {data.summary && (
          <section className="summary-section">
            <h3 className="section-title">Professional Summary</h3>
            <p className="summary-text">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="experience-section">
            <h3 className="section-title">Experience</h3>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="exp-header">
                  <h4 className="exp-title">{exp.jobTitle || "Job Title"}</h4>
                  <span className="exp-date">{exp.years || ""}</span>
                </div>
                <p className="exp-company">{exp.company || "Company"}</p>
                {exp.description && <p className="exp-description">{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="education-section">
            <h3 className="section-title">Education</h3>
            {data.education.map((edu, idx) => (
              <div key={idx} className="education-item">
                <div className="edu-header">
                  <h4 className="edu-degree">{edu.degree || "Degree"}</h4>
                  <span className="edu-date">{edu.graduationYear || ""}</span>
                </div>
                <p className="edu-institution">{edu.institution || "Institution"}</p>
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="skills-section">
            <h3 className="section-title">Skills</h3>
            <div className="skills-list">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ModernTemplate;
