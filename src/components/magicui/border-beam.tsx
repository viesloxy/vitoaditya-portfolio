import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  initialOffsetX?: number;
}

export function BorderBeam({
  className,
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  reverse = false,
  initialOffsetX = 0,
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={
        {
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "animate-border-beam absolute aspect-square bg-gradient-to-l from-transparent via-[var(--color-from)] via-30% to-[var(--color-to)]",
          reverse && "[animation-direction:reverse]",
          className
        )}
        style={
          {
            width: `calc(${size}px * 2)`,
            offsetPath: `rect(0 auto auto 0 round calc(var(--radius) + 4px))`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            offsetRotate: "0deg",
            animationDelay: `${delay}s`,
            translateX: `${initialOffsetX}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
