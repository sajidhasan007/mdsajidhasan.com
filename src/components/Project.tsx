"use client";
import ProjectCard, { type IProjectProps } from "./ProjectCard";
import TitleComponent from "./TitleComponent";

const Project = () => {
  return (
    <div >
      <TitleComponent
        title="Projects"
        isReverse={true}
        firstColumn={6}
        secondColumn={18}
      />

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projectData.map((item: IProjectProps) => (
          <div key={item.title} className="w-full">
            <ProjectCard
              title={item.title}
              techStack={item.techStack}
              description={item.description}
              imageLink={item.imageLink}
              liveLink={item.liveLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

const projectData: IProjectProps[] = [
  {
    title: "Genocide Museum",
    techStack: [
      "Tailwind CSS",
      "TypeScript",
      "SASS",
      "NextJs",
      "Ant Design",
      "ReduxJs",
      "ReactJs",
    ],
    description:
      "I developed the bKash App information pages where users can learn how to open a personal bKash account and a student account. The pages were built using React, TypeScript, SASS, Rive and Bootstrap, focusing on clean UI, responsive layouts, and a smooth user experience that guides users through the onboarding process.",
    imageLink: "/projectImage.jpeg",
    liveLink: "https://genocidemuseum.org.bd/",
  },

  {
    title: "bKash App Page",
    techStack: [
      "Bootstrap",
      "TypeScript",
      "SASS",
      "ReactJs",
      "Rive"
    ],
    description:
      "Introducing the Genocide Museum Bangladesh website - a poignant online platform preserving the history of the 1971 war. Explore pinned locations of genocide and mass killings, gaining insight from survivors' accounts. Discover a rich collection of journals, notices, and archival materials, shedding light on the aftermath. Support the museum's mission by purchasing books from the dedicated bookstore. The gallery showcases evocative videos and photos, offering a profound understanding of the war's impact. Join us in commemorating history, promoting remembrance, education, and healing.",
    imageLink: "/app_page.png",
    liveLink: "https://www.bkash.com/app",
  },

];
