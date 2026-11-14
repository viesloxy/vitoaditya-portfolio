/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { MoreCard } from "@/components/more-card";
import { useLang } from "@/components/language-provider";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
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
                {t("My Projects", "Proyek Saya")}
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl">
              {t("All Projects", "Semua Proyek")}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="max-w-lg text-balance text-center text-muted-foreground">
              {t(
                "From open-source UMKM tools to AI platforms and award-winning class projects, here are all of my works.",
                "Dari tools UMKM open source sampai platform AI dan proyek kelas yang meraih penghargaan, berikut semua karya saya."
              )}
            </p>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {copy.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <MoreCard
            text={t(
              "More repositories and source code can be found on my GitHub profile.",
              "Lebih banyak repositori dan kode sumber dapat ditemukan di profil GitHub saya."
            )}
            linkLabel={t("View on GitHub", "Lihat di GitHub")}
            href={copy.contact.social.GitHub.url}
          />
        </BlurFade>
      </section>
    </main>
  );
}