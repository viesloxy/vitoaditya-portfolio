"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useLang } from "@/components/language-provider";
import Link from "next/link";

export default function ContactSection() {
  const { copy, t } = useLang();

  return (
    <div className="relative rounded-xl border">
      {/* Flickering grid background (matching the original template) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      {/* Section label sitting on the border, like the template */}
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">
          {t("Contact", "Kontak")}
        </span>
      </div>
      <div className="relative flex flex-col items-center gap-4 p-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          <WordRotate
            words={copy.languages}
            duration={2200}
            className="bg-linear-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent"
          />
        </h2>
        <p className="max-w-lg text-balance text-muted-foreground">
          {t(
            "Whether it's a project, an internship, or just a chat about design and engineering, my inbox is always open. I'll get back to you as soon as I can.",
            "Entah itu proyek, magang, atau sekadar ngobrol soal desain dan engineering, inbox saya selalu terbuka. Saya akan secepatnya membalas."
          )}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <Link
            href={`mailto:${copy.contact.email}`}
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            {t("Send me an email", "Kirim email")}
          </Link>
          <Link
            href={copy.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            GitHub
          </Link>
          <Link
            href={copy.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            LinkedIn
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          {copy.location} · GMT+7 ·{" "}
          {t(
            "Open for internships & freelance work",
            "Terbuka untuk magang & freelance"
          )}
        </p>
      </div>
    </div>
  );
}
