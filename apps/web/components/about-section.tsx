import { PersonalInfoCard } from "@/components/personal-info-card";
import { RevealText } from "@/components/reveal-text";
import { WhoIAmCard } from "@/components/who-i-am-card";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = (props: AboutSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-row justify-center">
            <RevealText coverClassName="bg-primary">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Me
              </h2>
            </RevealText>
          </div>
          <Separator className="mb-4 xl:mb-6" />
          <div className="grid grid-cols-1 gap-4">
            <PersonalInfoCard />
            <WhoIAmCard />
          </div>
        </div>
      </div>
    </section>
  );
};
