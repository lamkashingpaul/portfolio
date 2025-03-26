import { cn } from "@workspace/ui/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = (props: ContactSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">Contact Section</div>
      </div>
    </section>
  );
};
