"use client";

import { motion } from "motion/react";

interface SlideTextProps {
  children?: React.ReactNode;
  direction?: keyof typeof transformMap;
  className?: string;
}

const transformMap = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

export const SlideText = (props: SlideTextProps) => {
  const { children, direction = "up", className } = props;

  return (
    <motion.div
      initial={{ opacity: 0, ...transformMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
