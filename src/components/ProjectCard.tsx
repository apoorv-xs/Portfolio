import { sanitizeExternalUrl } from "@/lib/security";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onViewProject: () => void;
  url?: string;
}

const ProjectCard = ({ title, description, image, onViewProject, url }: ProjectCardProps) => {
  const safeUrl = sanitizeExternalUrl(url);
  return (
    <motion.div
      className="group overflow-hidden rounded-lg bg-background shadow-md cursor-pointer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{
        scale: 1.015,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)",
        transition: { type: "spring", stiffness: 250, damping: 22 },
      }}
      whileTap={{ scale: 0.99 }}
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
          <h3 className="text-xl font-heading font-extrabold text-foreground tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-bodyCondensed">
            {description}
          </p>
          {safeUrl ? (
            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground font-bodyCondensed tracking-wide"
            >
              View Project
            </a>
          ) : (
            <Button
              variant="outline"
              onClick={onViewProject}
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Project
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
