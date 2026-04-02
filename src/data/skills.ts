export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Langages',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 80 },
      { name: 'TypeScript / JavaScript', percentage: 80 },
      { name: 'C', percentage: 70 },
      { name: 'PHP', percentage: 65 },
      { name: 'Java', percentage: 55 },
      { name: 'Python', percentage: 40 },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React / Next.js', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 70 },
      { name: 'Node.js / Express', percentage: 60 },
    ]
  },
  {
    title: 'Réseaux / Cybersécurité',
    skills: [
      { name: 'DHCP', percentage: 90 },
      { name: 'SSH', percentage: 90 },
      { name: 'HTTP / HTTPS', percentage: 85 },
      { name: 'DNS', percentage: 80 },
      { name: 'Metasploit', percentage: 55 },
    ]
  },
  {
    title: 'Outils',
    skills: [
      { name: 'VSCode', percentage: 90 },
      { name: 'Git / GitHub Actions', percentage: 85 },
      { name: 'Linux / Bash', percentage: 75 },
      { name: 'MySQL', percentage: 60 },
    ]
  }
];
