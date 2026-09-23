export interface Credential {
  id: string;
  title: string;
  /** Ce que le document atteste, en une ligne */
  level: string;
  issuer: string;
  date: string;
  detail: string;
  /** Aperçu du document quand il existe */
  image?: string;
}

export const credentialsData: Credential[] = [
  {
    id: 'dut',
    title: 'DUT Informatique',
    level: 'Technicien supérieur, Bac+2',
    issuer: 'École Supérieure Polytechnique (ESP), Dakar',
    date: '2026',
    detail: "Deux ans de formation : programmation, développement web, bases de données, réseaux et systèmes.",
  },
  {
    id: 'hcia',
    title: 'HCIA-Datacom V1.0',
    level: 'Certificat de formation',
    issuer: 'Huawei Talent Online',
    date: 'Mai 2025',
    detail: "Réseaux d'entreprise Huawei : routage et commutation, protocoles IP, DHCP, DNS, sécurité de base.",
    image: '/certificat-hcia-datacom.webp',
  },
  {
    id: 'bac',
    title: 'Baccalauréat S2',
    level: 'Mention Bien',
    issuer: 'Lycée Ama School, Rufisque',
    date: '2024',
    detail: 'Série scientifique : mathématiques, physique-chimie, sciences de la vie et de la terre.',
  },
];
