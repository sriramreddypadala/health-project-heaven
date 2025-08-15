import { ExternalLink, UserCheck, Video, Heart, Calendar, Pill, FileText, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

const iconMap = {
  "user-check": UserCheck,
  "video": Video,
  "heart": Heart,
  "calendar": Calendar,
  "pill": Pill,
  "file-text": FileText,
  "activity": Activity,
};

const colorVariants = {
  primary: "from-primary/10 to-primary-glow/5",
  success: "from-success/10 to-success/5",
  accent: "from-accent/20 to-accent/10",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Heart;
  const gradientClass = colorVariants[project.color as keyof typeof colorVariants] || colorVariants.primary;

  const handleOpenProject = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group h-full bg-gradient-card border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] hover:bg-white rounded-2xl overflow-hidden animate-fade-in">
      <CardContent className="p-6 h-full flex flex-col">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
        
        <div className="flex-1 mb-6">
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <Button
          onClick={handleOpenProject}
          variant="default"
          size="lg"
          className="w-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
        >
          <span className="mr-2">Open Project</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;