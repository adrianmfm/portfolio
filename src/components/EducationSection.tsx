import { education } from "@/lib/data";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-16 border-t border-border/50">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-widest text-muted-foreground mb-10"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Educación
      </motion.h2>

      <div className="space-y-0">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution + edu.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="border-b border-border/50 py-6 first:pt-0 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <h3 className="text-sm font-medium text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{edu.institution} — {edu.location}</p>
              </div>
              <span
                className="text-xs text-muted-foreground shrink-0 mt-0.5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
