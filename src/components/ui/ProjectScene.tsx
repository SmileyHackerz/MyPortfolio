import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, Github, ImageOff } from 'lucide-react';
import type { Project } from '../../data/projects';
import StatusPill from './StatusPill';
import ProjectDiagram from './ProjectDiagram';
import { openProject, projectHref } from '../../lib/router';

interface ProjectSceneProps {
  project: Project;
  index: number;
  total: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Une scène plein écran par projet. Les scènes sont collantes et s'empilent :
 * quand la suivante arrive, celle-ci recule légèrement et s'assombrit.
 */
export default function ProjectScene({ project, index, total }: ProjectSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Progression pendant que la scène est recouverte par la suivante (dernier tiers du défilement).
  // Translation et opacité seulement : ce sont les deux propriétés que le compositeur
  // sait animer sans repeindre. Une mise à l'échelle obligerait à rastériser à nouveau
  // le titre de 6 rem à chaque image, ce qui fait saccader toute la section.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end 100vh', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.72, 0.28]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -72]);

  const isLast = index === total - 1;
  const cover = project.images[0];

  return (
    // Le conteneur est plus haut que l'écran : la scène collante y reste un moment avant d'être recouverte
    <div ref={ref} className="relative h-[150dvh] lg:h-[165dvh]" style={{ zIndex: index + 1 }}>
      <article
        id={`scene-${project.id}`}
        className={`sticky top-0 h-[100dvh] flex items-center overflow-hidden bg-background border-t border-white/[0.06] ${
          isLast ? '' : 'mb-[-1px]'
        }`}
        aria-labelledby={`scene-title-${project.id}`}
      >
      {/* Nappe de couleur propre au projet */}
      <div
        className="scene-wash"
        style={{
          ['--wash-a' as string]: project.scene.a,
          ['--wash-b' as string]: project.scene.b,
          ['--wash-x' as string]: project.scene.focal?.x ?? '22%',
          ['--wash-y' as string]: project.scene.focal?.y ?? '42%',
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" aria-hidden />

      <motion.div
        style={reduce ? undefined : { opacity, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Texte */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <StatusPill status={project.status} />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {project.context}
              </span>
            </motion.div>

            {/* Le masque clippe la ligne : l'observateur doit donc être sur le h3, pas sur la ligne */}
            <motion.h3
              id={`scene-title-${project.id}`}
              initial={reduce ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="font-bold tracking-[-0.04em] leading-[0.92] text-[clamp(2.75rem,7.5vw,6rem)] text-foreground text-balance"
            >
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={{ hidden: { y: '105%' }, visible: { y: '0%', transition: { duration: 0.9, ease } } }}
                  className="block"
                >
                  {project.short}
                </motion.span>
              </span>
            </motion.h3>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-5 max-w-[52ch] text-lg md:text-xl text-foreground/80 leading-relaxed"
            >
              {project.summary}
            </motion.p>

            <motion.ul
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
              className="mt-7 flex flex-wrap gap-2"
              aria-label="Technologies"
            >
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[12px] text-foreground/85"
                >
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.26, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={projectHref(project.id)}
                onClick={(e) => {
                  e.preventDefault();
                  openProject(project.id);
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-primary active:scale-[0.98] transition-[background-color,transform]"
              >
                Voir la fiche
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-6 py-3.5 font-medium text-foreground hover:border-white/40 active:scale-[0.98] transition-[border-color,transform]"
                >
                  Ouvrir le site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {!project.demo && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-6 py-3.5 font-medium text-foreground hover:border-white/40 active:scale-[0.98] transition-[border-color,transform]"
                >
                  <Github className="w-4 h-4" />
                  Code source
                </a>
              )}
            </motion.div>
          </div>

          {/* Couverture réelle, ou emplacement marqué en attendant les captures */}
          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="lg:col-span-5 lg:justify-self-end w-full max-w-lg"
          >
            {cover ? (
              <div className="rounded-3xl border border-white/10 bg-surface/60 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                <img
                  src={cover}
                  alt={`Capture d'écran de ${project.title}`}
                  loading="lazy"
                  /* Format naturel : les captures n'ont pas toutes la même forme, et forcer
                     un 16/10 rognait les tableaux de bord larges sur les côtés. */
                  className="h-auto max-h-[56vh] w-full rounded-2xl object-cover object-top"
                />
              </div>
            ) : project.diagram ? (
              <ProjectDiagram label={project.diagram.label} steps={project.diagram.steps} />
            ) : (
              <div
                className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-white/15 bg-background/40 text-muted"
                role="img"
                aria-label={`Captures de ${project.title} à venir`}
              >
                <ImageOff className="w-5 h-5" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em]">Captures à venir</span>
              </div>
            )}
          </motion.figure>
        </div>
      </motion.div>
      </article>
    </div>
  );
}
