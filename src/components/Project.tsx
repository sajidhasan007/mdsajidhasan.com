"use client";
import ProjectCard, { type IProjectProps } from "./ProjectCard";
import TitleComponent from "./TitleComponent";

const Project = () => {
  return (
    <div className="mt-40">
      <TitleComponent
        title="Projects"
        isReverse={true}
        firstColumn={5}
        secondColumn={19}
      />

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
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
      "Introducing the Genocide Museum Bangladesh website - a poignant online platform preserving the history of the 1971 war. Explore pinned locations of genocide and mass killings, gaining insight from survivors' accounts. Discover a rich collection of journals, notices, and archival materials, shedding light on the aftermath. Support the museum's mission by purchasing books from the dedicated bookstore. The gallery showcases evocative videos and photos, offering a profound understanding of the war's impact. Join us in commemorating history, promoting remembrance, education, and healing.",
    imageLink: "/projectImage.jpeg",
    liveLink: "https://genocidemuseum.org.bd/",
  },
];
