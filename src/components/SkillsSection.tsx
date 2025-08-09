import { Palette, Code, Database, Layout, Figma, GitBranch } from "lucide-react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const SkillsSection = () => {
  const skills = [
    { icon: Palette, title: "UI/UX Design" },
    { icon: Code, title: "Front-end Dev" },
    { icon: Database, title: "Back-end Dev" },
    { icon: Layout, title: "Wireframing" },
    { icon: Figma, title: "Prototyping" },
    { icon: GitBranch, title: "Git & GitHub" },
  ];

  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: reduce ? 0.3 : 1.0, ease: [0.12, 0, 0.39, 0] }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-bodyCondensed">
            My Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: reduce ? 0.3 : 1.0, ease: [0.12, 0, 0.39, 0] }}
            >
              <SkillCard icon={skill.icon} title={skill.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;