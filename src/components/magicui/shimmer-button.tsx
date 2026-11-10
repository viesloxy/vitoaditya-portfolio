import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
}

const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmerColor, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--shimmer-color": shimmerColor ?? "rgb(255 255 255 / 0.5)",
          } as React.CSSProperties
        }
        className={cn(
          "group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg border border-foreground/15 bg-background px-5 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:shadow-[0_0_24px_1px] hover:shadow-foreground/10",
          className
        )}
        {...props}
      >
        <span className="animate-shimmer-slide absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent opacity-40" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
