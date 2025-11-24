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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-screen items-center py-12 lg:py-0" ref={ref}>
      <div className="lg:col-span-2 text-center lg:text-left p-8 lg:p-0">
          <div>
            <AddAnimation>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black">
                Hey, I am Sajid Hasan<span className="dot">.</span>
              </div>
            </AddAnimation>
            <AddAnimation>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl my-2">
                I am a{" "}
                <span className="font-bold text-primary">
                  Full Stack Developer
                </span>
              </h2>
            </AddAnimation>

            <AddAnimation>
              <p className="text-base mb-2">
                Frontend developer passionate about clean UI, strong UX, and scalable code. Lets connect!
              </p>
            </AddAnimation>
            <AddAnimation>
              <Link href={"#contact"} className="inline-block px-4 py-2 w-32 text-center text-lg rounded-lg bg-primary hover:bg-primary_light text-black ">
                  Contact Me
              </Link>
            </AddAnimation>
          </div>
      </div>
      <div className="lg:col-span-1">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainContruls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="flex justify-center items-center h-full w-full">
           <Image
              width={600}
              height={600}
              src="/sajid_hasan.png"
              alt="Md Sajid Hasan"
              className="w-full h-auto max-h-full object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderSection;
