import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skillsData } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Compétences" 
          subtitle="Un aperçu de mon expertise technique et de mes langages de programmation." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="text-primary font-mono text-lg group-hover:text-secondary transition-colors">&gt;</span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-muted font-medium text-sm md:text-base group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-primary font-mono text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                      {/* Progress Bar Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.2 + (skillIndex * 0.1) + (categoryIndex * 0.1), 
                          ease: "easeOut" 
                        }}
                        className="h-full bg-primary rounded-full relative shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      >
                        {/* Inner highlight for a "glass/neon" effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-[1px] rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}

                {/* Fun/Stylish block for Frameworks to fill space */}
                {category.title === 'Frameworks' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-background border border-border p-5 group hover:border-primary/40 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-border">
                          <Sparkles className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                          <div className="absolute inset-0 border-2 border-t-primary/50 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_3s_linear_infinite]" />
                          <div className="absolute inset-0 border-2 border-b-secondary/50 border-t-transparent border-r-transparent border-l-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">Toujours en veille</p>
                          <p className="text-xs font-mono text-muted mt-1 flex items-center gap-1">
                            <span className="text-primary">&gt;</span> npm install new-skills
                            <span className="inline-block w-1.5 h-3 bg-primary animate-pulse ml-0.5" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
