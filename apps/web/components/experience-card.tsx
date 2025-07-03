import { Experience } from "@/types";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

type ExperienceCardProps = Experience & {
  className?: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { className, title, company, period, descriptions } = props;

  return (
    <Card
      className={cn(
        "gap-2 transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-medium">{title}</h4>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <Badge variant="outline">{period}</Badge>
        </div>

        <ul className="list-inside list-disc space-y-4">
          {descriptions.map((description, index) => (
            <li key={index} className="text-muted-foreground">
              {description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
