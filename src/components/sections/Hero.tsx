import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import TerminalCard from "../ui/TerminalCard";
import { fadeInLeft, scaleIn } from "../../utils/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-mono text-muted">
                Disponible pour de nouvelles opportunités
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Software Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Student
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-8 max-w-lg">
              Passionné par le développement web, l'architecture réseau et la
              cybersécurité. Conception de systèmes sécurisés, évolutifs et
              performants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-surface border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-surface-hover transition-colors"
              >
                Voir les projets
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="hidden lg:block relative"
          >
            <TerminalCard
              commands={[
                "npm install @fayemohamed/core",
                "import { buildSystem } from '@fayemohamed/core';",
                "",
                "// Initialisation de l'architecture sécurisée",
                "const system = buildSystem({",
                "  security: 'maximum',",
                "  performance: 'optimized',",
                "  scalability: true",
                "});",
                "",
                "await system.deploy();",
                "// 🚀 Système déployé avec succès !",
              ]}
              className="w-full shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
