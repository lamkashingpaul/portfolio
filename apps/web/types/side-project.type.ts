export type SideProjectCategory =
  | "ai"
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile";

export type SideProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: SideProjectCategory;
  technologies: string[];
  featured?: boolean;
};
