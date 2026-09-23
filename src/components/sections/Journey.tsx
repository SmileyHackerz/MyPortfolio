import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap, Wrench } from 'lucide-react';
import { journeyData, type JourneyType } from '../../data/journey';

const ease = [0.16, 1, 0.3, 1] as const;

const typeIcon: Record<JourneyType, typeof GraduationCap> = {
  education: GraduationCap,
  experience: Wrench,
};

/** Timeline : l'année en filigrane occupe la moitié restée vide, l'étape est posée sur un panneau. */
export default function Journey() {
  const reduce = useReducedMotion();

  return (
    <section id="journey" className="relative overflow-hidden py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl">
            Le parcours, <span className="text-muted">du bac à la licence.</span>
          </h2>
        </motion.div>

        <ol className="relative mt-20">
          {/* Fil central */}
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease }}
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-transparent via-white/15 to-transparent lg:left-1/2"
          />

          {journeyData.map((item, i) => {
            const left = i % 2 === 0;
            const Icon = typeIcon[item.type];
            return (
              <li key={item.id} className="relative grid grid-cols-1 gap-x-16 py-8 lg:grid-cols-2 lg:py-10">
                {/* L'année remplit la moitié restée vide */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none text-[12rem] font-bold leading-none tracking-[-0.06em] text-white/[0.06] lg:block ${
                    left ? 'left-[calc(50%+4rem)]' : 'right-[calc(50%+4rem)]'
                  }`}
                >
                  {item.year}
                </span>

                {/* Nœud sur le fil */}
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  className="tile absolute left-4 top-10 z-10 h-9 w-9 -translate-x-1/2 rounded-full bg-background lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </motion.span>

                <motion.div
                  initial={reduce ? false : { opacity: 0, x: left ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease }}
                  className={`ml-10 lg:ml-0 ${left ? 'lg:col-start-1 lg:mr-4' : 'lg:col-start-2 lg:ml-4'}`}
                >
                  <div className="panel schematic p-6 lg:p-7">
                    <div className="flex items-start gap-4">
                      <span className="tile h-11 w-11 shrink-0 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground text-balance sm:text-2xl md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-foreground/70">
                          {item.place} · {item.period}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-[52ch] leading-relaxed text-muted">{item.description}</p>

                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
