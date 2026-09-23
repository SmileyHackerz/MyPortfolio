import type { ProjectStatus } from '../../data/projects';
import { statusLabel } from '../../data/projects';

const tone: Record<ProjectStatus, { dot: string; text: string; ring: string }> = {
  online: { dot: 'bg-secondary shadow-[0_0_10px_rgba(34,197,94,0.8)]', text: 'text-secondary', ring: 'border-secondary/30' },
  internal: { dot: 'bg-amber shadow-[0_0_10px_rgba(245,158,11,0.8)]', text: 'text-amber', ring: 'border-amber/30' },
  soon: { dot: 'bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]', text: 'text-primary', ring: 'border-primary/30' },
  code: { dot: 'bg-foreground/80', text: 'text-foreground/80', ring: 'border-white/15' },
};

/** État réel d'un projet : la LED porte une vraie information, jamais décorative. */
export default function StatusPill({ status, className = '' }: { status: ProjectStatus; className?: string }) {
  const t = tone[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] ${t.text} ${t.ring} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden />
      {statusLabel[status]}
    </span>
  );
}
