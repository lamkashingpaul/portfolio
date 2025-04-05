import { SocialIcons } from "@/components/social-icons";
import { RevealText } from "@/components/reveal-text";
import { TypewriterText } from "@/components/typewriter-text";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { personalInfo } from "@/lib/site-config";

interface IntroductionCardProps {
  className?: string;
}

export const IntroductionCard = (props: IntroductionCardProps) => {
  const { className } = props;

  return (
    <div className={cn("flex flex-col justify-center gap-4", className)}>
      <div className="space-y-2">
        <RevealText coverClassName="bg-primary">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {"Hi, this is "}
            <span className="text-primary">{personalInfo.name}</span>
          </h1>
        </RevealText>

        <RevealText coverClassName="bg-primary">
          <TypewriterText
            cursorClassName="text-primary"
            staticText="I'm a"
            typingTexts={personalInfo.titles}
          />
        </RevealText>

        <RevealText coverClassName="bg-muted-foreground">
          <p className="text-muted-foreground max-w-[600px] text-xl md:text-2xl">
            {personalInfo.summary}
          </p>
        </RevealText>

        <RevealText coverClassName="bg-muted-foreground">
          {personalInfo.introductions.map((item, i) => (
            <p key={i} className="text-muted-foreground max-w-[600px] pt-4">
              {item}
            </p>
          ))}
        </RevealText>
      </div>

      <div className="flex flex-col gap-2 pt-4 min-[400px]:flex-row">
        <Button asChild size="lg">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4 pt-4 min-[400px]:justify-start">
        <SocialIcons />
      </div>
    </div>
  );
};
