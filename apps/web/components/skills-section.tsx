import { cn } from "@workspace/ui/lib/utils";

interface SkillsSectionProps {
  className?: string;
}

export const SkillsSection = (props: SkillsSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">Skills Section</div>
      </div>
    </section>
  );
};
