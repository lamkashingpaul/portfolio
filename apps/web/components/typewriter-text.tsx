"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@workspace/ui/lib/utils";

interface TextTypingProps {
  className?: string;
  cursorClassName?: string;
  staticText: string;
  typingTexts: string[];
}

export const TypewriterText = (props: TextTypingProps) => {
  const { className, cursorClassName, staticText, typingTexts } = props;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const speed = 100 - 50 * Number(isDeleting);
  const delayBetweenTexts = 1000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fullText = typingTexts[index] || "";

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % typingTexts.length || 0);
    } else {
      timeout = setTimeout(() => {
        const textIndexDelta = 2 * Number(!isDeleting) - 1;
        setText(fullText.slice(0, text.length + textIndexDelta));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, speed, typingTexts]);

  useEffect(() => {
    const id = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className={cn("text-2xl", className)}>
      {staticText} <span className="text-primary font-bold">{text}</span>
      <motion.span
        animate={{ opacity: Number(isCursorVisible) }}
        className={cn(cursorClassName)}
      >
        |
      </motion.span>
    </h1>
  );
};
