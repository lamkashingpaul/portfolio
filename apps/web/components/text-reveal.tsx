"use client";

import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";

interface TextRevealProps {
  children?: React.ReactNode;
  className?: string;
}

export const TextReveal = (props: TextRevealProps) => {
  const { children, className } = props;

  return (
    <div>
      <div className={cn("relative w-fit overflow-hidden")}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "0%", "110%"] }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn("bg-foreground absolute z-10 h-full w-full", className)}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
