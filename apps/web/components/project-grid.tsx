import { ProjectCard } from "@/components/project-card";
import { SlideText } from "@/components/slide-text";
import { SideProject } from "@/types";
import { TrafficCone } from "lucide-react";

type ProjectGridProps = {
  projects: SideProject[];
};

const directions = ["right", "left"] as const;

export const ProjectGrid = (props: ProjectGridProps) => {
  const { projects } = props;
  if (!projects.length) {
    return <NoProjectsPlaceholder />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <SlideText
          key={project.id}
          delay={i * 0.1}
          direction={directions[i & 1]}
        >
          <ProjectCard project={project} />
        </SlideText>
      ))}
    </div>
  );
};

const NoProjectsPlaceholder = () => {
  return (
    <SlideText>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <div className="bg-secondary rounded-full p-2 shadow-md">
          <TrafficCone />
        </div>
        <h3 className="text-xl font-medium">Coming Soon</h3>
        <p className="text-muted-foreground max-w-[400px] lg:max-w-[600px]">
          I have developed several exciting projects locally and am currently
          working on deploying them online. Stay tuned for updates as I bring
          these creations to life!
        </p>
      </div>
    </SlideText>
  );
};
