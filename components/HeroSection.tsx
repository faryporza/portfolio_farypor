"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

interface HeroSectionProps {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    socials: {
      github: string;
      [key: string]: string;
    };
  };
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wide"
        >
          Hi, I'm {personalInfo.name}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight"
        >
          {personalInfo.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">
            {personalInfo.subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-foreground text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-foreground rounded-lg text-sm font-medium border border-card-border hover:bg-card transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> Github Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
