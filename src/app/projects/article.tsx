import React from "react";
import Image from "next/image";
import type { Project } from "contentlayer/generated";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <article className="relative flex h-64 flex-col justify-between p-6 md:p-8">
      <h2 className="absolute bottom-6 left-6 z-20 text-left font-display text-xl font-medium text-zinc-200 duration-1000 lg:text-3xl">
        {project.title}
      </h2>
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="relative z-10 h-full w-full bg-gradient-to-r from-gray-700"></div>
        <Image
          src={project.image}
          className="object-cover"
          alt="placeholder image"
          fill={true}
        />
      </div>
    </article>
  );
};
