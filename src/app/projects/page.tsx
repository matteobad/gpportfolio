"use client";

import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "@components/nav";
import { Card } from "@components/card";
import { Article } from "./article";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion"

export const revalidate = 60;

export default function ProjectsPage() {
  const sorted = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Welcome to my portfolio. I am thrilled you’ve come to visit my
            showcase of work that I’ve compiled over the years, which includes a
            combination of collaborations and personal projects. Take a look and
            feel free to get in touch if you’d like to discuss potential
            opportunities to work together.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto">
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Accordion type="single" collapsible className="w-full">
              {sorted.map((project) => (
                <AccordionItem value={project.slug} className="w-full" key={project.slug}>
                  <AccordionTrigger>
                    <Card key={project.slug}>
                      <Article project={project} />
                    </Card>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-zinc-200">
                      {project.description}
                    </div>
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
