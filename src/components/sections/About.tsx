import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';
import { Code2, Shield, Cpu } from 'lucide-react';
import TiltedCard from '../ui/TiltedCard';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="À propos de moi" 
          subtitle="Apprendre et construire à l'intersection du développement, de l'infrastructure et de la sécurité." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual / 3D Placeholder & Profile */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Main Image/Canvas Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <TiltedCard
                imageSrc="/Design sans titre.png"
                altText="Mohamed Faye"
                captionText="Mohamed Faye"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.02}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 pointer-events-none rounded-2xl" />
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl pointer-events-none" />
                  </>
                }
              />
            </div>

            {/* Floating Badge */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-2 md:bottom-8 md:-right-8 bg-background border border-border p-4 rounded-xl shadow-2xl flex items-center gap-4 z-40"
            >
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center border border-border">
                <Cpu className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-foreground font-bold font-mono text-sm">Vision Globale</p>
                <p className="text-muted text-xs">Architecture de bout en bout</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Software Engineering Student & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Problem Solver</span>
            </h3>
            
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>Salut, moi c’est Mohamed Faye.</p>
              <p>Étudiant en 2e année de DUT Informatique à l’ESP de Dakar, je développe progressivement mes compétences en programmation et en développement web à travers des projets concrets.</p>
              <p>Je m’intéresse aussi à la cybersécurité et à l’intelligence artificielle, des domaines dans lesquels je compte évoluer.</p>
              <p>Je suis encore en apprentissage, mais je suis motivé, curieux et déterminé à devenir un développeur solide.</p>
              <p>Bienvenue dans mon parcours.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors group">
                <Code2 className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-foreground font-bold mb-2">Code Propre</h4>
                <p className="text-muted text-sm leading-relaxed">Architectures maintenables, modulaires et fortement typées.</p>
              </div>
              <div className="p-5 rounded-xl bg-surface border border-border hover:border-secondary/40 transition-colors group">
                <Shield className="w-6 h-6 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-foreground font-bold mb-2">Sécurité Intégrée</h4>
                <p className="text-muted text-sm leading-relaxed">Intégration des pratiques de sécurité dès le premier jour.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
