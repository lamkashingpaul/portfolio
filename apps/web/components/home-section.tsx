import { AvatarCard } from "@/components/avatar-card";
import { Icons } from "@/components/icons";
import { IntroductionCard } from "@/components/introduction-card";
import { shuffleArray } from "@/lib/utils";
import { cn } from "@workspace/ui/lib/utils";

const SKILLS_ICONS = [
  Icons.nextJs,
  Icons.reactJs,
  Icons.tailwindCss,
  Icons.typeScript,
  Icons.nodeJs,
  Icons.expressJs,
  Icons.postgreSql,
  Icons.docker,
  Icons.git,
  Icons.jest,
  Icons.python,
  Icons.javaScript,
  Icons.html5,
  Icons.css,
  Icons.nestJs,
  Icons.terraform,
  Icons.postman,
  Icons.aws,
  Icons.shadcnUi,
  Icons.mySql,
  Icons.reactQuery,
  Icons.redux,
  Icons.githubActions,
  Icons.mui,
  Icons.vite,
  Icons.turborepo,
];

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
            <AvatarCard icons={shuffleArray(SKILLS_ICONS)} />
          </div>
        </div>
      </div>
    </section>
  );
};
