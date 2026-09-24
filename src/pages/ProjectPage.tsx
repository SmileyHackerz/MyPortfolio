import { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ImageOff } from 'lucide-react';
import ProjectDiagram from '../components/ui/ProjectDiagram';
import { findProject, projectsData, statusLabel } from '../data/projects';
import { profile } from '../data/profile';
import StatusPill from '../components/ui/StatusPill';
import { backToProjects, openProject, projectHref } from '../lib/router';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectPage({ id }: { id: string }) {
  const project = findProject(id);
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const previous = document.title;
    if (project) document.title = `${project.title} · ${profile.firstName} ${profile.lastName}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-muted">Fiche introuvable</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Ce projet n'existe pas.</h1>
        <a href="#projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour aux projets
        </a>
      </main>
    );
  }

  const index = projectsData.findIndex((p) => p.id === project.id);
  const next = projectsData[(index + 1) % projectsData.length];
  const hasMedia = project.images.length > 0 || !!project.video || !!project.diagram;

  const meta = [
    { k: 'Rôle', v: project.role },
    { k: 'Période', v: project.period },
    { k: 'Contexte', v: project.context },
    { k: 'État', v: statusLabel[project.status] },
  ];

  return (
    <main className="relative min-h-[100dvh] bg-background">
      {/* Nappe de couleur du projet, en haut de page */}
      <div className="absolute inset-x-0 top-0 h-[70vh] overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="scene-wash"
          style={{ ['--wash-a' as string]: project.scene.a, ['--wash-b' as string]: project.scene.b, opacity: 0.4 }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Barre de retour */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={backToProjects}
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Projets
          </button>
          <a href="#home" className="font-mono text-sm text-foreground">
            {profile.firstName.toLowerCase()}<span className="text-primary">.</span>{profile.lastName.toLowerCase()}
          </a>
        </div>
      </div>

      <motion.article
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 lg:pt-20"
      >
        {/* En-tête */}
        <header className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill status={project.status} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.context}</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-balance">
            {project.title}
          </h1>
          <p className="mt-6 text-xl text-foreground/80 leading-relaxed max-w-[56ch]">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-primary active:scale-[0.98] transition-[background-color,transform]"
              >
                Ouvrir le site <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.demoPending && (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-primary/40 px-6 py-3 font-medium text-primary/90"
                title={`Sera en ligne sur ${project.demoPending.replace('https://', '')}`}
              >
                Bientôt sur {project.demoPending.replace('https://', '')}
              </span>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-foreground hover:border-white/40 active:scale-[0.98] transition-[border-color,transform]"
              >
                <Github className="w-4 h-4" /> Code source
              </a>
            )}
          </div>
        </header>

        {/* Métadonnées */}
        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 border-t border-white/10 pt-8">
          {meta.map((m) => (
            <div key={m.k}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{m.k}</dt>
              <dd className="mt-2 text-foreground">{m.v}</dd>
            </div>
          ))}
        </dl>

        {/* Médias */}
        <section className="mt-16" aria-label="Médias">
          {project.video && (
            <video
              src={project.video}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-3xl border border-white/10 bg-surface"
            />
          )}
          {project.images.length > 0 && (
            <div className={`grid items-start gap-4 ${project.images.length > 1 ? 'md:grid-cols-2' : ''} ${project.video ? 'mt-4' : ''}`}>
              {project.images.map((src, i) => (
                <figure key={src} className={i === 0 && project.images.length % 2 === 1 ? 'md:col-span-2' : ''}>
                  <img
                    src={src}
                    alt={`${project.title}, capture ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    /* Les captures vont du large tableau de bord à l'écran de téléphone.
                       Largeur libre et hauteur plafonnée : une capture mobile s'affiche
                       à sa taille, sans être étirée sur toute la colonne. */
                    className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-3xl border border-white/10 bg-surface"
                  />
                </figure>
              ))}
            </div>
          )}
          {project.images.length === 0 && !project.video && project.diagram && (
            <ProjectDiagram label={project.diagram.label} steps={project.diagram.steps} />
          )}
          {!hasMedia && (
            <div className="flex items-center gap-4 rounded-3xl border border-dashed border-white/15 bg-surface/40 px-6 py-8 text-muted">
              <ImageOff className="w-5 h-5 shrink-0" />
              <p className="text-sm leading-relaxed">
                Captures et vidéo de démonstration en cours d'ajout.
                {project.status === 'internal' && " Ce projet tourne sur le serveur interne du client, il n'est pas accessible publiquement."}
              </p>
            </div>
          )}
        </section>

        {/* Contenu */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            {project.description.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-foreground/85 max-w-[65ch]">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-5 space-y-10">
            {project.workflow && (
              <div>
                <h2 className="text-sm font-semibold text-foreground">Workflow verrouillé</h2>
                <p className="mt-1 text-sm text-muted">Chaque incident traverse les étapes dans cet ordre, sans en sauter.</p>
                <ol className="mt-5 relative border-l border-white/10 ml-2 space-y-5">
                  {project.workflow.map((step, i) => (
                    <li key={step} className="pl-6 relative">
                      <span
                        className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                          i === 0 ? 'bg-primary' : 'bg-white/25'
                        }`}
                        aria-hidden
                      />
                      <span className="font-mono text-[11px] text-muted mr-3 tabular">{i + 1}</span>
                      <span className="text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {project.highlights && (
              <div>
                <h2 className="text-sm font-semibold text-foreground">Ce qui a été livré</h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-foreground/85">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-primary" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-sm font-semibold text-foreground">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 bg-surface/60 px-3 py-1 font-mono text-[12px] text-foreground/85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Projet suivant */}
        <a
          href={projectHref(next.id)}
          onClick={(e) => {
            e.preventDefault();
            openProject(next.id);
          }}
          className="group mt-24 flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-surface/50 px-6 py-6 sm:px-8 hover:border-white/25 transition-colors"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Projet suivant</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{next.short}</p>
          </div>
          <ArrowRight className="w-6 h-6 text-muted transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
        </a>
      </motion.article>
    </main>
  );
}
