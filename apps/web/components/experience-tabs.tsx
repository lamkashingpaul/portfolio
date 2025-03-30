import { EducationCard } from "@/components/education-card";
import { ExperienceCard } from "@/components/experience-card";
import { SlideText } from "@/components/slide-text";
import { educations, experiences } from "@/lib/site-config";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

export const ExperienceTabs = () => {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className="flex items-center" value="experience">
          <Briefcase className="text-primary" />
          Experience
        </TabsTrigger>
        <TabsTrigger className="flex items-center" value="education">
          <GraduationCap className="text-primary" />
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <SlideText>
          <div className="space-y-4 lg:space-y-6">
            {experiences.map((experience, i) => (
              <ExperienceCard key={i} {...experience} />
            ))}
          </div>
        </SlideText>
      </TabsContent>
      <TabsContent value="education">
        <SlideText>
          <div className="space-y-4 lg:space-y-6">
            {educations.map((education, i) => (
              <EducationCard key={i} {...education} />
            ))}
          </div>
        </SlideText>
      </TabsContent>
    </Tabs>
  );
};
