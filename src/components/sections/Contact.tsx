import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Download,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      value: "fayemohamed82@gmail.com",
      href: "mailto:fayemohamed82@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "group-hover:text-blue-400",
      borderColor: "hover:border-blue-400/50",
    },
    {
      name: "Téléphone",
      value: "+221 78 525 99 28",
      href: "tel:+221785259928",
      icon: <Phone className="w-5 h-5" />,
      color: "group-hover:text-emerald-400",
      borderColor: "hover:border-emerald-400/50",
    },
    {
      name: "WhatsApp",
      value: "+221 78 525 99 28",
      href: "https://wa.me/221785259928",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "group-hover:text-green-500",
      borderColor: "hover:border-green-500/50",
    },
    {
      name: "LinkedIn",
      value: "mohamed-faye-1420663a8",
      href: "https://www.linkedin.com/in/mohamed-faye-1420663a8",
      icon: <Linkedin className="w-5 h-5" />,
      color: "group-hover:text-blue-500",
      borderColor: "hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      value: "SmileyHackerz",
      href: "https://github.com/SmileyHackerz",
      icon: <Github className="w-5 h-5" />,
      color: "group-hover:text-gray-300",
      borderColor: "hover:border-gray-300/50",
    },
    {
      name: "Instagram",
      value: "@mouh_negro",
      href: "https://www.instagram.com/mouh_negro/",
      icon: <Instagram className="w-5 h-5" />,
      color: "group-hover:text-pink-500",
      borderColor: "hover:border-pink-500/50",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-surface/30 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Me Contacter"
          subtitle="Ouvert aux opportunités, aux collaborations ou simplement pour discuter de technologie."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left Column: Message & CV Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Construisons ensemble <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                des solutions innovantes.
              </span>
            </h3>

            <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
              Que vous ayez un projet en tête, besoin d'une consultation ou que
              vous cherchiez un développeur dévoué pour rejoindre votre équipe,
              je suis toujours ouvert aux nouvelles opportunités.
            </p>

            <div>
              <motion.a
                href="/cv.pdf"
                download="CV_Mohamed_Faye.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group flex items-center justify-between p-5 rounded-xl bg-background border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${method.borderColor}`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`p-3 rounded-lg bg-surface border border-border transition-colors duration-300 ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted font-medium mb-1">
                      {method.name}
                    </p>
                    <p className="text-foreground font-mono text-sm group-hover:text-primary transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
