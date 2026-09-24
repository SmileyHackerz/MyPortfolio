import { ArrowDown } from 'lucide-react';

/**
 * Schéma de la boucle d'un programme sans interface.
 *
 * Affiché à la place de la couverture quand il n'y a rien à photographier.
 * Il s'annonce comme un schéma : personne ne doit le prendre pour une capture.
 */
export default function ProjectDiagram({ label, steps }: { label: string; steps: string[] }) {
  return (
    <figure className="panel schematic flex flex-col justify-center p-6 lg:p-8">
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Schéma · {label}
      </figcaption>

      <ol className="mt-6 space-y-1">
        {steps.map((step, i) => (
          <li key={step}>
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-background/40 px-4 py-3">
              <span className="tabular font-mono text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm text-foreground/90 sm:text-base">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden>
                <ArrowDown className="h-3.5 w-3.5 text-muted/60" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
