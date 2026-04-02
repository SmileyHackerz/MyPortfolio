import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';
import { journeyData } from '../../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-surface/30 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Mon Parcours" 
          subtitle="Une chronologie de mon parcours académique et de mes expériences." 
        />

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-24">
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute left-[-4px] md:left-[28px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-background border border-border p-6 md:p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <span className="text-primary font-mono text-sm mb-3 block font-medium tracking-wide">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
