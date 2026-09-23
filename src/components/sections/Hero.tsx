import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import ParticleField from '../ui/ParticleField';
import ParticleGlobe from '../ui/ParticleGlobe';
import { profile } from '../../data/profile';

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/** Chaque ligne du nom monte depuis un masque */
const lineMask = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 1, ease } },
};

const socials = [
  { href: profile.socials.github, Icon: Github, label: 'GitHub' },
  { href: profile.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { href: profile.socials.instagram, Icon: Instagram, label: 'Instagram' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-14 lg:pb-10">
      {/* Environnement : planète de particules, poussière, grille, halos */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />

        {/* La planète et ses orbites, dessinées dans un seul canvas */}
        <div className="absolute left-1/2 top-[26%] h-[78vh] w-[78vh] -translate-x-1/2 -translate-y-1/2 sm:top-[30%] sm:h-[90vh] sm:w-[90vh] lg:left-[44%] lg:top-[44%] lg:h-[104vh] lg:w-[104vh]">
          <ParticleGlobe className="opacity-55 lg:opacity-85" />
        </div>

        <ParticleField className="absolute inset-0" density={0.35} />

        <div className="absolute -top-40 left-[12%] h-[700px] w-[700px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Nom, phrase, actions */}
          <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7 lg:pr-4">
            <h1 className="font-bold tracking-[-0.045em] leading-[0.9] text-[clamp(3.25rem,8.6vw,8rem)]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineMask} className="block text-foreground [text-shadow:0_2px_40px_rgba(11,15,25,0.9)]">
                  {profile.firstName.toUpperCase()}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineMask} className="block text-primary [text-shadow:0_2px_40px_rgba(11,15,25,0.9)]">
                  {profile.lastName.toUpperCase()}
                </motion.span>
              </span>
            </h1>

            <motion.p variants={rise} className="mt-8 text-lg md:text-xl text-muted max-w-[46ch] leading-relaxed">
              {profile.title}, étudiant en Licence 3 à l'ESP de Dakar. Des applications complètes, du modèle de données à l'interface, avec la sécurité en tête.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-primary active:scale-[0.98] transition-[background-color,transform]"
              >
                Voir les projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={profile.cv}
                download="CV_Mohamed_Faye.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-surface/40 text-foreground font-medium hover:border-white/40 active:scale-[0.98] transition-[border-color,transform]"
              >
                <Download className="w-4 h-4" />
                Télécharger le CV
              </a>
            </motion.div>
          </motion.div>

          {/* Carte profil */}
          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="lg:col-span-5 lg:justify-self-end w-full max-w-md"
          >
            <div className="panel p-3">
              <div className="relative mx-auto aspect-[928/1141] w-[min(100%,calc(52dvh*0.813))] overflow-hidden rounded-2xl bg-white">
                <img
                  src={profile.portrait}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  width={928}
                  height={1141}
                />
                {/* Le cadre garde le format exact de la photo et se dimensionne en hauteur :
                    un portrait de profil ne survit à aucun recadrage, et les marges tombent
                    sur le fond de la carte plutôt que de laisser voir les bords du fichier. */}
              </div>

              <div className="px-3 pb-2 pt-4">
                <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
                  {profile.availableLabel}
                </p>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold tracking-tight text-foreground">
                      {profile.firstName} {profile.lastName}
                    </p>
                    <p className="text-sm text-muted">{profile.title}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 pt-1 text-xs text-muted">
                    <MapPin className="h-3 w-3" /> Dakar
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1">
                    {socials.map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground">
                    Me contacter <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
