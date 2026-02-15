import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function TemplateSelector({ selectedTemplate, onSelectTemplate }) {
  const navigate = useNavigate();
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Bold gradient header with clean sections",
      icon: "🎨",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Timeless professional format",
      icon: "📄",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and elegant design",
      icon: "✨",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Sidebar with color scheme",
      icon: "💼",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Colorful and vibrant style",
      icon: "🎭",
    },
  ];

  return (
    <div className="template-selector-container">
      <h2 className="selector-title">Choose Your Resume Template</h2>
      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? "active" : ""}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="template-icon">{template.icon}</div>
            <h3 className="template-name">{template.name}</h3>
            <p className="template-description">{template.description}</p>
            {selectedTemplate === template.id && (
              <div className="selected-badge">✓ Selected</div>
            )}
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>

      <button
        onClick={() => navigate("/personalInfo")}
        style={{borderRadius: "0px"}}
        className="btn btn-outline-primary"
        >
        next <ArrowRightAltIcon />
      </button>
          </div>
    </div>
  );
}

export default TemplateSelector;
