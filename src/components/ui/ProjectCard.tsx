import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-surface border border-border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-primary/50"
    >
      {/* Glow effect behind the card content */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Abstract Image Placeholder or Real Image */}
      <div className="h-48 relative overflow-hidden border-b border-border bg-background">
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90 z-10" />
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-muted font-mono text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100 group-hover:text-primary transition-colors duration-300">
                {project.title.replace(/\s+/g, '_').toLowerCase()}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-1"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(tech => (
            <span 
              key={tech} 
              className="text-xs font-mono text-secondary px-2.5 py-1 bg-background rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.demo && (
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
