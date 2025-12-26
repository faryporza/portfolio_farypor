"use client";

import portfolioData from "@/data/portfolio.json";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { personalInfo, skills, services, projects } = portfolioData;

  return (
    <div
      className="bg-background text-foreground min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-100 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl dark:opacity-100 opacity-30" />
      </div>

      <Navbar />
      <HeroSection personalInfo={personalInfo} />
      <AboutSection personalInfo={personalInfo} />
      <ServicesSection services={services} />
      <TechStackSection skills={skills} />
      <ProjectsSection projects={projects} githubUrl={personalInfo.socials.github} />
      <ContactSection personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
