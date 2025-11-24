"use client";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AddAnimation } from "./AddAnimation";
import ProjectDetails from "./ProjectDetails";

export type IProjectProps = {
  title: string;
  techStack: string[];
  description: string;
  imageLink: string;
  githubLink?: string;
  liveLink?: string;
};

const ProjectCard: FC<IProjectProps> = ({
  title,
  techStack,
  description,
  imageLink,
  githubLink,
  liveLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <AddAnimation>
        <div className="bg-slate-500 w-full h-72 p-6">
          <div className="relative w-full h-full">
            <Image
              src={imageLink}
              alt={title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </div>
      </AddAnimation>

      <div>
        <AddAnimation>
          <h1 className="mt-4 text-xl font-bold">{title}</h1>
        </AddAnimation>
        <AddAnimation>
          <div className="my-2 text-base text-primary">{techStack.join(" - ")}</div>
        </AddAnimation>

        <AddAnimation>
          <div>
            <p className="text-base line-clamp-2">{description}</p>
            <button
              type="button"
              onClick={showModal}
              className="text-primary flex gap-1 items-center text-base"
            >
              Learn more <MdKeyboardArrowRight />
            </button>
          </div>
        </AddAnimation>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={handleCancel}
            onKeyDown={handleBackdropKeyDown}
            aria-label="Close modal backdrop"
          />

          <div className="relative z-10 w-full max-w-3xl mx-4 bg-white rounded-lg shadow-lg overflow-auto">
            <div className="flex justify-end p-2">
              <button type="button" onClick={handleCancel} className="text-gray-600 hover:text-gray-900 px-2 py-1" aria-label="Close dialog">
                ✕
              </button>
            </div>

            <div className="p-6">
              <ProjectDetails
                title={title}
                description={description}
                techStack={techStack}
                imageLink={imageLink}
                liveLink={liveLink}
                githubLink={githubLink}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
