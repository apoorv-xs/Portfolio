import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
  onViewProject?: () => void;
}

const PortfolioCard = ({
  title,
  description,
  image,
  delay = 0,
  onViewProject,
}: PortfolioCardProps) => {
  return (
    <motion.div
      className="group overflow-hidden rounded-lg bg-background shadow-md cursor-pointer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.18, // fast entry
        ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ scale: 0.985 }}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-150">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <Button
          variant="outline"
          onClick={onViewProject}
          className="w-full transition-transform duration-150 hover:scale-[1.02] hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          View Project
        </Button>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
