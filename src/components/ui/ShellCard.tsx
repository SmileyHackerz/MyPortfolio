import type { ReactNode } from 'react';
import { profile } from '../../data/profile';

/** Une ligne de la session : la commande tapée, puis ce qu'elle a répondu. */
interface Exchange {
  command: string;
  output: ReactNode;
}

/**
 * Carte d'identité du hero, présentée comme une session shell.
 *
 * Registre volontairement distinct de `BootSequence`, qui est un journal système
 * (`> ligne [ OK ]`) : ici ce sont des commandes et leurs réponses. Rien ne se tape
 * tout seul, rien ne clignote sauf le curseur : la carte est rendue une fois et
 * ne coûte plus rien ensuite.
 */
export default function ShellCard() {
  const exchanges: Exchange[] = [
    {
      command: 'whoami',
      output: (
        <>
          <span className="text-foreground">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="text-muted"> — {profile.title}</span>
          <br />
          <span className="text-muted">{profile.location}</span>
        </>
      ),
    },
    {
      command: 'cat formation.txt',
      output: (
        <>
          Licence 3 Informatique — ESP Dakar
          <br />
          DUT Informatique — 2024 à 2026
        </>
      ),
    },
    {
      command: 'stack --principale',
      output: 'React · NestJS · PostgreSQL · Docker',
    },
    {
      command: 'status',
      output: (
        <span className="inline-flex items-center gap-2 text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          {profile.availableLabel}
        </span>
      ),
    },
  ];

  return (
    <div className="font-mono text-[12px] leading-relaxed sm:text-sm">
      {/* En-tête : le nom d'hôte, pas trois pastilles de couleur */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-muted/70">
        <span>mfaye@portfolio:~</span>
        <span aria-hidden>bash</span>
      </div>

      <div className="space-y-4 px-4 py-5">
        {exchanges.map(({ command, output }) => (
          <div key={command}>
            <p className="text-foreground/90">
              <span className="mr-2 select-none text-primary" aria-hidden>
                $
              </span>
              {command}
            </p>
            <p className="mt-1 pl-[1.15rem] text-foreground/70">{output}</p>
          </div>
        ))}

        {/* Invite laissée ouverte : la session continue */}
        <p aria-hidden>
          <span className="mr-2 select-none text-primary">$</span>
          <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-primary/80 motion-safe:animate-pulse" />
        </p>
      </div>
    </div>
  );
}
