import { whoIAm } from "@/lib/site-config";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import { Lightbulb } from "lucide-react";

interface WhoIAmCardProps {
  className?: string;
}

export const WhoIAmCard = (props: WhoIAmCardProps) => {
  const { className } = props;

  return (
    <Card
      className={cn(
        "gap-2 transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="flex flex-row items-end justify-start gap-2 overflow-hidden">
          <Lightbulb className="text-primary size-6 md:size-8" />
          <div className="text-xl md:text-2xl">Who I Am</div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="space-y-4 lg:space-y-6">
          {whoIAm.map((item, i) => (
            <p key={i} className="text-muted-foreground">
              {item}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
