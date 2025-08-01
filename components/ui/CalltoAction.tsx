"use client";

import { Button } from "./button";
import Stars from "./Stars";
import gridlines from "../../assets/grid-lines copy.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
        >
          <Stars />

          {/* Static background */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></div>

          {/* Hover mask effect */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-2xl mx-auto tracking-tighter text-center font-medium">
              Generate Forms in Seconds with AI
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xl mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Prompt-Form turns your ideas into fully functional, ready-to-use
              forms—without writing a single line of code.
            </p>

            <div className="flex justify-center mt-8">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 10px 20px rgba(140, 69, 255, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* <Button >Get Started</Button> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
