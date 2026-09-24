export type ProjectCategory = 'fullstack' | 'web' | 'python';

/** État réel du projet, affiché tel quel */
export type ProjectStatus = 'online' | 'internal' | 'soon' | 'code';

export const statusLabel: Record<ProjectStatus, string> = {
  online: 'En ligne',
  internal: 'Projet interne',
  soon: 'Bientôt en ligne',
  code: 'Code public',
};

export interface Project {
  id: string;
  title: string;
  /** Titre court pour les scènes et la navigation */
  short: string;
  /** Une ligne, affichée dans la scène */
  summary: string;
  /** Paragraphes de la fiche projet */
  description: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  tech: string[];
  /** Client / contexte, ex. "Autoroutes du Sénégal" */
  context: string;
  period: string;
  role: string;
  highlights?: string[];
  /** Étapes d'un workflow raconté dans la fiche */
  workflow?: string[];
  github?: string;
  demo?: string;
  /** Lien annoncé mais pas encore actif */
  demoPending?: string;
  /** Première image = couverture. Vide tant que Mohamed n'a pas fourni les captures. */
  images: string[];
  /**
   * Pour un programme sans interface à photographier : les étapes réelles de sa boucle.
   * Affiché à la place de la couverture, et clairement présenté comme un schéma.
   */
  diagram?: { label: string; steps: string[] };
  video?: string;
  /** Nappe de couleur de la scène : deux teintes de la palette et, en option, la position du foyer lumineux */
  scene: { a: string; b: string; focal?: { x: string; y: string } };
}

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'web', label: 'Web' },
  { id: 'python', label: 'Python' },
];

export const projectsData: Project[] = [
  {
    id: 'mci',
    title: 'MCI, Main Courante Informatisée',
    short: 'MCI',
    summary: "Digitalisation du suivi des incidents autoroutiers pour Autoroutes du Sénégal.",
    description: [
      "Lors de mon stage de fin d'études chez Autoroutes du Sénégal (ADS), j'ai été chargé de digitaliser le processus de déclaration des incidents sur le réseau autoroutier, jusque-là géré manuellement. Le principal défi était de concevoir un workflow fidèle aux besoins réels des équipes de terrain. J'ai donc effectué une visite sur site pour comprendre comment les incidents étaient réellement suivis et résolus.",
      "J'ai développé seul MCI, une application web full-stack avec un workflow verrouillé en quatre étapes, une authentification par rôles et l'intégration météo en temps réel pour contextualiser chaque incident. Frontend en React, TypeScript et Tailwind CSS ; backend NestJS et PostgreSQL ; le tout conteneurisé avec Docker.",
      "Le projet a été livré de bout en bout, du recueil des besoins et de la modélisation UML jusqu'au déploiement, et présenté avec succès lors de ma soutenance.",
    ],
    category: 'fullstack',
    status: 'internal',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    context: 'Autoroutes du Sénégal (ADS)',
    period: 'Mai à juillet 2026',
    role: "Développeur full-stack, stage de fin d'études",
    highlights: [
      'Workflow verrouillé en quatre étapes',
      'Authentification et accès par rôles',
      'Intégration météo temps réel',
      'Export Excel au format ADS',
      'Déploiement Docker Compose',
    ],
    workflow: ['Déclaration', 'Suivi', 'Actions', 'Résolution'],
    images: ['/projects-mci-1.webp', '/projects-mci-2.webp', '/projects-mci-3.webp'],
    scene: { a: '#F59E0B', b: '#3B82F6', focal: { x: '18%', y: '30%' } },
  },
  {
    id: 'cabinet-mame-fary',
    title: 'Cabinet Dentaire Mame Fary',
    short: 'Cabinet Mame Fary',
    summary: 'Site et gestion de cabinet : patients, soins, demandes et prise de rendez-vous.',
    description: [
      "Application web pour un cabinet dentaire de Dakar : une vitrine publique pour les patients et un espace de gestion pour le cabinet, avec dossiers patients, soins pratiqués, demandes de rendez-vous, agenda et historique des consultations.",
      "Frontend React + TypeScript + Tailwind CSS, backend NestJS avec Prisma et authentification JWT.",
    ],
    category: 'fullstack',
    status: 'online',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'JWT'],
    context: 'Client, cabinet dentaire',
    period: '2026',
    role: 'Développeur full-stack',
    demo: 'https://cabinetdentairemamefary.com',
    images: ['/projects-cabinet-mame-fary-1.webp', '/projects-cabinet-mame-fary-2.webp'],
    scene: { a: '#22C55E', b: '#3B82F6', focal: { x: '30%', y: '70%' } },
  },
  {
    id: 'amsa-shop',
    title: 'Amsa Shop',
    short: 'Amsa Shop',
    summary: "Vitrine digitale d'une boutique de prêt-à-porter premium aux Almadies, Dakar.",
    description: [
      "Site vitrine d'une boutique physique de prêt-à-porter, accessoires et parfums. L'objectif : transmettre l'ambiance du magasin (lumière chaude, bois clair, touches dorées) et donner envie de venir. Pensé mobile d'abord, pour des visiteurs qui arrivent depuis Instagram ou TikTok.",
      "Frontend React + TypeScript + Vite + Tailwind CSS avec des scènes 3D en Three.js ; backend NestJS + Prisma + PostgreSQL pour le catalogue et les commandes.",
    ],
    category: 'fullstack',
    status: 'soon',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    context: 'Client, boutique Amsa Shop',
    period: '2026',
    role: 'Développeur full-stack',
    demoPending: 'https://amsashop.com',
    images: ['/projects-amsa-shop-1.webp', '/projects-amsa-shop-2.webp'],
    scene: { a: '#3B82F6', b: '#60A5FA', focal: { x: '70%', y: '35%' } },
  },
  {
    id: 'pencc-mi',
    title: 'Pencc Mi',
    short: 'Pencc Mi',
    summary: "Site d'actualités avec un système complet de gestion de contenu.",
    description: [
      "Pencc Mi est un site d'actualités dynamique permettant la consultation publique des articles, accompagné d'un système complet de gestion de contenu pour publier, modifier et supprimer des articles.",
      "La plateforme a été conçue pour le journalisme indépendant : les éditeurs gardent le contrôle total du contenu, les lecteurs profitent d'une interface propre et agréable. Développé en PHP, JavaScript, HTML, CSS et MySQL, avec gestion des rôles éditeur et administrateur.",
    ],
    category: 'web',
    status: 'code',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS'],
    context: 'Projet académique',
    period: '2025',
    role: 'Développeur',
    github: 'https://github.com/SmileyHackerz/Pencc-Mi',
    images: ['/projects-pencc-mi-1.webp', '/projects-pencc-mi-2.webp'],
    scene: { a: '#3B82F6', b: '#22C55E', focal: { x: '82%', y: '75%' } },
  },
  {
    id: 'jammline',
    title: 'JammLine',
    short: 'JammLine',
    summary: "Gestion des files d'attente des hôpitaux pour fluidifier le parcours patient.",
    description: [
      "Plateforme de gestion des files d'attente des hôpitaux pour optimiser le flux des patients : prise de ticket, suivi de la position en temps réel et tableau de bord pour le personnel.",
      "Trois rôles se partagent l'application : le patient suit son ticket et sa position depuis son téléphone, le médecin gère sa file depuis son poste, l'administrateur supervise l'ensemble. L'interface est pensée pour le mobile côté patient, pour l'écran large côté soignant.",
    ],
    category: 'web',
    status: 'online',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    context: 'Projet académique',
    period: '2025',
    role: 'Développeur frontend',
    github: 'https://github.com/SmileyHackerz/JammLine',
    demo: 'https://jammline-app.vercel.app/',
    images: ['/projects-jammline-1.webp', '/projects-jammline-2.webp', '/projects-jammline-3.webp'],
    scene: { a: '#22C55E', b: '#22C55E', focal: { x: '45%', y: '20%' } },
  },
  {
    id: 'focus-bot',
    title: 'Focus Bot',
    short: 'Focus Bot',
    summary: 'Assistant de concentration par vision par ordinateur.',
    description: [
      "Un bot développé en Python qui analyse visuellement l'utilisateur via la webcam et déclenche une alarme lorsqu'il détecte une distraction.",
      "Le programme tourne en arrière-plan, sans interface : un classifieur Haar cherche les yeux dans chaque image du flux. Passé trois secondes sans regard détecté, un thread lance le son en boucle et ouvre une fenêtre OpenCV. Il n'y a donc pas d'écran à montrer, seulement une boucle à décrire.",
    ],
    category: 'python',
    status: 'code',
    tech: ['Python', 'OpenCV', 'Vision par ordinateur'],
    context: 'Projet personnel',
    period: '2025',
    role: 'Développeur',
    github: 'https://github.com/SmileyHackerz/Focus-Bot',
    images: [],
    diagram: {
      label: 'La boucle du programme',
      steps: [
        'Flux webcam',
        'Détection des yeux · Haar',
        '3 s sans regard',
        'Alarme sonore + squelette',
      ],
    },
    scene: { a: '#3B82F6', b: '#3B82F6', focal: { x: '15%', y: '80%' } },
  },
];

export const findProject = (id: string) => projectsData.find((p) => p.id === id);
