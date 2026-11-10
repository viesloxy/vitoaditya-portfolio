import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  children,
  className,
  reverse = false,
  duration = 20,
  radius = 80,
  path = true,
}: OrbitingCirclesProps) {
  const childCount = React.Children.count(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute inset-0 size-full text-muted-foreground/20"
          style={
            {
              "--radius": radius,
              "--duration": duration,
            } as React.CSSProperties
          }
        >
          <circle cx="100" cy="100" r={radius} />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (index / Math.max(1, childCount)) * 360;
        return (
          <div
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--angle": angle,
              } as React.CSSProperties
            }
            className={cn(
              "animate-orbit absolute flex aspect-square transform-gpu items-center justify-center rounded-full border border-border bg-background shadow-md",
              reverse && "[animation-direction:reverse]",
              className
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
