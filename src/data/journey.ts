export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'project';
}

export const journeyData: JourneyItem[] = [
  {
    id: '1',
    year: '2024 - Présent',
    title: 'Étudiant en Génie Informatique',
    description: "Formation en cours à l'École Supérieure Polytechnique (ESP) de Dakar. Apprentissage approfondi de la programmation, du développement web et de l'informatique générale.",
    type: 'education'
  },
  {
    id: '2',
    year: '2024',
    title: 'Obtention du Baccalauréat',
    description: "Série S2, Mention Bien. Lycée Ama School de Rufisque.",
    type: 'education'
  },
  {
    id: '3',
    year: '2022 - 2024',
    title: 'Lycéen',
    description: 'Études secondaires au Lycée Ama School de Rufisque, préparation au baccalauréat scientifique.',
    type: 'education'
  },
  {
    id: '4',
    year: '2017 - 2022',
    title: 'Collégien',
    description: 'Enseignement moyen au Collège Sacré Cœur de Dakar.',
    type: 'education'
  }
];
