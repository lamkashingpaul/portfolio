"use client";

import { cn } from "@workspace/ui/lib/utils";
import { Children, cloneElement, isValidElement } from "react";
import { RevealText } from "@/components/reveal-text";

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
        const key =
          child && typeof child === "object" && "key" in child
            ? child.key
            : `reveal-${index}`;

        if (isValidElement(child) && child.type === RevealText) {
          return cloneElement(child, { key });
        }

        return (
          <RevealText
            key={key}
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
