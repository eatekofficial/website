import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';


interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  totalCards: number;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    category: string;
    status: 'completed' | 'in-progress' | 'planned';
    githubUrl?: string;
    liveUrl?: string;
  }

  
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible, totalCards }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <div
      className={`
        sticky bg-white rounded-2xl shadow-xl overflow-hidden
        transition-all duration-700 ease-out
        border border-gray-100
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        top: `${index * 20}px`,
        zIndex: (index + 1) * 10, // First card z-10, second z-20, third z-30, etc.
      }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;