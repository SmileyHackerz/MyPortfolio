export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: 'jammline',
    title: 'JammLine',
    description: "Plateforme de gestion des files d'attentes des hôpitaux pour optimiser le flux des patients.",
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/SmileyHackerz/JammLine',
    demo: 'https://jammline-app.vercel.app/',
    image: "/Capture d'écran 2026-03-20 003723.png"
  },
  {
    id: 'gestion-universitaire',
    title: 'Plateforme de Gestion Universitaire',
    description: 'Application console entièrement développée en langage C. Permet de gérer efficacement les étudiants, les notes et les matières.',
    tech: ['C', 'CLI', 'Gestion de données'],
    github: 'https://github.com/SmileyHackerz/Project-Language-C',
    image: "/Capture d'écran 2026-03-20 004007.png"
  },
  {
    id: 'focus-bot',
    title: 'Focus Bot',
    description: "Un bot développé en Python qui analyse visuellement l'utilisateur et émet une alarme pour prévenir les distractions.",
    tech: ['Python', 'Computer Vision', 'Automatisation'],
    github: 'https://github.com/SmileyHackerz/Focus-Bot',
    image: "/Capture d'écran 2026-03-20 004129.png"
  },
  {
    id: 'farloul',
    title: 'Farloul',
    description: "Application dédiée à la productivité, à la gestion du temps et à l'amélioration de la concentration.",
    tech: ['Productivité', 'Gestion du temps', 'Application'],
    github: 'https://github.com/SmileyHackerz/Farloul',
    image: "/Capture d'écran 2026-03-20 004855.png"
  }
];
