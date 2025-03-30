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
          <p className="text-muted-foreground">
            I am Paul Lam, a Junior Software Developer at Forex Forest Limited,
            where I focus on developing applications using Next.js and NestJS.
            My work enhances user access to critical trading data, and I design
            robust database schemas with PostgreSQL while implementing scalable
            solutions on AWS for high performance and reliability.
          </p>

          <p className="text-muted-foreground">
            With a degree in Mathematics and Information Engineering from The
            Chinese University of Hong Kong, I bring strong analytical skills to
            my projects. As an AWS Certified Solutions Architect, I am committed
            to driving innovation and improving user experiences in
            collaborative environments.
          </p>

          <p className="text-muted-foreground">
            In my free time, I enjoy exploring new technologies and working on
            side projects that fuel my creativity. I&rsquo;m particularly
            focused on honing my coding skills in data structures and
            algorithms, which keeps me engaged and helps me discover innovative
            solutions for my professional work.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
