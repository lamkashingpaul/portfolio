"use client";

import { motion } from "motion/react";

interface SlideTextProps {
  children?: React.ReactNode;
  direction?: keyof typeof transformMap;
  delay?: number;
  className?: string;
}

const transformMap = {
  up: { y: 16 },
  down: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
};

export const SlideText = (props: SlideTextProps) => {
  const { children, direction = "up", delay = 0, className } = props;

  return (
    <motion.div
      initial={{ opacity: 0, ...transformMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
