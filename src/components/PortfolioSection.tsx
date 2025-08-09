import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
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

  // Fetch projects from API with static fallback
  const { projects: allProjects } = useProjects();
  // Featured should always reflect the first three portfolio items
  const featured = allProjects.slice(0, 3);

  const handleViewProject = (projectTitle: string) => {
    // In a real app, this would navigate to the project detail page
    console.log(`Viewing project: ${projectTitle}`);
  };

  const handleViewAllProjects = () => {
    // In a real app, this would navigate to a full portfolio page
    console.log("Viewing all projects");
  };

  return (
    <section ref={ref} id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: scrollDirection === "down" ? -40 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project, index) => {
            // Create staggered animations based on grid position
            let initial, animate;
            if (index === 0) {
              initial = { opacity: 0, x: -60 };
              animate = { opacity: 1, x: 0 };
            } else if (index === 1) {
              initial = { opacity: 0, y: scrollDirection === "down" ? -60 : 60 };
              animate = { opacity: 1, y: 0 };
            } else {
              initial = { opacity: 0, x: 60 };
              animate = { opacity: 1, x: 0 };
            }
            return (
              <motion.div
                key={index}
                initial={initial}
                whileInView={animate}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  onViewProject={() => handleViewProject(project.title)}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={handleViewAllProjects}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;