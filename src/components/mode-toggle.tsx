"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes mounted guard against hydration mismatch
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={cn("block size-full", className)} />;
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "size-full cursor-pointer text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-full" />
      ) : (
        <MoonIcon className="size-full" />
      )}
    </button>
  );
}
