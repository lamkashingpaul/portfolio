import { cn } from "@workspace/ui/lib/utils";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = (props: AboutSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">About Section</div>
      </div>
    </section>
  );
};
