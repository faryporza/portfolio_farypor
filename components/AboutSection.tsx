"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Terminal, Cpu, Facebook, Instagram } from "lucide-react";

interface AboutSectionProps {
  personalInfo: {
    education: string;
    profileImage: string;
    socials: {
      facebook: string;
      instagram: string;
      website?: string;
      [key: string]: string | undefined;
    };
  };
}

export default function AboutSection({ personalInfo }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 px-6 relative z-10 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card border border-card-border rounded-2xl p-2 overflow-hidden">
                <img 
                  src={personalInfo.profileImage} 
                  alt="Profile" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Globe className="w-4 h-4" />
                </span>
                {personalInfo.education}
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Terminal className="w-4 h-4" />
                </span>
                Fullstack Developer & Cloud Enthusiast
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <Cpu className="w-4 h-4" />
                </span>
                Passionate about AI & Machine Learning
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card border border-card-border hover:border-blue-500/30 transition-all text-gray-500 hover:text-blue-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card border border-card-border hover:border-pink-500/30 transition-all text-gray-500 hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
              {personalInfo.socials.website && (
                <a href={personalInfo.socials.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card border border-card-border hover:border-green-500/30 transition-all text-gray-500 hover:text-green-500">
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
