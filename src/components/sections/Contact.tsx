import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { profile } from '../../data/profile';

const ease = [0.16, 1, 0.3, 1] as const;

const primary = [
  { name: 'E-mail', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { name: 'WhatsApp', value: profile.phone, href: profile.whatsapp, Icon: MessageCircle, external: true },
  { name: 'LinkedIn', value: 'mohamed-faye', href: profile.socials.linkedin, Icon: Linkedin, external: true },
];

const secondary = [
  { name: 'Téléphone', href: profile.phoneHref, Icon: Phone },
  { name: 'GitHub', href: profile.socials.github, Icon: Github, external: true },
  { name: 'Instagram', href: profile.socials.instagram, Icon: Instagram, external: true },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-40">
      <div
        className="pointer-events-none absolute -bottom-52 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl lg:text-7xl">
            Un poste, un stage, <span className="text-muted">ou un projet à construire ?</span>
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
            Écrivez-moi, je réponds vite. Basé à {profile.location}, disponible à distance.
          </p>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="panel schematic mt-14 divide-y divide-white/[0.07] overflow-hidden"
        >
          {primary.map((c) => (
            <li key={c.name}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-6 transition-colors hover:bg-white/[0.03] sm:gap-6 sm:px-8 sm:py-8"
              >
                <span className="tile h-11 w-11 text-muted transition-colors group-hover:text-primary">
                  <c.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{c.name}</span>
                  <span className="block text-sm font-semibold tracking-tight text-foreground [overflow-wrap:anywhere] sm:text-xl md:text-3xl">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight className="h-6 w-6 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </motion.ul>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {secondary.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-white/30 hover:text-foreground"
            >
              <c.Icon className="h-4 w-4" />
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
