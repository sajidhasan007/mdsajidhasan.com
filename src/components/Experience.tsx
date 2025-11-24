"use client";
import ExperienceCard, { type IExperienceCard } from "./ExperienceCard";
import TitleComponent from "./TitleComponent";

const Experience = () => {
  return (
    <div >
      <TitleComponent title="Experience" firstColumn={7} secondColumn={17} />

      <div className="flex flex-col gap-4">
        {experienceData.map((item: IExperienceCard) => (
          <div key={item.companyTitle} className="w-full">
            <ExperienceCard
              companyTitle={item.companyTitle}
              designation={item.designation}
              techStack={item.techStack}
              description={item.description}
              location={item.location}
              startYear={item.startYear}
              endYear={item.endYear}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

const experienceData: IExperienceCard[] = [
  {
    companyTitle: "Exabyting",
    designation: "Software Engineer",
    techStack: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "GitHub",
      "Jira",
      "AWS",
    ],
    description:
      "I manage and develop the UI for bKash.com, building responsive pages and components using HTML, CSS, JavaScript, and React, and ensuring performance, consistency, and clean design implementation.",
    location: "Mohakhali DOHS, Dhaka",
    startYear: "2024",
    endYear: "Present",
  },
  {
    companyTitle: "MISFIT Technology Ltd.",
    designation: "Jr. Software Engineer",
    techStack: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "GitHub",
      "Jira",
      "AWS",
    ],
    description:
      "I converted Figma designs into responsive web pages and built reusable UI components using React, ensuring pixel-perfect layouts and smooth user experiences.",
    location: "Dhaka",
    startYear: "2022",
    endYear: "2024",
  },
];
