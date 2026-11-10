import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  shimmerWidth?: number;
  children: React.ReactNode;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <span
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "mx-auto max-w-md bg-clip-text text-transparent bg-[linear-gradient(110deg,var(--muted-foreground)_45%,var(--foreground)_55%,var(--muted-foreground))] bg-[length:250%_100%] animate-shiny-text",
        className
      )}
    >
      {children}
    </span>
  );
}
