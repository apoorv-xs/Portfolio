import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
}

const SkillCard = ({ icon: Icon, title }: SkillCardProps) => {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-8 text-center space-y-4">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon size={32} />
        </div>
        <h3 className="font-medium text-foreground text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default SkillCard;