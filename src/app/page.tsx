/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TechIcon } from "@/components/tech-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/language-provider";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import AchievementsSection from "@/components/section/achievements-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import {
  ArrowRightIcon,
  DownloadIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  SchoolIcon,
  SparklesIcon,
} from "lucide-react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import GitHubActivitySection from "@/components/section/github-activity";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { copy, t } = useLang();

  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      {/* ============================== HERO ============================== */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText
                as="h1"
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={t(
                  `Hi, I'm ${copy.name}`,
                  `Halo, saya ${copy.name}`
                )}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="text-lg font-medium text-foreground lg:text-xl">
                  <WordRotate words={copy.roles} />
                </div>
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text={copy.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button className="group gap-2" asChild>
                    <Link href={`mailto:${copy.contact.email}`}>
                      {t("Get in touch", "Hubungi saya")}
                      <ArrowRightIcon
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href={copy.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon className="size-4" aria-hidden />
                      {t("Download Resume", "Unduh CV")}
                    </a>
                  </Button>
                  <div className="flex items-center gap-1">
                    {(
                      [
                        ["GitHub", copy.contact.social.GitHub.url],
                        ["LinkedIn", copy.contact.social.LinkedIn.url],
                      ] as const
                    ).map(([label, url]) => (
                      <Button
                        key={label}
                        variant="ghost"
                        size="icon"
                        aria-label={label}
                        asChild
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {label === "GitHub" ? (
                            <Icons.github className="size-5" aria-hidden />
                          ) : (
                            <Icons.linkedin className="size-5" aria-hidden />
                          )}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-sm text-muted-foreground">
                  <Link
                    href={copy.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    <MapPinIcon className="size-3.5" aria-hidden />
                    {copy.location}
                  </Link>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-1">
                    <SparklesIcon className="size-3.5 text-amber-500" aria-hidden />
                    <AnimatedShinyText className="text-sm">
                      {t(
                        "Open for internships & freelance",
                        "Terbuka untuk magang & freelance"
                      )}
                    </AnimatedShinyText>
                  </span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="relative mx-auto flex size-32 items-center justify-center md:mx-0 md:size-36">
                <OrbitingCircles
                  radius={76}
                  duration={22}
                  path={false}
                  className="size-8 border-border bg-background text-muted-foreground"
                >
                  <Icons.github className="size-4" aria-hidden />
                  <MailIcon className="size-4" aria-hidden />
                  <Icons.linkedin className="size-4" aria-hidden />
                </OrbitingCircles>
                <Avatar className="z-10 size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-28">
                  <AvatarImage src={copy.avatarUrl} alt={copy.name} />
                  <AvatarFallback>{copy.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("About", "Tentang")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{copy.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ========================== GITHUB ACTIVITY ========================== */}
      <GitHubActivitySection />

      {/* ============================ EXPERIENCE ============================ */}
      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">{t("Experience", "Pengalaman")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* ============================ EDUCATION ============================ */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">
              {t("Education", "Pendidikan")}
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {copy.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 13 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-x-3"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 flex-none overflow-hidden rounded-full border bg-background object-contain p-1 shadow ring-2 ring-border md:size-10"
                      />
                    ) : (
                      <div className="flex size-8 flex-none items-center justify-center rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10">
                        {index === 0 ? (
                          <GraduationCapIcon
                            className="size-4 text-muted-foreground"
                            aria-hidden
                          />
                        ) : (
                          <SchoolIcon
                            className="size-4 text-muted-foreground"
                            aria-hidden
                          />
                        )}
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        <ArrowRightIcon
                          className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SKILLS ============================== */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              {t("Skills", "Keahlian")}
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-6">
            {copy.skillGroups.map((group, gid) => (
              <BlurFade
                key={group.title}
                delay={BLUR_FADE_DELAY * 15 + gid * 0.04}
              >
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <div
                        key={`${group.title}-${tool.name}`}
                        className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20"
                      >
                        <TechIcon
                          slug={tool.icon}
                          name={tool.name}
                          invert={"invert" in tool ? tool.invert : false}
                          className="size-4 rounded overflow-hidden object-contain"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== PROJECTS ============================== */}
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <ProjectsSection />
      </BlurFade>

      {/* ============================ ACHIEVEMENTS ============================ */}
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <AchievementsSection />
      </BlurFade>

      {/* ============================== CONTACT ============================== */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <ContactSection />
        </BlurFade>
      </section>

      {/* ============================== FOOTER ============================== */}
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <footer className="flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {copy.name}.{" "}
            {t("All rights reserved.", "Seluruh hak cipta dilindungi.")}
          </p>
          <div className="flex items-center gap-1">
            {t("Built with", "Dibangun dengan")}{" "}
            <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-medium">
              Next.js
            </Badge>
            <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-medium">
              Tailwind CSS
            </Badge>
            <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-medium">
              Magic UI
            </Badge>
          </div>
        </footer>
      </BlurFade>
    </main>
  );
}
