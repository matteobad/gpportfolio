"use client";

import React from "react";
import { allProjects } from "contentlayer/generated";

import { Card } from "@components/card";
import { Navigation } from "@components/nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

import { Article } from "./article";

export const revalidate = 60;

export default function ProjectsPage() {
  const sorted = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="h-px w-full bg-zinc-800" />

        <div className="mx-auto grid grid-cols-1 gap-8">
          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Accordion type="single" collapsible className="w-full">
              {sorted.map((project) => (
                <AccordionItem
                  value={project.slug}
                  className="w-full"
                  key={project.slug}
                >
                  <AccordionTrigger>
                    <Card key={project.slug}>
                      <Article project={project} />
                    </Card>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-zinc-200">{project.description}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
