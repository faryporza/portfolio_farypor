"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { Globe, Bug, Terminal } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Globe: Globe,
  Bug: Bug,
  Terminal: Terminal,
};

interface ServicesSectionProps {
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-sm font-mono text-blue-500 mb-2 tracking-widest uppercase">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">Services I Provide</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-md font-light">
              Specialized in building scalable applications with a focus on performance and user experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ServiceCard
                icon={iconMap[service.icon as keyof typeof iconMap]}
                title={service.title}
                description={service.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
