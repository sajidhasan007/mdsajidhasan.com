"use client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { LuArrowRightFromLine } from "react-icons/lu";
import type { IProjectProps } from "./ProjectCard";

const ProjectDetails: FC<IProjectProps> = ({
  title,
  techStack,
  description,
  imageLink,
  githubLink,
  liveLink,
}) => {
  return (
    <div>
      <div className="text-white">
        <Image
          fill
          src={imageLink}
          alt="Genocide Museum Project "
          className="shadow-2xl border border-white"
        />
        <div className="mt-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="my-2 text-base text-primary">
            {techStack.join(" - ")}
          </div>
          <p>{description}</p>
          <div className="mt-5">
            <h2 className="text-lg font-bold">Project Links</h2>
            <div className="text-primary mt-2">
              {liveLink && (
                <Link
                  target="_blank"
                  href={(liveLink as string) && (liveLink as string)}
                  className="flex items-center gap-2"
                >
                  <LuArrowRightFromLine />
                  liveLink
                </Link>
              )}
              {githubLink && (
                <Link
                  target="_blank"
                  href={(githubLink as string) && (githubLink as string)}
                  className="flex items-center gap-2"
                >
                  <LuArrowRightFromLine />
                  liveLink
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
