import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

const dotColors = [
  "from-purple-500 to-pink-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-violet-500",
  "from-violet-500 to-purple-500",
];

export default function TimelineItem({
  title,
  subtitle,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  const dotColor = dotColors[index % dotColors.length];

  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <motion.div
          className={`flex h-5 w-5 rounded-full bg-gradient-to-br ${dotColor} z-10 shadow-lg`}
          style={{ boxShadow: "0 0 12px rgba(168,85,247,0.4)" }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.15 + 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-2 h-2 rounded-full bg-white/80 m-auto"></div>
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-purple-500/40 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>

      {/* Content */}
      <div className={cn("pb-10 flex-1", isLast ? "pb-0" : "")}>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-semibold text-base leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
          <span className={`inline-block mt-1 mb-3 px-2.5 py-0.5 text-xs rounded-full bg-gradient-to-r ${dotColor} text-white font-medium`}>
            {date}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
