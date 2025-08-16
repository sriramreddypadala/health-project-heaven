import { ExternalLink, UserCheck, Video, Heart, Calendar, Pill, FileText, Activity, Bot } from "lucide-react";
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
  index: number;
}

const iconMap = {
  "user-check": UserCheck,
  "video": Video,
  "heart": Heart,
  "calendar": Calendar,
  "pill": Pill,
  "file-text": FileText,
  "activity": Activity,
  "bot": Bot,
};

const colorVariants = {
  primary: "from-teal-500 to-cyan-500",
  success: "from-emerald-500 to-teal-500",
  accent: "from-blue-500 to-indigo-500",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Heart;
  const gradientClass = colorVariants[project.color as keyof typeof colorVariants] || colorVariants.primary;

  const handleOpenProject = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="group h-full bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.05] rounded-3xl overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-8 h-full flex flex-col relative">
        {/* Gradient Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Icon with Circular Glow */}
        <div className="relative mb-6">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${gradientClass} opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl`}></div>
        </div>
        
        <div className="flex-1 mb-8 relative z-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
            {project.name}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        <Button
          onClick={handleOpenProject}
          className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-2xl font-semibold py-4 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group border-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="mr-3 relative z-10">Open Project</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;