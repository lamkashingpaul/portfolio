import type { LucideIcon } from "lucide-react";
import type { Skill } from "@/types/skill.type";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};
