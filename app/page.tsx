"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Bug,
  Mail,
  MapPin,
  Github,
  ArrowRight,
  Terminal,
  Globe
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SkillBadge from "@/components/SkillBadge";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";

import portfolioData from "@/data/portfolio.json";

// Icon mapping for dynamic data
const iconMap: { [key: string]: React.ElementType } = {
  Globe: Globe,
  Bug: Bug,
  Terminal: Terminal,
};

export default function Home() {
  const containerRef = useRef(null);
  
  const { skills, services, projects } = portfolioData;

  return (
    <div
      ref={containerRef}
      className="bg-background text-foreground min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-100 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl dark:opacity-100 opacity-30" />
      </div>

      {/* Navigation - Dark Glass */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wide"
          >
            Hello, World! I'm Thanakit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight"
          >
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">
              Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Developer focused on building <span className="text-foreground font-medium">high-performance</span> web applications with modern architecture and clean code.
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
              href="#contact"
              className="px-8 py-3.5 text-foreground rounded-lg text-sm font-medium border border-card-border hover:bg-card transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> Github Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mb-4" />
            <p className="text-gray-500 dark:text-gray-400 max-w-lg">
              Specialized in solving problems through code and creating seamless user interfaces.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={iconMap[service.icon]}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stack/Skills Section */}
      <section id="skills" className="py-24 px-6 bg-card/50 border-y border-card-border relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl font-mono text-gray-500 dark:text-gray-400 mb-2">{'<TechStack />'}</h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-end gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
              <span className="text-gray-500 font-mono text-sm mb-1 pb-1">./projects</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Selected projects demonstrating architecture and performance.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-foreground mb-6">Let's Build Something</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  Currently open for freelance projects and job opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:tanakit200663@gmail.com" className="flex items-center gap-4 text-gray-500 dark:text-gray-300 hover:text-foreground transition-colors">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-card-border">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-mono text-sm">tanakit200663@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-card-border">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-mono text-sm">Chiang Mai, TH</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-foreground transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-700"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-foreground transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-700"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-foreground transition-all outline-none resize-none placeholder:text-gray-400 dark:placeholder:text-gray-700"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border bg-background relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <p>© 2025 Thanakit C. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-foreground cursor-pointer transition-colors">git status</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">npm run build</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
