import { DesktopAvatarCard } from "@/components/desktop-avatar-card";
import { IntroductionCard } from "@/components/introduction-card";
import { cn } from "@workspace/ui/lib/utils";

interface HomeSectionProps {
  className?: string;
}

export const HomeSection = (props: HomeSectionProps) => {
  const { className } = props;
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-12 md:py-24 lg:py-32",
        className,
      )}
    >
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <IntroductionCard />
            <DesktopAvatarCard />
          </div>
        </div>
      </div>
    </section>
  );
};
