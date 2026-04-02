import { motion } from 'motion/react';
import { Box, Layers, Sparkles } from 'lucide-react';

interface ThreeDPlaceholderProps {
  id: string;
  title?: string;
  description?: string;
  type?: 'avatar' | 'scene' | 'object';
  className?: string;
}

export default function ThreeDPlaceholder({ 
  id, 
  title = "3D Component Space", 
  description = "Reserved for React Bits / WebGL integration",
  type = 'scene',
  className = '' 
}: ThreeDPlaceholderProps) {
  
  const getIcon = () => {
    switch(type) {
      case 'avatar': return <Box className="w-10 h-10 text-primary" />;
      case 'object': return <Sparkles className="w-10 h-10 text-secondary" />;
      case 'scene': default: return <Layers className="w-10 h-10 text-primary" />;
    }
  };

  return (
    <div 
      id={`3d-wrapper-${id}`}
      className={`relative flex flex-col items-center justify-center border border-dashed border-border/50 bg-surface/30 rounded-2xl overflow-hidden group ${className}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 flex flex-col items-center text-center p-6">
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border border-primary/30 rounded-xl flex items-center justify-center mb-4 bg-background/50 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        >
          {getIcon()}
        </motion.div>
        
        <p className="text-primary font-mono text-sm bg-background/80 px-3 py-1 rounded border border-primary/20 backdrop-blur-sm mb-2">
          [ {title} ]
        </p>
        <p className="text-muted text-xs max-w-[250px]">
          {description}
        </p>
        <p className="text-foreground/30 font-mono text-[10px] mt-4">
          ID: {id}
        </p>
      </div>
    </div>
  );
}
