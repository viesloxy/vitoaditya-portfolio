"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLang } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: { lastYear: number };
  contributions: Contribution[];
}

const LEVEL_CLASS = [
  "bg-muted",
  "bg-emerald-500/20 dark:bg-emerald-400/20",
  "bg-emerald-500/40 dark:bg-emerald-400/40",
  "bg-emerald-500/70 dark:bg-emerald-400/70",
  "bg-emerald-500 dark:bg-emerald-400",
] as const;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

const CELL = 8;
const GAP = 2;
const TRACK = { gap: GAP } as const;

export default function GitHubActivitySection() {
  const { copy, t } = useLang();
  const githubUrl = copy.contact.social.GitHub.url;
  const username = githubUrl.split("/").filter(Boolean).pop() ?? "";

  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad response"))))
      .then((json: ContributionsResponse) => {
        if (cancelled) return;
        setData(json);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  const weeks = useMemo(() => {
    if (!data || data.contributions.length === 0) {
      return [] as (Contribution | null)[][];
    }
    const days = data.contributions;
    const startPad = new Date(`${days[0].date}T00:00:00`).getDay();
    const padded: (Contribution | null)[] = [
      ...Array.from({ length: startPad }, () => null),
      ...days,
    ];
    const out: (Contribution | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) {
      out.push(padded.slice(i, i + 7));
    }
    return out;
  }, [data]);

  const monthLabels = useMemo(() => {
    const labels: { index: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, index) => {
      const first = week.find((d): d is Contribution => d !== null);
      if (!first) return;
      const month = new Date(`${first.date}T00:00:00`).getMonth();
      if (month !== lastMonth) {
        labels.push({ index, label: MONTHS[month] });
        lastMonth = month;
      }
    });
    return labels;
  }, [weeks]);

  const total = data?.total.lastYear ?? 0;

  return (
    <section id="github-activity">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={0.04}>
          <h2 className="text-xl font-bold">
            {t("GitHub Activity", "Aktivitas GitHub")}
          </h2>
        </BlurFade>
        <BlurFade delay={0.08}>
          <div className="rounded-xl border p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
              <p className="text-sm text-muted-foreground">
                {status === "ready" ? (
                  <>
                    <span className="font-semibold text-foreground">
                      {total}
                    </span>{" "}
                    {t(
                      "contributions in the last year",
                      "kontribusi dalam setahun terakhir"
                    )}
                  </>
                ) : (
                  t("Contribution activity", "Aktivitas kontribusi")
                )}
              </p>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                @{username}
              </Link>
            </div>

            {status === "loading" && <GraphSkeleton />}

            {status === "error" && (
              <p className="py-6 text-sm text-muted-foreground">
                {t(
                  "Unable to load GitHub activity right now.",
                  "Tidak dapat memuat aktivitas GitHub saat ini."
                )}
              </p>
            )}

            {status === "ready" && weeks.length > 0 && (
              <>
                <div className="overflow-x-auto pb-1">
                  <div className="flex w-max gap-2">
                    <div
                      className="grid grid-rows-7 pt-4 text-[10px] leading-3 text-muted-foreground"
                      style={TRACK}
                    >
                      {WEEKDAYS.map((day, i) => (
                        <span
                          key={i}
                          className="flex items-center justify-end pr-1"
                          style={{ height: CELL }}
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div className="relative mb-1 h-3">
                        {monthLabels.map((month) => (
                          <span
                            key={`${month.label}-${month.index}`}
                            className="absolute top-0 text-[10px] leading-3 text-muted-foreground"
                            style={{ left: month.index * (CELL + GAP) }}
                          >
                            {month.label}
                          </span>
                        ))}
                      </div>
                      <div className="flex" style={TRACK}>
                        {weeks.map((week, wi) => (
                          <div key={wi} className="grid grid-rows-7" style={TRACK}>
                            {week.map((day, di) =>
                              day ? (
                                <div
                                  key={day.date}
                                  title={`${day.count} ${
                                    day.count === 1
                                      ? "contribution"
                                      : "contributions"
                                  } on ${day.date}`}
                                  className={cn(
                                    "rounded-[2px] transition-transform hover:scale-110",
                                    LEVEL_CLASS[day.level]
                                  )}
                                  style={{ width: CELL, height: CELL }}
                                />
                              ) : (
                                <div
                                  key={`${wi}-${di}`}
                                  style={{ width: CELL, height: CELL }}
                                />
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                  <span className="mr-1">{t("Less", "Sedikit")}</span>
                  {LEVEL_CLASS.map((level, i) => (
                    <span
                      key={i}
                      className={cn("rounded-[2px]", level)}
                      style={{ width: CELL, height: CELL }}
                    />
                  ))}
                  <span className="ml-1">{t("More", "Banyak")}</span>
                </div>
              </>
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function GraphSkeleton() {
  return (
    <div className="overflow-hidden">
      <div className="flex" style={TRACK}>
        {Array.from({ length: 53 }).map((_, wi) => (
          <div key={wi} className="grid grid-rows-7" style={TRACK}>
            {Array.from({ length: 7 }).map((_, di) => (
              <div
                key={di}
                className="animate-pulse rounded-[2px] bg-muted"
                style={{ width: CELL, height: CELL }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
