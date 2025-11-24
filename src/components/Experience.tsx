"use client";
import ExperienceCard, { type IExperienceCard } from "./ExperienceCard";
import TitleComponent from "./TitleComponent";

const Experience = () => {
  return (
    <div className="mt-40">
      <TitleComponent title="Experience" firstColumn={6} secondColumn={18} />

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
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    location: "Dhaka",
    startYear: "2022",
    endYear: "Present",
  },
];
