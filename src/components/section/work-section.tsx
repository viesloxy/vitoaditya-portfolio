/* eslint-disable @next/next/no-img-element */
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/components/language-provider";
import {
  BriefcaseBusinessIcon,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

function OrgLogo({ alt, logoUrl }: { alt: string; logoUrl?: string }) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={alt}
        loading="lazy"
        className="size-8 flex-none rounded-full border bg-background object-contain p-0.5 shadow ring-2 ring-border md:size-10"
      />
    );
  }

  return (
    <div className="flex size-8 flex-none items-center justify-center rounded-full border bg-muted shadow ring-2 ring-border md:size-10">
      <BriefcaseBusinessIcon
        className="size-4 text-muted-foreground"
        aria-hidden
      />
    </div>
  );
}

export default function WorkSection() {
  const { copy, t } = useLang();
  const [open, setOpen] = useState<string>(
    copy.work[0]?.company ?? ""
  );

  return (
    <Accordion
      type="single"
      collapsible
      value={open}
      onValueChange={setOpen}
      className="grid w-full gap-6"
    >
      {copy.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="grid w-full gap-2 border-b-0"
        >
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <OrgLogo alt={work.company} logoUrl={work.logoUrl} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-tight">
                    <span>{work.company}</span>
                    <span className="relative inline-flex h-3.5 w-3.5 items-center">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 rotate-0 stroke-2 text-muted-foreground transition-all duration-200",
                          "opacity-0",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100"
                        )}
                      />
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                <span>
                  {work.start} - {work.end ?? t("Present", "Sekarang")}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ml-11 p-0 text-xs text-muted-foreground sm:ml-13 sm:text-sm">
            <div className="flex flex-col gap-3">
              <p className="leading-relaxed">{work.description}</p>
              <div className="flex flex-wrap gap-1">
                {work.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className="h-6 w-fit border-border px-2 text-[11px] font-medium"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
