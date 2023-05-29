import type { Project } from "@/.contentlayer/generated";
import Image from "next/image";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <article className="p-4 md:p-8 relative h-64 flex flex-col justify-between">
      <h2 className=" relative z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
        {project.title}
      </h2>
      <div className="top-0 left-0 w-full h-full absolute">
        <Image
          loader={()=>"https://placehold.co/600x400"}
          src="https://placehold.co/600x400"
          className="object-cover"
          alt="placeholder image"
          fill={true}
        />
      </div>
    </article>
  );
};
