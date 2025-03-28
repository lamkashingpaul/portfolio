"use client";

import { RevealText } from "@/components/reveal-text";
import { cn } from "@workspace/ui/lib/utils";
import { Children, isValidElement, cloneElement } from "react";

interface TextRevealProps {
  children?: React.ReactNode;
  className?: string;
  revealTextClassName?: string;
  coverClassName?: string;
}

export const RevealTextGroup = (props: TextRevealProps) => {
  const { className, revealTextClassName, coverClassName } = props;
  const children = Children.toArray(props.children);

  return (
    <div className={cn("", className)}>
      {children.map((child, index) => {
        if (isValidElement(child) && child.type === RevealText) {
          return cloneElement(child, {
            key: index,
          });
        }

        return (
          <RevealText
            key={index}
            className={revealTextClassName}
            coverClassName={coverClassName}
          >
            {child}
          </RevealText>
        );
      })}
    </div>
  );
};
