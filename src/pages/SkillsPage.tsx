import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';

const SkillsPage = () => {
  const skillsData = {
    uiux: {
      title: "UI/UX Design",
      skills: [
        { name: "User Research", proficiency: 95 },
        { name: "Wireframing & Prototyping", proficiency: 90 },
        { name: "Information Architecture", proficiency: 85 },
        { name: "Usability Testing", proficiency: 80 },
        { name: "Interaction Design", proficiency: 90 }
      ]
    },
    frontend: {
      title: "Front-end Development",
      skills: [
        { name: "HTML & CSS", proficiency: 95 },
        { name: "JavaScript (React)", proficiency: 85 },
        { name: "Responsive Design", proficiency: 90 }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Python (Django/Flask)", proficiency: 80 },
        { name: "Database Design", proficiency: 90 },
        { name: "API Development", proficiency: 85 },
        { name: "Server Management", proficiency: 75 }
      ]
    },
    tools: {
      title: "Tools & Software",
      skills: [
        { name: "Figma", proficiency: 95 },
        { name: "Sketch", proficiency: 80 },
        { name: "Adobe XD", proficiency: 75 },
        { name: "Miro", proficiency: 70 },
        { name: "Git", proficiency: 90 }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Skills Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-16 fade-in-up">
            My Skills & Expertise
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* UI/UX Design Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">{skillsData.uiux.title}</h2>
              <div className="space-y-4">
                {skillsData.uiux.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Front-end Development Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up-delay-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">{skillsData.frontend.title}</h2>
              <div className="space-y-4">
                {skillsData.frontend.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Development Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up-delay-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">{skillsData.backend.title}</h2>
              <div className="space-y-4">
                {skillsData.backend.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Software Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up-delay-3">
              <h2 className="text-2xl font-bold text-foreground mb-6">{skillsData.tools.title}</h2>
              <div className="space-y-4">
                {skillsData.tools.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillsPage;
