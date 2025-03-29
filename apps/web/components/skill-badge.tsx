import { Skill } from "@/types";
import { Badge } from "@workspace/ui/components/badge";

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
