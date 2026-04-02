import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/SmileyHackerz" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-faye-1420663a8" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/mouh_negro/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:fayemohamed82@gmail.com" className="text-muted hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-muted text-sm font-mono text-center">
          &copy; {new Date().getFullYear()} Portfolio Ingénierie Logicielle. Tous droits réservés.
        </p>
        <p className="text-muted/70 text-xs font-mono mt-2 text-center">
          Construit avec React, Tailwind CSS et Motion.
        </p>
      </div>
    </footer>
  );
}
