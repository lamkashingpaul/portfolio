"use client";

import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";

interface TextRevealProps {
  children?: React.ReactNode;
  className?: string;
  coverClassName?: string;
}

export const RevealText = (props: TextRevealProps) => {
  const { children, className, coverClassName } = props;

  return (
    <div>
      <div className={cn("relative w-fit overflow-hidden", className)}>
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: ["-100%", "0%", "110%"] }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "bg-foreground absolute z-10 h-full w-full",
            coverClassName,
          )}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
