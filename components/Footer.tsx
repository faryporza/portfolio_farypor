"use client";

interface FooterProps {
  personalInfo: {
    name: string;
    socials: {
      github: string;
      [key: string]: string;
    };
  };
}

export default function Footer({ personalInfo }: FooterProps) {
  return (
    <footer className="py-12 px-6 border-t border-card-border relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-blue-500">&lt;</span>
          TC
          <span className="text-blue-500">/&gt;</span>
        </div>
        <p className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-8 text-sm font-mono text-gray-500">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Github</a>
        </div>
      </div>
    </footer>
  );
}
