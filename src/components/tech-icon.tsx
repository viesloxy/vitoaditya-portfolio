/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface TechIconProps {
  slug: string;
  name?: string;
  invert?: boolean;
  className?: string;
}

export function TechIcon({ slug, name, invert, className }: TechIconProps) {
  return (
    <img
      src={`/icons/${slug}.svg`}
      alt={name || slug}
      loading="lazy"
      className={cn("size-4 object-contain", invert && "tech-icon-invert", className)}
    />
  );
}
