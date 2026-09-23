import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // profondeur 0.2–1 : parallaxe et taille
  vx: number;
  vy: number;
  r: number;
  a: number; // alpha
  hue: 'blue' | 'green' | 'white';
}

interface ParticleFieldProps {
  className?: string;
  /** Densité : particules par 10 000 px² */
  density?: number;
}

const COLORS = {
  blue: '59, 130, 246',
  green: '34, 197, 94',
  white: '229, 231, 235',
};

/**
 * Champ de particules dérivantes sur canvas, avec léger parallaxe à la souris.
 * Se coupe si l'utilisateur préfère réduire les animations.
 */
export default function ParticleField({ className = '', density = 0.9 }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    const spawn = (): Particle => {
      const z = 0.2 + Math.random() * 0.8;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * 0.12 * z,
        vy: (-0.04 - Math.random() * 0.1) * z,
        r: 0.4 + z * 1.3,
        a: 0.15 + z * 0.55,
        hue: pick<Particle['hue']>(['blue', 'blue', 'white', 'white', 'white', 'green']),
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((width * height) / 10000 * density);
      particles = Array.from({ length: count }, spawn);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
          if (p.x < -4) p.x = width + 4;
          if (p.x > width + 4) p.x = -4;
        }
        const px = p.x + mouse.x * 18 * p.z;
        const py = p.y + mouse.y * 18 * p.z;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.hue]}, ${p.a})`;
        ctx.fill();
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(draw);
    };

    // Ne dessine que lorsque le canvas est à l'écran
    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(draw);
      } else if (!visible && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    if (reduceMotion) draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} aria-hidden="true" />;
}
