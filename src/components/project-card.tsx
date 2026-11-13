/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function getInitials(title: string) {
  const words = title
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ProjectImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-muted/20">
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-br from-muted/60 via-transparent to-transparent"
        />
        <span className="relative text-4xl font-semibold tracking-tighter text-muted-foreground/40">
          {getInitials(title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-48 w-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }
  return <GlobeIcon className="size-3" aria-hidden />;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: string;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  links?: readonly ProjectLink[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <ProjectImage src={image || ""} alt={title} title={title} />
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  variant="default"
                  className="flex items-center gap-1.5 bg-primary text-xs text-primary-foreground hover:bg-primary/90"
                >
                  <LinkIcon icon={link.icon} />
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="prose max-w-full flex-1 text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
