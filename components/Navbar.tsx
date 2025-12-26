"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-card-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-foreground tracking-wider flex items-center gap-2">
          <span className="text-blue-500">&lt;</span>
          TC
          <span className="text-blue-500">/&gt;</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a
            href="#contact"
            className="px-4 py-2 bg-card text-foreground rounded-md border border-card-border hover:bg-white/10 transition-all hover:border-blue-500/30"
          >
            Contact_Me
          </a>
          <div className="relative z-[100]">
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden relative z-[100]">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
