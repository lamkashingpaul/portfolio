import { cn } from "@workspace/ui/lib/utils";

interface SkillsLogosSectionProps {
  className?: string;
}

export const SkillsLogosSection = (props: SkillsLogosSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">Skills Logos Section</div>
      </div>
    </section>
  );
};
