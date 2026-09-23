import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';

const navLinks = [
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Parcours', href: '#journey' },
  { name: 'Diplômes', href: '#credentials' },
  { name: 'À propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

/** Navbar en pilule flottante, se resserre au scroll. */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setIsScrolled(latest > 40));

  // Section active pour souligner le lien
  useEffect(() => {
    const ids = ['home', ...navLinks.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'home' ? '' : e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto w-full max-w-4xl rounded-full border backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-background/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_18px_40px_-24px_rgb(0_0_0/0.9)]'
            : 'border-white/[0.06] bg-surface/35 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]'
        }`}
      >
        <div className="flex items-center justify-between pl-5 pr-2 py-2">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Retour en haut">
            <span className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary group-hover:bg-primary group-hover:text-background transition-colors">
              MF
            </span>
            <span className="font-mono text-sm tracking-tight text-foreground">
              {profile.firstName.toLowerCase()}<span className="text-primary">.</span>{profile.lastName.toLowerCase()}
            </span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Statut + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted hover:text-foreground p-2"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="panel pointer-events-auto absolute inset-x-4 top-16 p-2 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-foreground hover:bg-white/5 font-mono text-sm transition-colors"
              >
                <span className="text-primary">&gt;</span>
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-background font-medium"
            >
              Me contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
