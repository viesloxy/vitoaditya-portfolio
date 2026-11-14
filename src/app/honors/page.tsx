/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { MoreCard } from "@/components/more-card";
import { useLang } from "@/components/language-provider";
import { ArrowLeftIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function HonorsPage() {
  const { copy, t } = useLang();

  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="size-3.5" aria-hidden />
            {t("Back to home", "Kembali ke beranda")}
          </Link>
        </BlurFade>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                {t("Honors & Awards", "Gelar Kehormatan & Penghargaan")}
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl">
              {t("All Honors & Awards", "Semua Penghargaan")}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="max-w-lg text-balance text-center text-muted-foreground">
              {t(
                "National filmmaking honors and software development achievements earned through competition and creativity.",
                "Penghargaan film nasional dan prestasi software development yang diraih lewat kompetisi dan kreativitas."
              )}
            </p>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {copy.honors.map((honor, id) => (
            <BlurFade
              key={honor.title}
              delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              className="h-full"
            >
              <Card
                title={honor.title}
                subtitle={`${honor.place} · ${honor.dates}`}
                description={honor.description}
                image={honor.images[0]}
                link={honor.link}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <MoreCard
            text={t(
              "More honors and recognitions can be found on my LinkedIn profile.",
              "Lebih banyak penghargaan dan pengakuan dapat dilihat di profil LinkedIn saya."
            )}
            linkLabel={t("View on LinkedIn", "Lihat di LinkedIn")}
            href={copy.contact.social.LinkedIn.url}
          />
        </BlurFade>
      </section>
    </main>
  );
}

function Card({
  title,
  subtitle,
  description,
  image,
  link,
}: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted">
      <div className="relative shrink-0">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {image && !imageError ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-48 w-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-muted/20">
              <span className="text-4xl font-semibold tracking-tighter text-muted-foreground/40">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{subtitle}</time>
          </div>
          <Link
            href={link}
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
      </div>
    </div>
  );
}