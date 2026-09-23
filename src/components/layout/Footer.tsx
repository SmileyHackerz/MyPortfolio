import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <a href="#home" className="font-mono text-foreground">
          {profile.firstName.toLowerCase()}<span className="text-primary">.</span>{profile.lastName.toLowerCase()}
        </a>
        <p>
          {new Date().getFullYear()} · {profile.firstName} {profile.lastName}, {profile.location}
        </p>
        <p className="text-muted/70">React, Tailwind CSS, Motion.</p>
      </div>
    </footer>
  );
}
