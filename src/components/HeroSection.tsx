import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function HeroSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Text */}
        <div className="flex-1">
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6">
            <span
              className="h-2 w-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 8px #a8ff72" }}
            />
            <span
              className="text-xs uppercase tracking-widest text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-3"
          >
            Adrian Flores
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground font-light mb-8">
            Full Stack Developer — React, Next.js, TypeScript
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="text-sm text-muted-foreground leading-relaxed max-w-md mb-10"
          >
            Especializado en frontend moderno y plataformas web escalables.
            Experiencia en eCommerce, apps móviles y sistemas internos. Trabajo
            con equipos ágiles participando en producto, UX y arquitectura.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0 flex justify-center md:justify-end"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            <img
              src="profile.jpeg"
              alt="Adrian Flores"
              className="w-full h-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: "1px solid #222018" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 h-px bg-border origin-left"
      />
    </section>
  );
}
