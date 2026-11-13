/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useLang } from "@/components/language-provider";
import { ArrowUpRightIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

function AchievementCard({
  achievement,
  index,
  total,
}: {
  achievement: (typeof DATA.achievements)[number];
  index: number;
  total: number;
}) {
  const [imageError, setImageError] = useState(false);
  const featured = index === 0;
  // Keep the grid balanced when there is an odd number of regular cards.
  const wide = featured || (index === total - 1 && total % 2 === 0);

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:shadow-lg hover:shadow-foreground/5",
        wide && "sm:col-span-2 sm:flex-row"
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-muted/40",
          wide ? "sm:w-1/2" : ""
        )}
      >
        {achievement.images[0] && !imageError ? (
          <img
            src={achievement.images[0]}
            alt={achievement.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              wide
                ? "h-48 w-full sm:h-full sm:min-h-64"
                : "h-40 w-full object-top"
            )}
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center bg-muted">
            <TrophyIcon className="size-8 text-muted-foreground/50" />
          </div>
        )}
        {achievement.images.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {achievement.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${achievement.title} ${i + 1}`}
                loading="lazy"
                className="size-10 rounded-md border-2 border-background object-cover shadow-sm"
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold leading-snug">{achievement.title}</h3>
            <p className="text-xs text-muted-foreground">
              {achievement.place} · {achievement.dates}
            </p>
          </div>
          <Link
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Open ${achievement.title} on LinkedIn`}
          >
            <ArrowUpRightIcon
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {achievement.description}
        </p>
        <div>
          <Badge
            variant="outline"
            className="h-6 w-fit border-border px-2 text-[11px] font-medium"
          >
            {achievement.win}
          </Badge>
        </div>
      </div>
      {featured && (
        <BorderBeam
          size={60}
          duration={10}
          colorFrom="#fbbf24"
          colorTo="#f97316"
        />
      )}
    </div>
  );
}

export default function AchievementsSection() {
  const { copy, t } = useLang();
  return (
    <section id="achievements">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                {t("Achievements", "Prestasi")}
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("Awards & Certifications", "Penghargaan & Sertifikasi")}
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t(
                "National filmmaking honors, BNSP professional certifications, and continuous learning.",
                "Penghargaan film tingkat nasional, sertifikasi profesional BNSP, dan pembelajaran berkelanjutan."
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {copy.achievements.map((achievement, index) => (
            <BlurFade
              key={achievement.title}
              delay={BLUR_FADE_DELAY * 14 + index * 0.05}
              className={cn(
                "h-full",
                (index === 0 ||
                  (index === copy.achievements.length - 1 &&
                    copy.achievements.length % 2 === 0)) &&
                  "sm:col-span-2"
              )}
            >
              <AchievementCard
                achievement={achievement}
                index={index}
                total={copy.achievements.length}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
