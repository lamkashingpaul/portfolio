import { SkillBadge } from "@/components/skill-badge";
import { SkillCategory } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";

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
          <Icon className="text-primary size-6 md:size-8" />
          <div className="text-xl md:text-2xl">{title}</div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <SkillBadge className="rounded-full py-2" key={i} {...skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
