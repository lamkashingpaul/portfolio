import { Badge } from "@workspace/ui/components/badge";
import type { Skill } from "@/types/skill.type";

type SkillBadgeProps = Skill & {
  className?: string;
};

const levelVariant = {
  beginner: "outline",
  intermediate: "secondary",
  advanced: "default",
} as const;

export const SkillBadge = (props: SkillBadgeProps) => {
  const { className, name, level } = props;
  const variant = levelVariant[level];

  return (
    <Badge className={className} variant={variant}>
      {name}
    </Badge>
  );
};
