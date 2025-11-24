"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AddAnimation } from "./AddAnimation";

const HeaderSection = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainContruls = useAnimation();
  const sliderContruls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainContruls.start("visible");
      sliderContruls.start("visible");
    }
  }, [isInview, mainContruls, sliderContruls]);

  return (
    <div className="h-full flex flex-col lg:flex-row" ref={ref}>
      <div className="w-full lg:w-2/3">
        <div className="flex items-center h-screen">
          <div>
            <AddAnimation>
              <div className="text-[70px] font-black">
                Hey, I am Sajid Hasan<span className="dot">.</span>
              </div>
            </AddAnimation>
            <AddAnimation>
              <h2 className="text-3xl my-2">
                I am a{" "}
                <span className="font-bold text-primary">
                  Full Stack Developer
                </span>
              </h2>
            </AddAnimation>

            <AddAnimation>
              <p className="text-base mb-2">
                I have spent the last 2 years building and scaling software for
                some pretty cool clients. Lets connect!
              </p>
            </AddAnimation>
            <AddAnimation>
              <Link href={"#contact"}>
                <div className="px-4 py-2 w-32 text-center text-lg rounded-lg bg-primary hover:bg-primary_light text-black ">
                  Contact Me
                </div>
              </Link>
            </AddAnimation>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainContruls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="flex justify-end items-center h-full ">
           <Image
              width={400}
              height={400}
              src="/sajid_hasan.png"
              alt="Sajid Hasan's Image"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderSection;
