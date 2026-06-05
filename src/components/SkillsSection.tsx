import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const categories = [
  { label: "Languages",    items: skills.programmingLanguages },
  { label: "Frontend",     items: skills.frontendDevelopment },
  { label: "Backend",      items: skills.backendDevelopment },
  { label: "Databases",    items: skills.databaseAndStorage },
  { label: "Cloud",        items: skills.cloudAndDevOps },
  { label: "Tools",        items: skills.toolsAndMethodologies },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-border/50">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-widest text-muted-foreground mb-10"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Skills
      </motion.h2>

      <div className="space-y-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: ci * 0.06 }}
            className="flex flex-col md:flex-row md:items-start gap-3 md:gap-0"
          >
            <span
              className="text-xs text-muted-foreground/60 uppercase tracking-widest w-28 shrink-0 pt-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {cat.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border rounded-full text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
