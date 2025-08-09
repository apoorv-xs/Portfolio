export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillsCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillsPageData {
  uiux: SkillsCategory;
  frontend: SkillsCategory;
  backend: SkillsCategory;
  tools: SkillsCategory;
}

// Edit all of your Skills page content here
export const skillsData: SkillsPageData = {
  uiux: {
    title: "UI/UX Design",
    skills: [
      { name: "User Research", proficiency: 95 },
      { name: "Wireframing & Prototyping", proficiency: 90 },
      { name: "Information Architecture", proficiency: 85 },
      { name: "Usability Testing", proficiency: 85 },
      { name: "Interaction Design", proficiency: 90 },
    ],
  },
  frontend: {
    title: "Front-end Development",
    skills: [
      { name: "HTML & CSS", proficiency: 95 },
      { name: "JavaScript (React)", proficiency: 85 },
      { name: "Responsive Design", proficiency: 90 },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 50 },
      { name: "Python (Django/Flask)", proficiency: 50 },
      { name: "Database Design", proficiency: 50 },
      { name: "API Development", proficiency: 60 },
    ],
  },
  tools: {
    title: "Tools & Software",
    skills: [
      { name: "Figma", proficiency: 95 },
      { name: "Adobe XD", proficiency: 80 },
      { name: "VS Code", proficiency: 75 },
      { name: "Collab", proficiency: 70 },
      { name: "Git", proficiency: 90 },
    ],
  },
};

export default skillsData;
