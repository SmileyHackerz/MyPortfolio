import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface LogoLoopProps {
  items: LogoItem[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  className?: string;
}

export default function LogoLoop({
  items,
  direction = 'left',
  speed = 30,
  className = ''
}: LogoLoopProps) {
  const animationClass = direction === 'left' ? 'animate-loop' : 'animate-loop-reverse';

  return (
    <div className={`relative flex overflow-hidden w-full bg-surface/30 border border-border rounded-2xl py-8 ${className}`}>
      {/* Gradient Masks for smooth fade in/out at edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface/30 to-transparent z-10 pointer-events-none" />
      
      {/* The scrolling container */}
      <div 
        className={`flex w-max shrink-0 items-center gap-12 md:gap-24 px-6 md:px-12 ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Render two identical sets for seamless looping (-50% translation) */}
        {[...items, ...items].map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group cursor-default">
            {item.icon && (
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-background border border-border group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                {item.icon}
              </div>
            )}
            <span className="text-xl md:text-2xl font-bold tracking-wider uppercase">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
