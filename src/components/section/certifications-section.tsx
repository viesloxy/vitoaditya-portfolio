/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/language-provider";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  const { copy, t } = useLang();
  const maxPreview = 2;

  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                {t("Licenses & Certifications", "Lisensi & Sertifikasi")}
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              {t(
                "Professional Credentials",
                "Kredensial Profesional"
              )}
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t(
                "Nationally recognized certifications from BNSP and industry training programs.",
                "Sertifikasi yang diakui secara nasional dari BNSP dan program pelatihan industri."
              )}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {copy.certifications.slice(0, maxPreview).map((cert, id) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              className="h-full"
            >
              <Card
                title={cert.title}
                subtitle={`${cert.place} · ${cert.dates}`}
                description={cert.description}
                image={cert.images[0]}
                link={cert.link}
              />
            </BlurFade>
          ))}
        </div>
        <div className="flex justify-center pt-2">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/certificates">
              {t("View all certificates", "Lihat semua sertifikat")}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
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