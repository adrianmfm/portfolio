import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-border/50">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-widest text-muted-foreground mb-10"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group block p-5 border border-border rounded-xl hover:border-foreground/20 hover:bg-secondary/40 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-0.5" />
            </div>
            <ul className="space-y-1.5">
              {project.description.slice(0, 3).map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
