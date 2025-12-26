"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillBadge({ name, delay = 0 }: { name: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative block px-4 py-2 bg-card text-gray-500 dark:text-gray-300 text-xs font-mono border border-card-border rounded-lg hover:border-blue-500/30 hover:text-foreground transition-all duration-300 cursor-default">
        <span className="text-blue-500 mr-1">$</span>
        {name}
      </span>
    </motion.div>
  );
}
