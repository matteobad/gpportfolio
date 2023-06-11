"use client";

import "./mdx.css";

import React from "react";
import type { Project } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";

import { Card } from "@components/card";
import { Mdx } from "@components/mdx";
import { Navigation } from "@components/nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

import { Article } from "./article";

type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8">
      <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project) => (
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
                <>
                  <h2 className="my-6 w-full text-center text-2xl font-semibold text-zinc-200">
                    {project.description}
                  </h2>
                  <iframe
                    className="h-96 w-full rounded-md border border-zinc-200"
                    title="my-video"
                    src={project.video}
                  ></iframe>
                  <Mdx code={project.body.code} />
                </>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export const revalidate = 60;

export default function ProjectsPage() {
  const professionalProjects = allProjects
    .filter((p) => p.published)
    .filter((p) => p.category === "professional")
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const personalProjects = allProjects
    .filter((p) => p.published)
    .filter((p) => p.category === "personal")
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
            Welcome to my portfolio. I am thrilled you’ve come to visit my
            showcase of work that I’ve compiled over the years, which includes a
            combination of collaborations, professional works and personal
            projects.
          </p>
        </div>
        <div className="h-px w-full bg-zinc-800" />

        <Tabs
          defaultValue="professional"
          className="flex w-full flex-col items-center"
        >
          <TabsList className="grid w-80 grid-cols-2">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
          <TabsContent value="professional" className="w-full">
            <ProjectsList projects={professionalProjects} />
          </TabsContent>
          <TabsContent value="personal" className="w-full">
            <ProjectsList projects={personalProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
