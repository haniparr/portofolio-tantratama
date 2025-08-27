"use client";

import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  duration = 0.8,
  delay = 0.2,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollRevealProps) => {
  let initial = {};
  let whileInView = {};

  switch (direction) {
    case "up":
      initial = { opacity: 0, y: distance };
      whileInView = { opacity: 1, y: 0 };
      break;
    case "down":
      initial = { opacity: 0, y: -distance };
      whileInView = { opacity: 1, y: 0 };
      break;
    case "left":
      initial = { opacity: 0, x: -distance };
      whileInView = { opacity: 1, x: 0 };
      break;
    case "right":
      initial = { opacity: 0, x: distance };
      whileInView = { opacity: 1, x: 0 };
      break;
    default:
      initial = { opacity: 0 };
      whileInView = { opacity: 1 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: once, amount: 0.5 }} // `amount: 0.5` berarti animasi akan terpicu saat elemen 50% masuk ke viewport
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
