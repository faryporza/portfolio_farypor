"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  technologies,
  delay = 0,
}: {
  title: string;
  description: string;
  technologies: string[];
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-card-border hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Window Header */}
      <div className="h-8 bg-gray-100 dark:bg-[#1a1a1a] border-b border-card-border px-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <div className="ml-auto text-[10px] font-mono text-gray-400 dark:text-gray-600">project.tsx</div>
      </div>

      {/* Content Area with abstract code bg */}
      <div className="relative h-48 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden group-hover:bg-gray-100 dark:group-hover:bg-[#0f0f0f] transition-colors">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-gray-300 dark:text-gray-700 group-hover:text-blue-500/50 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-3" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] font-mono bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-card-border">
            <button className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <ExternalLink className="w-3 h-3" /> Live Demo
            </button>
            <button className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-foreground transition-colors">
              <Github className="w-3 h-3" /> Source
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
