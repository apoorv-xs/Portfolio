import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onViewProject: () => void;
}

const ProjectCard = ({ title, description, image, onViewProject }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <Card className="overflow-hidden transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title || "Project image"}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <Button
            variant="outline"
            onClick={onViewProject}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
