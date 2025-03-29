import { AvatarCard } from "@/components/avatar-card";
import { IntroductionCard } from "@/components/introduction-card";
import { skillIcons } from "@/lib/site-config";
import { shuffleArray } from "@/lib/utils";
import { cn } from "@workspace/ui/lib/utils";

interface HomeSectionProps {
  className?: string;
}

export const HomeSection = (props: HomeSectionProps) => {
  const { className } = props;

  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_500px]">
            <IntroductionCard />
            <AvatarCard icons={shuffleArray(skillIcons)} />
          </div>
        </div>
      </div>
    </section>
  );
};
