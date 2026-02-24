import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import { SkillBadge } from "@/components/skill-badge";
import type { SkillCategory } from "@/types/skill-category.type";

type SkillsCardProps = SkillCategory & {
  className?: string;
};

export const SkillsCard = (props: SkillsCardProps) => {
  const { className, title, icon: Icon, skills } = props;

  return (
    <Card
      className={cn(
        "gap-2 transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="flex flex-row items-end justify-start gap-2 overflow-hidden">
          <Icon className="size-6 text-primary md:size-8" />
          <div className="text-xl md:text-2xl">{title}</div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge
              className="rounded-full py-2"
              key={skill.name}
              {...skill}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
