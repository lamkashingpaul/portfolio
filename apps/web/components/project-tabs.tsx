import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Brain } from "lucide-react";
import { ProjectGrid } from "@/components/project-grid";
import type { SideProject } from "@/types/side-project.type";

type ProjectTabsProps = {
  projects: SideProject[];
};

export const ProjectTabs = (props: ProjectTabsProps) => {
  const { projects } = props;

  return (
    <Tabs defaultValue="all">
      <TabsList className="flex h-auto w-full flex-wrap items-center justify-center gap-2">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="ai" className="flex items-center gap-1">
          <Brain className="text-primary" />
          AI/ML
        </TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <ProjectGrid projects={projects} />
      </TabsContent>

      <TabsContent value="ai">
        <div className="space-y-2">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-medium text-primary text-sm">
              Artificial Intelligence & Machine Learning Projects
            </div>
          </div>
          <ProjectGrid
            projects={projects.filter((project) => project.category === "ai")}
          />
        </div>
      </TabsContent>

      <TabsContent value="frontend">
        <ProjectGrid
          projects={projects.filter(
            (project) => project.category === "frontend",
          )}
        />
      </TabsContent>

      <TabsContent value="fullstack">
        <ProjectGrid
          projects={projects.filter(
            (project) => project.category === "fullstack",
          )}
        />
      </TabsContent>

      <TabsContent value="backend">
        <ProjectGrid
          projects={projects.filter(
            (project) => project.category === "backend",
          )}
        />
      </TabsContent>

      <TabsContent value="mobile">
        <ProjectGrid
          projects={projects.filter((project) => project.category === "mobile")}
        />
      </TabsContent>
    </Tabs>
  );
};
