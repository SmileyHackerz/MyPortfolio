import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BootLine {
  text: string;
  /** Tag affiché en fin de ligne */
  tag?: 'OK' | 'PRET';
  /** Pause avant d'afficher la ligne (ms) */
  delay: number;
}

const LINES: BootLine[] = [
  { text: 'init portfolio.sys', delay: 250 },
  { text: 'chargement du profil : Mohamed Faye', tag: 'OK', delay: 420 },
  { text: 'montage des projets (6)', tag: 'OK', delay: 380 },
  { text: 'modules sécurité', tag: 'OK', delay: 340 },
  { text: 'pile réseau · HCIA-Datacom', tag: 'OK', delay: 300 },
  { text: 'prêt.', tag: 'PRET', delay: 450 },
];

const EXIT_DELAY = 650;

interface BootSequenceProps {
  onDone: () => void;
}

/**
 * Écran de démarrage façon terminal. Se joue une fois par session ;
 * un clic ou une touche permet de le passer.
 */
export default function BootSequence({ onDone }: BootSequenceProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
  };

  // Affiche les lignes une à une
  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    LINES.forEach((line, i) => {
      elapsed += line.delay;
      timers.push(
        setTimeout(() => {
          if (!cancelled) setVisibleCount(i + 1);
        }, elapsed),
      );
    });
    timers.push(setTimeout(() => !cancelled && finish(), elapsed + EXIT_DELAY));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Passer avec une touche ou un clic
  useEffect(() => {
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!leaving && (
        <motion.div
          key="boot"
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden cursor-pointer select-none"
          aria-label="Chargement du portfolio"
        >
          {/* Grille + halo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="panel schematic scan relative z-10 mx-6 w-full max-w-xl overflow-hidden p-6 font-mono text-sm md:p-8 md:text-base" data-active="true">
            <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-4 text-xs text-muted/70">
              <span>mfaye@portfolio:~</span>
              <span>v2.0</span>
            </div>

            <ul className="space-y-2.5">
              {LINES.slice(0, visibleCount).map((line, i) => (
                <motion.li
                  key={line.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-between gap-6"
                >
                  <span className={line.tag === 'PRET' ? 'text-foreground' : 'text-muted'}>
                    <span className="text-primary mr-3">&gt;</span>
                    {line.text}
                    {i === visibleCount - 1 && !line.tag && (
                      <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle animate-pulse" />
                    )}
                  </span>
                  {line.tag === 'OK' && (
                    <span className="text-secondary text-xs tracking-widest">[ OK ]</span>
                  )}
                  {line.tag === 'PRET' && (
                    <span className="flex items-center gap-2 text-secondary text-xs tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      EN LIGNE
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Barre de progression */}
            <div className="mt-10 h-px w-full bg-border relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${(visibleCount / LINES.length) * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-widest text-muted/50">
              Appuyez sur une touche pour passer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
