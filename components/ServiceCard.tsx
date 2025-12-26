"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 bg-card rounded-2xl border border-card-border hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Grid Background Effect on Hover */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-black rounded-xl border border-card-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
          <Icon className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
