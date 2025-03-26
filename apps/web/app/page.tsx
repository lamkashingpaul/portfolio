import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsLogosSection } from "@/components/skills-logos-section";
import { SkillsSection } from "@/components/skills-section";

export default function Page() {
  return (
    <>
      <HomeSection />
      <SkillsLogosSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
