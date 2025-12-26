"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsSectionProps {
  projects: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  githubUrl: string;
}

export default function ProjectsSection({ projects, githubUrl }: ProjectsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-sm font-mono text-blue-500 mb-2 tracking-widest uppercase">Work</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h3>
            </div>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-2 text-sm font-medium">
              View all on Github <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>

        <div className="relative h-[600px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-2xl px-4"
            >
              <ProjectCard {...projects[currentIndex]} delay={0} />
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 md:-left-12 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-card-border hover:bg-card hover:text-blue-500 transition-all shadow-lg"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 md:-right-12 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-card-border hover:bg-card hover:text-blue-500 transition-all shadow-lg"
            onClick={() => paginate(1)}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center gap-3 mt-4">
            {projects.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-300 dark:bg-gray-700 w-2 hover:bg-blue-400"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}
