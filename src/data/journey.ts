export type JourneyType = 'education' | 'experience';

export interface JourneyItem {
  id: string;
  /** Année affichée en filigrane */
  year: string;
  /** Période détaillée */
  period: string;
  title: string;
  place: string;
  description: string;
  type: JourneyType;
}

/** Du plus ancien au plus récent : le visiteur lit la progression dans le sens du temps. */
export const journeyData: JourneyItem[] = [
  {
    id: 'bac',
    year: '2024',
    period: '2024',
    title: 'Baccalauréat S2, mention Bien',
    place: 'Lycée Ama School, Rufisque',
    description: 'Série scientifique, mention Bien.',
    type: 'education',
  },
  {
    id: 'dut-debut',
    year: '2024',
    period: 'Rentrée 2024',
    title: 'Début du DUT Informatique',
    place: 'École Supérieure Polytechnique (ESP), Dakar',
    description: "Entrée en formation : programmation, développement web, bases de données, réseaux et systèmes.",
    type: 'education',
  },
  {
    id: 'stage-ads',
    year: '2026',
    period: 'Mai à juillet 2026',
    title: "Stage de fin d'études, développeur full-stack",
    place: 'Autoroutes du Sénégal (ADS)',
    description: "Conception et développement de MCI, la main courante informatisée des incidents autoroutiers : analyse terrain, modélisation UML, React / NestJS / PostgreSQL, Docker. Présenté en soutenance.",
    type: 'experience',
  },
  {
    id: 'dut-obtention',
    year: '2026',
    period: '2026',
    title: 'Obtention du DUT Informatique',
    place: 'École Supérieure Polytechnique (ESP), Dakar',
    description: "Diplôme Universitaire de Technologie, technicien supérieur (Bac+2), après deux ans de formation.",
    type: 'education',
  },
  {
    id: 'licence',
    year: '2026',
    period: '2026 à aujourd\'hui',
    title: 'Licence 3 Informatique',
    place: 'École Supérieure Polytechnique (ESP), Dakar',
    description: "Poursuite du cursus après le DUT : approfondissement du génie logiciel, des systèmes et des réseaux.",
    type: 'education',
  },
];
