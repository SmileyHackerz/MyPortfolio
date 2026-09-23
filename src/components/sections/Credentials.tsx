import { motion, useReducedMotion } from 'motion/react';
import { Award, GraduationCap, ScrollText } from 'lucide-react';
import { credentialsData } from '../../data/credentials';

const ease = [0.16, 1, 0.3, 1] as const;

const icons = [GraduationCap, Award, ScrollText];

export default function Credentials() {
  const reduce = useReducedMotion();

  return (
    <section id="credentials" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-6xl">
            Diplômes <span className="text-muted">et certifications.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {credentialsData.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className={c.image ? 'lg:col-span-5' : c.id === 'dut' ? 'lg:col-span-4' : 'lg:col-span-3'}
              >
                <div className="panel schematic flex h-full flex-col p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="tile h-11 w-11 shrink-0 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="tabular text-sm text-muted">{c.date}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground text-balance">{c.title}</h3>
                  <p className="mt-1.5 text-foreground/75">{c.level}</p>
                  <p className="mt-1 text-sm text-muted">{c.issuer}</p>

                  <div className="mt-5 flex items-start gap-5">
                    <p className="max-w-[46ch] leading-relaxed text-muted">{c.detail}</p>
                    {c.image && (
                      <div className="hidden w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-background/60 sm:block">
                        <img
                          src={c.image}
                          alt={`Certificat ${c.title}`}
                          loading="lazy"
                          className="aspect-[1/1.4] w-full object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
