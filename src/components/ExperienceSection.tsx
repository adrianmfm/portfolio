import { workExperience } from "@/lib/data";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-widest text-muted-foreground mb-10"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Experiencia
      </motion.h2>

      <div className="space-y-0">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.company + job.period}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group border-b border-border/50 py-8 first:pt-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-5">
              <div>
                <h3 className="text-base font-medium text-foreground">{job.company}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{job.position}</p>
              </div>
              <span
                className="text-xs text-muted-foreground shrink-0 mt-0.5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {job.period}
              </span>
            </div>

            <ul className="space-y-2">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
