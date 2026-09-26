import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  as = "div",
  once = false,
}) => {
  // Support dynamic element types safely with motion
  const MotionComponent =
    (motion as unknown as Record<string, typeof motion.div>)[as] || motion.div;

  const variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1, margin: "0px" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
