import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCodeSquare } from "react-icons/bs";
import { TbBrandFunimation } from "react-icons/tb";
import { mySocialLinks, type SocialLink } from "../app/layout";
import { AddAnimation } from "./AddAnimation";
import TitleComponent from "./TitleComponent";


const About = () => {
  return (
    <div>
      <TitleComponent title="About" firstColumn={4} secondColumn={20} />
      <div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="text-base">
              <AddAnimation>
                <p className="mb-4">
                  Hey! Im Sajid, As a passionate front-end developer at Exabyting,
                  I help businesses create beautiful, fast, and user-friendly websites and web apps. From the UI design to the final development, I focus on making your product look great and work smoothly on every device. If you want a clean design, good performance, and a hassle-free experience, I'm here to help.
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Currently, I am working for bKash, the number one brand in Bangladesh, where I build and refine UI for bKash.com, the official website of bKash.
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Let's connect and discuss how my strong front-end expertise
                  and my ongoing journey toward full-stack development can
                  contribute to building innovative and successful web
                  applications
                </p>
              </AddAnimation>

              <AddAnimation>
                <div className="flex gap-2 items-center mt-4">
                  <p className="flex items-center gap-2 text-primary ">
                    My links <AiOutlineArrowRight />
                  </p>
                  <div className="flex gap-2">
                    {mySocialLinks.map((item: SocialLink) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        target="_blank"
                        className="text-xl hover:text-primary"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </AddAnimation>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div>
              <div className="mb-12">
                <AddAnimation>
                  <div className="flex gap-2 items-center mb-4 text-2xl">
                    <span className="text-primary">
                      <BsCodeSquare />
                    </span>
                    <h3 className="font-bold ">Use at work</h3>
                  </div>
                </AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {workSkill.map((item: string) => (
                      <AddAnimation  key={item}> 
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

              <div>
                <AddAnimation>
                  <div className="flex gap-2 items-center mb-4 text-2xl">
                    <span className="text-primary">
                      <TbBrandFunimation />
                    </span>
                    <h3 className="font-bold ">Use for Fun</h3>
                  </div>
                </AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {useForFun.map((item: string) => (
                       <AddAnimation  key={item}> 
                        <div
                        className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                      >
                        {item}
                      </div>
                      </AddAnimation>
                     
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const workSkill = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "NextJs",
  "Redux",
  "tailwindcss",
  "NodeJS",
  "Express",
  "Postgres",
  "MongoDB",
  "GitHub",
  "Figma",
  "Jira",
  "AWS",
];

const useForFun = ["Farmar Motion", "CodeSandbox", "CodePen"];
