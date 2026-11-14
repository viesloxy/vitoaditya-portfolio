"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useModeAnimation } from "react-theme-switch-animation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const { ref, toggleSwitchTheme } = useModeAnimation({
    isDarkMode: isDark,
    onDarkModeChange: (dark) => setTheme(dark ? "dark" : "light"),
  });

  if (!mounted) {
    return <span className={cn("block size-full", className)} />;
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "size-full cursor-pointer text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      onClick={toggleSwitchTheme}
    >
      {isDark ? (
        <SunIcon className="size-full" />
      ) : (
        <MoonIcon className="size-full" />
      )}
    </button>
  );
}