import TemplateSelector from "../Templates/TemplateSelector";
import TemplatePreview from "../Templates/TemplatePreview";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
function SelectTemplatePage({ selectedTemplate, setSelectedTemplate }) {
  const navigate = useNavigate();
  const handleSelect = (id) => {
    setSelectedTemplate(id);
    console.log("Selected Template ID:", id);
    // navigate("/personalInfo");
  };

  const sampleData = {
    fullname: "John Doe",
    jobtitle: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    joblocation: "New York, NY",
    summary:
      "Passionate frontend developer with 5+ years building responsive web applications. Skilled in React, JavaScript, and modern UX principles.",
    experience: [
      {
        jobTitle: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        years: "2022 - Present",
        description: "Led development of React applications and mentored junior developers"
      },
      {
        jobTitle: "Frontend Developer",
        company: "Digital Innovations",
        years: "2020 - 2022",
        description: "Built responsive web interfaces using modern web technologies"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "State University",
        graduationYear: "2020"
      },
      {
        degree: "High School Diploma",
        institution: "Central High School",
        graduationYear: "2016"
      }
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Node.js", "TypeScript", "Firebase", "UI/UX Design"]
  };

  return (
    <div className="select-page" style={{ display: "flex", gap: 24 }}>
      <div className="selector-column" style={{ flex: 1 }}>
        <TemplateSelector selectedTemplate={selectedTemplate} onSelectTemplate={handleSelect} />
      </div>
      <div className="preview-column" style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Sample Preview</h3>
        <TemplatePreview templateType={selectedTemplate} data={sampleData} />
      </div>
    </div>
  );
}

export default SelectTemplatePage;