import { RevealText } from "@/components/reveal-text";
import { SlideText } from "@/components/slide-text";
import { projects, sections } from "@/lib/site-config";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import { TrafficCone } from "lucide-react";

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection = (props: ProjectsSectionProps) => {
  const { className } = props;

  return (
    <section
      id={sections.projects.id}
      className={cn("py-12 md:py-24", className)}
    >
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-row justify-center">
            <RevealText coverClassName="bg-primary">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Projects
              </h2>
            </RevealText>
          </div>
          <Separator className="mb-4 xl:mb-6" />

          <div className="space-y-4 lg:space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map(() => null)}
            </div>

            <SlideText>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="bg-secondary rounded-full p-2 shadow-md">
                  <TrafficCone />
                </div>
                <h3 className="text-xl font-medium">Coming Soon</h3>
                <p className="text-muted-foreground max-w-[400px] lg:max-w-[600px]">
                  I have developed several exciting projects locally and am
                  currently working on deploying them online. Stay tuned for
                  updates as I bring these creations to life!
                </p>
              </div>
            </SlideText>
          </div>
        </div>
      </div>
    </section>
  );
};
