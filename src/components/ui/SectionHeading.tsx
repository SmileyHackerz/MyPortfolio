import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="text-primary font-mono text-xl md:text-2xl mr-2">&gt;</span>
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted max-w-2xl text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
      <motion.div 
        className="h-px w-full bg-border mt-8 relative"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-primary" />
      </motion.div>
    </div>
  );
}
