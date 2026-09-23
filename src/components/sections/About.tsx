import { motion, useReducedMotion } from 'motion/react';
import { Boxes, Radar } from 'lucide-react';
import { profile } from '../../data/profile';

const ease = [0.16, 1, 0.3, 1] as const;

const paragraphs = [
  "Salut, moi c'est Mohamed Faye. Étudiant en Licence 3 Informatique à l'École Supérieure Polytechnique de Dakar, titulaire d'un DUT Informatique obtenu en 2026.",
  "J'aime construire des applications complètes : le modèle de données, l'API, l'interface, le déploiement. Mes projets récents ont été livrés à de vraies structures, sur de vrais besoins : la main courante des incidents d'Autoroutes du Sénégal, la gestion d'un cabinet dentaire, la vitrine d'une boutique.",
];

const facets = [
  {
    Icon: Boxes,
    title: 'De la base de données au conteneur',
    text: "Modélisation, API NestJS, interface React, mise en production Docker. Je tiens la chaîne entière plutôt qu'un seul maillon.",
  },
  {
    Icon: Radar,
    title: "Ce qu'il y a sous l'application",
    text: 'Réseaux et sécurité : formation HCIA-Datacom, accès par rôles, comprendre la machine autant que le code.',
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-6"
        >
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl">
            Construire en entier, <span className="text-muted">et comprendre en dessous.</span>
          </h2>

          <div className="mt-8 space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className={`max-w-[62ch] leading-relaxed ${i === 0 ? 'text-xl text-foreground' : 'text-lg text-foreground/75'}`}>
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-10 space-y-6">
            {facets.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="tile h-11 w-11 shrink-0 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 max-w-[52ch] leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <figure className="panel schematic p-3">
            <div className="relative overflow-hidden rounded-2xl bg-background">
              <img
                src={profile.photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                loading="lazy"
                width={512}
                height={593}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              {/* Repères d'angle : le portrait est cadré comme une prise de vue technique */}
              <span className="absolute left-3 top-3 h-5 w-5 rounded-tl border-l border-t border-white/25" aria-hidden />
              <span className="absolute bottom-3 right-3 h-5 w-5 rounded-br border-b border-r border-white/25" aria-hidden />
            </div>
            <figcaption className="flex items-center justify-between px-3 pb-1 pt-4 text-sm">
              <span className="font-semibold text-foreground">{profile.firstName} {profile.lastName}</span>
              <span className="text-muted">{profile.location}</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
