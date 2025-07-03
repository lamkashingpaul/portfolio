import { Education } from "@/types";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

type EducationCardProps = Education & {
  className?: string;
};

export const EducationCard = (props: EducationCardProps) => {
  const { className, degree, institution, period, descriptions } = props;

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
            <h4 className="font-medium">{degree}</h4>
            <p className="text-muted-foreground">{institution}</p>
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
