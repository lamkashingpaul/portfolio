import { Icons } from "@/components/icons";
import { SideProject } from "@/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Brain, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: SideProject;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    title,
    description,
    image,
    demoUrl,
    githubUrl,
    category,
    technologies,
    featured,
  } = props.project;

  return (
    <Card className="flex h-full flex-col overflow-hidden pt-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hover:scale-120 scale-110 object-cover transition-transform duration-300"
        />
        {featured && (
          <div className="absolute right-2 top-2">
            <Badge className="bg-primary hover:bg-primary">Featured</Badge>
          </div>
        )}
        {category === "ai" && (
          <div className="absolute left-2 top-2">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              <Brain className="mr-1 h-3 w-3" />
              AI/ML
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1"
          >
            <Icons.gitHub className="h-3.5 w-3.5" />
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
