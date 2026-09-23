import { useEffect, useRef } from 'react';

interface ParticleGlobeProps {
  className?: string;
  /** Nombre de points à la surface ; dérivé du viewport quand il n'est pas fourni */
  count?: number;
  /** Part du plus petit côté occupée par le rayon */
  radiusRatio?: number;
  /** Trace les deux orbites autour de la sphère */
  orbits?: boolean;
}

/** Trois teintes seulement : le dessin reste dans la palette du site. */
const COLORS = ['226, 232, 240', '59, 130, 246', '34, 197, 94'] as const;
/** Opacités quantifiées : une écriture de `fillStyle` par palier au lieu d'une par point. */
const BANDS = 6;

type Point = { x: number; y: number; z: number; color: number };

/**
 * Globe de particules dessiné au canvas : points en spirale de Fibonacci,
 * rotation lente autour d'un axe incliné, profondeur rendue par la taille et l'opacité.
 *
 * Le dessin est groupé par couleur et par palier d'opacité, et chaque point est un
 * `fillRect` plutôt qu'un `arc` : à cette taille le rendu est identique et le coût par
 * image tombe fortement. Se met en pause hors écran, se fige sous `prefers-reduced-motion`.
 */
export default function ParticleGlobe({ className = '', count, radiusRatio = 0.42, orbits = true }: ParticleGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 639px)').matches;
    const total = count ?? (small ? 700 : 1600);
    const TILT = -0.42;

    let width = 0;
    let height = 0;
    let radius = 0;
    let raf = 0;
    let running = false;
    let angle = 0;
    let previous = 0;
    let stopObserving: (() => void) | undefined;

    // Répartition régulière sur la sphère
    const golden = Math.PI * (3 - Math.sqrt(5));
    const points: Point[] = Array.from({ length: total }, (_, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      const roll = Math.random();
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        color: roll > 0.94 ? 2 : roll > 0.68 ? 1 : 0,
      };
    });

    // Tampons réutilisés : aucune allocation pendant l'animation
    const buckets = Array.from({ length: COLORS.length * BANDS }, () => ({
      data: new Float32Array(total * 3),
      length: 0,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      radius = Math.min(width, height) * radiusRatio;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const cosT = Math.cos(TILT);
      const sinT = Math.sin(TILT);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      for (const b of buckets) b.length = 0;

      for (const p of points) {
        const rx = p.x * cosA + p.z * sinA;
        const rz = p.z * cosA - p.x * sinA;
        const ry = p.y * cosT - rz * sinT;
        const rz2 = rz * cosT + p.y * sinT;

        const depth = (rz2 + 1) / 2; // 0 au fond, 1 devant
        const perspective = 0.82 + depth * 0.18;
        const size = 0.5 + depth * 1.5;
        const band = Math.min(BANDS - 1, (depth * depth * BANDS) | 0);
        const bucket = buckets[p.color * BANDS + band];
        const o = bucket.length * 3;
        bucket.data[o] = cx + rx * radius * perspective - size / 2;
        bucket.data[o + 1] = cy + ry * radius * perspective - size / 2;
        bucket.data[o + 2] = size;
        bucket.length += 1;
      }

      for (let c = 0; c < COLORS.length; c += 1) {
        for (let band = 0; band < BANDS; band += 1) {
          const bucket = buckets[c * BANDS + band];
          if (!bucket.length) continue;
          const alpha = 0.06 + ((band + 0.5) / BANDS) * 0.72;
          ctx.fillStyle = `rgba(${COLORS[c]}, ${alpha.toFixed(3)})`;
          const { data, length } = bucket;
          for (let i = 0; i < length; i += 1) {
            const o = i * 3;
            ctx.fillRect(data[o], data[o + 1], data[o + 2], data[o + 2]);
          }
        }
      }

      if (orbits) {
        // Orbite extérieure : le trait ne bouge pas, seul le satellite avance
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.055)';
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2);
        ctx.stroke();

        const satellite = -angle * 1.6;
        ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
        ctx.beginPath();
        ctx.arc(cx + Math.cos(satellite) * radius * 1.1, cy + Math.sin(satellite) * radius * 1.1, 3, 0, Math.PI * 2);
        ctx.fill();

        // Orbite intérieure : ce sont les tirets qui défilent, pas le calque
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.075)';
        ctx.setLineDash([3, 11]);
        ctx.lineDashOffset = -angle * radius * 0.9;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.88, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Halo de limbe : la sphère se détache du fond
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.88, cx, cy, radius * 1.22);
      glow.addColorStop(0, 'rgba(59, 130, 246, 0)');
      glow.addColorStop(0.45, 'rgba(59, 130, 246, 0.16)');
      glow.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      if (!reduceMotion && running) {
        // Vitesse liée au temps écoulé : identique à 60 et à 120 Hz
        const delta = previous ? Math.min(time - previous, 64) : 16.7;
        previous = time;
        angle += delta * 0.000072;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    if (reduceMotion) {
      draw(0);
    } else {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          previous = 0;
          raf = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      });
      io.observe(canvas);
      stopObserving = () => io.disconnect();
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (reduceMotion) draw(0);
      }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      running = false;
      stopObserving?.();
      window.removeEventListener('resize', onResize);
    };
  }, [count, radiusRatio, orbits]);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden="true" />;
}
