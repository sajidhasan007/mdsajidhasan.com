"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { type JSX, useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  slider?: boolean;
}

export const AddAnimation = ({ children }: Props) => {
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
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainContruls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={sliderContruls}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0aff9d",
          // opacity: 0.1,
          zIndex: 20,
        }}
      />
    </div>
  );
};
