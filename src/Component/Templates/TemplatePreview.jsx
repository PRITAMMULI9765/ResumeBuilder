import React from "react";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";

function TemplatePreview({ templateType, data }) {
  const renderTemplate = () => {
    switch (templateType) {
      case "modern":
        return <ModernTemplate data={data} />;
      case "classic":
        return <ClassicTemplate data={data} />;
      case "minimal":
        return <MinimalTemplate data={data} />;
      case "professional":
        return <ProfessionalTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return <div className="template-preview-container">{renderTemplate()}</div>;
}

export default TemplatePreview;
