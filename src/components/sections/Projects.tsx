import React from 'react';
import { motion } from 'motion/react';
import { Code, Server, Database, Shield, Cpu, Globe, Terminal, Cloud } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';
import LogoLoop from '../ui/LogoLoop';
import { fadeInUp } from '../../utils/animations';

const techLogos = [
  { id: '1', name: 'React', icon: <Code className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '2', name: 'Node.js', icon: <Server className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '3', name: 'PostgreSQL', icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '4', name: 'Security', icon: <Shield className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '5', name: 'System', icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '6', name: 'Network', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '7', name: 'Linux', icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: '8', name: 'AWS', icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" /> },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Projets" 
          subtitle="Une sélection de mes travaux récents et projets académiques." 
        />
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <LogoLoop items={techLogos} speed={40} className="shadow-xl" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
