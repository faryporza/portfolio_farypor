"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="relative p-2 rounded-lg bg-card border border-card-border text-gray-500 opacity-50 w-9 h-9 flex items-center justify-center"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        console.log("Theme toggle clicked");
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className="relative p-2 rounded-lg bg-card border border-card-border hover:border-blue-500/30 transition-all text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white cursor-pointer flex items-center justify-center z-[100] pointer-events-auto"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
