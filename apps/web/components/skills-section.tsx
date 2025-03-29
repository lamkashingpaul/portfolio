import { RevealText } from "@/components/reveal-text";
import { SkillsCard } from "@/components/skills-card";
import { SkillCategory } from "@/types";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import {
  Database,
  Server,
  Globe,
  Cloud,
  Braces,
  GitBranch,
  Code,
} from "lucide-react";

interface SkillsSectionProps {
  className?: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: [
      { name: "Python", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Next.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "HTML", level: "beginner" },
      { name: "CSS", level: "beginner" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "NestJS", level: "advanced" },
      { name: "Express.js", level: "intermediate" },
      { name: "Node.js", level: "beginner" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MySQL", level: "intermediate" },
      { name: "Redis", level: "beginner" },
      { name: "MongoDB", level: "beginner" },
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "GitHub Actions", level: "intermediate" },
    ],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "advanced" },
      { name: "Azure", level: "beginner" },
    ],
  },
];

export const SkillsSection = (props: SkillsSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-row justify-center">
            <RevealText coverClassName="bg-primary">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Skills
              </h2>
            </RevealText>
          </div>
          <Separator className="mb-4 xl:mb-6" />

          <div className="space-y-4 lg:space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {SKILL_CATEGORIES.map((category, i) => (
                <SkillsCard key={i} {...category} />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="bg-secondary rounded-full p-2 shadow-md">
                <Code />
              </div>
              <h3 className="text-xl font-medium">Always Learning</h3>
              <p className="text-muted-foreground max-w-[400px] lg:max-w-[600px]">
                I&rsquo;m constantly expanding my skill set and staying
                up-to-date with the latest technologies and best practices in
                software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
