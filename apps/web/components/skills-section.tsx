import { RevealText } from "@/components/reveal-text";
import { SkillsCard } from "@/components/skills-card";
import { SlideText } from "@/components/slide-text";
import { sections, skillCategories } from "@/lib/site-config";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import { Code } from "lucide-react";

interface SkillsSectionProps {
  className?: string;
}

const directions = ["right", "left"] as const;

export const SkillsSection = (props: SkillsSectionProps) => {
  const { className } = props;

  return (
    <section
      id={sections.skills.id}
      className={cn("py-12 md:py-24", className)}
    >
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-row justify-center">
            <RevealText coverClassName="bg-primary">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Skills
              </h2>
            </RevealText>
          </div>
          <Separator className="mb-4 xl:mb-6" />

          <div className="space-y-4 lg:space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {skillCategories.map((category, i) => (
                <SlideText key={i} direction={directions[i & 1]}>
                  <SkillsCard className="h-full" {...category} />
                </SlideText>
              ))}
            </div>

            <SlideText>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="bg-secondary rounded-full p-2 shadow-md">
                  <Code />
                </div>
                <h3 className="text-xl font-medium">Always Learning</h3>
                <p className="text-muted-foreground max-w-[400px] lg:max-w-[600px]">
                  I&rsquo;m constantly expanding my skill set and staying
                  up-to-date with the latest technologies and best practices in
                  software development.
                </p>
              </div>
            </SlideText>
          </div>
        </div>
      </div>
    </section>
  );
};
