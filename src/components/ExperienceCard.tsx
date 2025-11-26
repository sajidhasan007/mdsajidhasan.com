import type { FC } from "react";
import { AddAnimation } from "./AddAnimation";
export type IExperienceCard = {
  companyTitle: string;
  designation: string;
  techStack: string[];
  description: string;
  location: string;
  startYear: string;
  endYear?: string;
};
const ExperienceCard: FC<IExperienceCard> = ({
  companyTitle,
  designation,
  techStack,
  description,
  location,
  startYear,
  endYear,
}) => {
  return (
    <div className="border-b-2 border-[#383838] pb-4">
      <AddAnimation>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold ">{companyTitle}</h1>
          <div className="flex items-center font-semibold text-base">
            <p>{startYear}</p> - <p>{endYear}</p>
          </div>
        </div>
      </AddAnimation>

      <AddAnimation>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-lg font-bold text-primary">{designation}</h1>
          <div className="flex items-center font-semibold text-base">
            <p>{location}</p>
          </div>
        </div>
      </AddAnimation>

      <AddAnimation>
        <div className="text-base ">{description}</div>
      </AddAnimation>
      <div>
          <div className="flex gap-2 flex-wrap my-4">
            {techStack.map((item: string) => (
              <AddAnimation key={item}>
                 <div
                    key={item}
                    className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                  >
                    {item}
                  </div>
              </AddAnimation>
                
            ))}
          </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
