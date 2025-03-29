import { EducationCard } from "@/components/education-card";
import { ExperienceCard } from "@/components/experience-card";
import { Education, Experience } from "@/types";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES: Experience[] = [
  {
    title: "Junior Software Developer",
    company: "Forex Forest Limited",
    period: "Jun 2022 - Present",
    descriptions: [
      "Developed a full-stack web application with Next.js and NestJS, enhancing user access to trading data. Designed robust PostgreSQL database schemas and streamlined interactions using MikroORM, reducing coding time by 40%. Engineered scalable architecture on AWS, ensuring 99.9% uptime.",
      "Collaborated with external developers to improve client system functionality, increasing user engagement by 30%. Redesigned over 15 frontend pages with React and TypeScript. Conducted code reviews to enhance code quality, reducing bugs by 25%, and created CI/CD pipelines to cut development time by 20%.",
      "Designed a validation server for software license authentication, collaborating with product teams to define criteria. Developed RESTful APIs for license validation, leading to a 40% reduction in licensing issues through enhanced testing and error handling.",
    ],
  },
];

const EDUCATIONS: Education[] = [
  {
    degree: "Bachelor of Science in Mathematics and Information Engineering",
    institution: "The Chinese University of Hong Kong, Hong Kong",
    period: "Sep 2018 - Jul 2022",
    descriptions: [
      "Learned the fundamentals of mathematics and information engineering, including data structures, algorithms, and software engineering principles.",
      "Earned dean's list honors for outstanding academic performance in academic years 2018-2019 and 2019-2020.",
    ],
  },
];

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
        <div className="space-y-4 lg:space-y-6">
          {EXPERIENCES.map((experience, i) => (
            <ExperienceCard key={i} {...experience} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="education">
        <div className="space-y-4 lg:space-y-6">
          {EDUCATIONS.map((education, i) => (
            <EducationCard key={i} {...education} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
