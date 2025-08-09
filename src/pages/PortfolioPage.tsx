import Navigation from '@/components/Navigation';
import PortfolioCard from '@/components/PortfolioCard';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useProjects } from "@/hooks/use-projects";

// Data is now sourced from a single place (src/data/projects.ts)

const PortfolioPage = () => {
  const { toast } = useToast();
  const portfolioRef = useRef(null);
  const isInView = useInView(portfolioRef, { amount: 0.3 });
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const { projects: portfolioProjects } = useProjects();

  const handleProjectView = (projectTitle: string) => {
    toast({
      title: "Project Preview",
      description: `Opening ${projectTitle} details. This would typically open a detailed project page.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* About Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: scrollDirection === "down" ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            My Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: scrollDirection === "down" ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            Explore my latest design projects and creative solutions. I specialize in creating beautiful, 
            functional digital experiences that solve real-world problems.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} id="portfolio" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: scrollDirection === "down" ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            Projects
          </motion.h2>
          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => {
              // Create staggered animations based on grid position
              let initial, animate;
              const row = Math.floor(index / 3);
              const col = index % 3;
              
              if (col === 0) {
                initial = { opacity: 0, x: -60 };
                animate = { opacity: 1, x: 0 };
              } else if (col === 1) {
                initial = { opacity: 0, y: scrollDirection === "down" ? -60 : 60 };
                animate = { opacity: 1, y: 0 };
              } else {
                initial = { opacity: 0, x: 60 };
                animate = { opacity: 1, x: 0 };
              }
              
              return (
                <motion.div
                  key={project.title}
                  initial={initial}
                  whileInView={animate}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
                >
                  <PortfolioCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    onViewProject={() => handleProjectView(project.title)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 pb-20 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center pt-8">
          <motion.h2 
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems', 'Responsive Design', 'Accessibility', 'Brand Design', 'Animation'].map((skill, index) => (
              <motion.div 
                key={skill} 
                className="p-4 bg-card rounded-lg border border-card-border hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
              >
                <p className="font-medium text-foreground">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 pb-4">
        <div className="max-w-6xl mx-auto text-center py-16">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            Ready to bring your ideas to life? Let's discuss your next project.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
          >
            <button 
              onClick={() => toast({ title: "Contact Info", description: "Email: hello@designer.com" })}
              className="btn-primary px-8 py-3 text-primary-foreground font-medium rounded-lg hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => toast({ title: "Download", description: "Resume download would start here." })}
              className="px-8 py-3 border border-card-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 rounded-lg"
            >
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
