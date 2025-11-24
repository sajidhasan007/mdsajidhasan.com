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
                  I am dedicated to crafting exceptional user experiences
                  through interactive UI designs. With a strong foundation in
                  front-end development, I have been honing my skills in
                  technologies such as React, and NextJs to create visually
                  appealing and intuitive web applications.
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Currently, I am expanding my knowledge by diving into Node.js
                  and working towards becoming a full-stack developer. By
                  learning Node.js, I aim to strengthen my understanding of
                  server-side development, API integration, and database
                  management, allowing me to contribute to end-to-end web
                  development projects.
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Driven by a genuine love for programming, I find joy in
                  writing clean and maintainable code that enhances the
                  functionality and optimizes performance. I am always eager to
                  learn new technologies and frameworks to stay up to date with
                  industry trends and deliver modern solutions.
                </p>
              </AddAnimation>

              <AddAnimation>
                <p className="mb-4">
                  Collaboration is at the heart of my work. By effectively
                  communicating and collaborating with cross-functional teams, I
                  ensure seamless integration between front-end and back-end
                  components, creating cohesive and efficient applications. I
                  value continuous learning and actively seek opportunities to
                  enhance my skill set. As I progress on my journey to becoming
                  a full-stack developer, I am enthusiastic about taking on new
                  challenges, exploring different technologies, and delivering
                  impactful experiences.
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
                <AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {workSkill.map((item: string) => (
                      <div
                        key={item}
                        className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </AddAnimation>
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
                <AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {useForFun.map((item: string) => (
                      <div
                        key={item}
                        className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </AddAnimation>
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
