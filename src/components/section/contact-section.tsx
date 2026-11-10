"use client";

import { Globe } from "@/components/magicui/globe";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border">
      {/* Globe background (clipped inside its own wrapper) */}
      <div className="mask-fade-b pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="flex h-full items-center justify-center opacity-25 dark:opacity-60">
          <Globe size={560} />
        </div>
      </div>
      {/* Section label sitting on the border, like the template */}
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">Contact</span>
      </div>
      <div className="relative flex flex-col items-center gap-5 p-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          <WordRotate
            words={DATA.languages}
            duration={2200}
            className="bg-linear-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent"
          />
        </h2>
        <p className="max-w-lg text-balance text-muted-foreground">
          Whether it&apos;s a project, an internship, or just a chat about
          design and engineering — my inbox is always open. I&apos;ll get back
          to you as soon as I can.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button className="group gap-2" asChild>
            <Link href={`mailto:${DATA.contact.email}`}>
              Send me an email
              <ArrowRightIcon
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="size-4" aria-hidden />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-4" aria-hidden />
              LinkedIn
            </Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          {DATA.location} · GMT+7 · Open for internships &amp; freelance work
        </p>
      </div>
    </div>
  );
}
