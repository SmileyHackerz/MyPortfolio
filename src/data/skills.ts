export interface Skill {
  name: string;
  /** Slug du logo dans TechLogo ; absent quand la techno n'a pas de logo propre */
  logo?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  /** Une phrase de contexte */
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Langages',
    description: 'Du bas niveau au web.',
    skills: [
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'PHP', logo: 'php' },
      { name: 'Python', logo: 'python' },
      { name: 'C', logo: 'c' },
      { name: 'Java', logo: 'openjdk' },
      { name: 'HTML', logo: 'html5' },
      { name: 'CSS', logo: 'css' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces rapides, typées et responsives.',
    skills: [
      { name: 'React', logo: 'react' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'Vite', logo: 'vite' },
      { name: 'Three.js', logo: 'threedotjs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs structurées et sécurisées.',
    skills: [
      { name: 'NestJS', logo: 'nestjs' },
      { name: 'Prisma', logo: 'prisma' },
      { name: 'JWT', logo: 'jsonwebtokens' },
      { name: 'API REST' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de données',
    description: 'Modélisation et requêtes.',
    skills: [
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'MySQL', logo: 'mysql' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'tools',
    title: 'Outils',
    description: 'Du poste de dev à la prod.',
    skills: [
      { name: 'Docker', logo: 'docker' },
      { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github' },
      { name: 'Linux', logo: 'linux' },
      { name: 'Bash', logo: 'gnubash' },
      { name: 'UML' },
    ],
  },
  {
    id: 'network',
    title: 'Réseaux',
    description: 'Routage, services et protocoles.',
    skills: [
      { name: 'DHCP' },
      { name: 'DNS' },
      { name: 'SSH' },
      { name: 'HTTP / HTTPS' },
      { name: 'Routage & commutation' },
    ],
  },
];
