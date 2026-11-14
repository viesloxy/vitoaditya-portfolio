"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/language-provider";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const { copy, t } = useLang();
  const maxPreview = 4;

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
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
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("Check out my latest work", "Lihat karya terbaru saya")}
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t(
                "From open-source UMKM tools to AI platforms and award-winning class projects, here are a few of my favorites.",
                "Dari tools UMKM open source sampai platform AI dan proyek kelas yang meraih penghargaan, berikut beberapa favorit saya."
              )}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {copy.projects.slice(0, maxPreview).map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
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
        <div className="flex justify-center pt-2">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/projects">
              {t("View all projects", "Lihat semua proyek")}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}