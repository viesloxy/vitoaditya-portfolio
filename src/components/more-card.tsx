"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export function MoreCard({
  text,
  linkLabel,
  href,
}: {
  text: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card p-6 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-xl">
        <FlickeringGrid
          className="h-full w-full translate-x-px"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative">
        <p className="text-sm text-muted-foreground">{text}</p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
        >
          {linkLabel}
          <ExternalLinkIcon className="size-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}