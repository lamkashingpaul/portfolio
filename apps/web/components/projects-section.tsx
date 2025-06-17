import { Icons } from "@/components/icons";
import { ProjectTabs } from "@/components/project-tabs";
import { RevealText } from "@/components/reveal-text";
import { SlideText } from "@/components/slide-text";
import { projects, sections, socialLinks } from "@/lib/site-config";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

          <ProjectTabs projects={projects} />

          <SlideText delay={0.2} direction="up">
            <div className="mt-8 flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground mb-4">
                Want to see more of my work? Check out my GitHub profile for
                additional projects and contributions.
              </p>
              <Button asChild>
                <Link
                  href={socialLinks.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  View More on GitHub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SlideText>
        </div>
      </div>
    </section>
  );
};
