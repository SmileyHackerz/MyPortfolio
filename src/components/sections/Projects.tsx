import { useState } from 'react';
import { LayoutGroup, motion, useReducedMotion } from 'motion/react';
import { projectsData, projectCategories, type ProjectCategory } from '../../data/projects';
import ProjectScene from '../ui/ProjectScene';

type Filter = ProjectCategory | 'all';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const reduce = useReducedMotion();
  const visible = projectsData.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="relative">
      {/* En-tête de section, non collant : il défile avant la première scène */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95] text-balance">
              Six projets, <span className="text-muted">six chapitres.</span>
            </h2>
            <p className="mt-5 text-lg text-muted max-w-[58ch] leading-relaxed">
              Des applications livrées pour de vrais besoins. Chaque projet porte son état réel et sa fiche.
            </p>
          </div>

          <LayoutGroup id="project-filters">
            <div
              role="tablist"
              aria-label="Filtrer les projets"
              className="flex flex-wrap gap-1 rounded-full border border-border bg-surface/60 p-1 self-start lg:self-auto"
            >
              {projectCategories.map((c) => {
                const active = c.id === filter;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(c.id)}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                      active ? 'text-background' : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-foreground"
                      />
                    )}
                    <span className="relative">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>
      </div>

      {/* Scènes collantes empilées */}
      <div className="relative">
        {visible.map((project, i) => (
          <ProjectScene key={project.id} project={project} index={i} total={visible.length} />
        ))}
      </div>
    </section>
  );
}
