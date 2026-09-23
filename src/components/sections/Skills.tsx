import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Code2, Database, Layout, Network, Server, Wrench } from 'lucide-react';
import { skillsData, type Skill } from '../../data/skills';
import TechLogo, { hasLogo } from '../ui/TechLogo';

const ease = [0.16, 1, 0.3, 1] as const;
const byId = Object.fromEntries(skillsData.map((c) => [c.id, c]));

const icons: Record<string, ReactNode> = {
  languages: <Code2 className="h-5 w-5" />,
  frontend: <Layout className="h-5 w-5" />,
  backend: <Server className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  network: <Network className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
};

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Une entrée de stack : le logo quand il existe, sinon la marque du filet. */
function Entry({ skill }: { skill: Skill }) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-background/40 px-3 py-2.5 transition-colors hover:border-white/15">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-foreground/75 transition-colors group-hover:text-foreground">
        {hasLogo(skill.logo) ? (
          <TechLogo slug={skill.logo!} className="h-5 w-5" />
        ) : (
          <span className="h-px w-4 bg-primary/70" aria-hidden />
        )}
      </span>
      <span className="text-sm text-foreground/90 sm:text-base">{skill.name}</span>
    </li>
  );
}

function Module({ id, className = '', delay = 0, columns = 1 }: { id: string; className?: string; delay?: number; columns?: number }) {
  const g = byId[id];
  return (
    <Reveal delay={delay} className={className}>
      <div className="panel schematic h-full p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <span className="tile h-11 w-11 text-primary">{icons[id]}</span>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
            <p className="text-sm text-muted">{g.description}</p>
          </div>
        </div>
        <ul className={`mt-6 grid gap-2 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
          {g.skills.map((s) => (
            <Entry key={s.name} skill={s} />
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const languages = byId.languages;

  return (
    <section id="skills" className="relative py-28 lg:py-40">
      <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl">
            Ce que j'utilise <span className="text-muted">vraiment.</span>
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">
            Uniquement ce qui a servi dans les projets ci-dessus.
          </p>
        </Reveal>

        {/* Langages : la rangée la plus large, chaque langage sur sa tuile */}
        <Reveal delay={0.05} className="mt-14">
          <div className="panel schematic p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <span className="tile h-11 w-11 text-primary">{icons.languages}</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{languages.title}</h3>
                <p className="text-sm text-muted">{languages.description}</p>
              </div>
            </div>

            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
              {languages.skills.map((s) => (
                <li
                  key={s.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-background/40 px-3 py-5 transition-colors hover:border-white/20"
                >
                  <span className="text-foreground/80 transition-colors group-hover:text-foreground">
                    {hasLogo(s.logo) ? <TechLogo slug={s.logo!} className="h-8 w-8" /> : null}
                  </span>
                  <span className="text-center text-sm font-medium text-foreground/90">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Les trois couches de l'application */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Module id="frontend" />
          <Module id="backend" delay={0.06} />
          <Module id="database" delay={0.12} />
        </div>

        {/* Outillage et réseaux */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Module id="tools" className="lg:col-span-7" columns={2} />
          <Module id="network" className="lg:col-span-5" delay={0.06} />
        </div>
      </div>
    </section>
  );
}
