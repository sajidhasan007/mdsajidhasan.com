"use client";
import type { FC } from "react";
import { AddAnimation } from "./AddAnimation";

type ITitleOrder = {
  title: string;
  isReverse?: boolean;
  firstColumn?: number; 
  secondColumn?: number;
};

const TitleComponent: FC<ITitleOrder> = ({
  isReverse = false,
  title,
  firstColumn = 3,
  secondColumn = 21,
}) => {
  const leftPercent = `${(firstColumn / 24) * 100}%`;
  const rightPercent = `${(secondColumn / 24) * 100}%`;

  return (
    <AddAnimation>
      <div
        className={`mt-8 lg:mt-40 mb-4 lg:mb-8 flex flex-col sm:flex-row items-center w-full ${isReverse ? "sm:flex-row-reverse" : ""}`}
        style={(({ ['--left']: leftPercent, ['--right']: rightPercent } as unknown) as React.CSSProperties)}
      >
        <div
          className={`${isReverse ? "text-right" : "mr-0 sm:mr-4"} title-grid-left w-full`}
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {title}
            <span className="dot">.</span>
          </div>
        </div>

        <div className="title-grid-right w-full flex justify-center items-center">
          <div className="bg-white h-px w-full mt-4" />
        </div>
      </div>
    </AddAnimation>
  );
};

export default TitleComponent;
