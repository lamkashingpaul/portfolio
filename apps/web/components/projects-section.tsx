import { cn } from "@workspace/ui/lib/utils";

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection = (props: ProjectsSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">Projects Section</div>
      </div>
    </section>
  );
};
