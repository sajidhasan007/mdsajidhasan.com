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
        className={`flex items-center w-full ${isReverse ? "flex-row-reverse" : ""}`}
      >
        <div
          style={{ width: leftPercent }}
          className={`${isReverse ? "text-right" : "mr-4"}`}
        >
          <div className="title-style">
            {title}
            <span className="dot">.</span>
          </div>
        </div>

        <div style={{ width: rightPercent }} className="flex justify-center items-center">
          <div className="bg-white h-px w-full mt-4" />
        </div>
      </div>
    </AddAnimation>
  );
};

export default TitleComponent;
