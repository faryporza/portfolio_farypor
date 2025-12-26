"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SkillBadge from "@/components/SkillBadge";

interface TechStackSectionProps {
  skills: {
    [key: string]: string[];
  };
}

export default function TechStackSection({ skills }: TechStackSectionProps) {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono text-blue-500 mb-2 tracking-widest uppercase">Stack</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">Technologies & Tools</h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <AnimatedSection key={category} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-blue-500/30 transition-all h-full">
                <h4 className="text-lg font-semibold text-foreground mb-6 capitalize flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
