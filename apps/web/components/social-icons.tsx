import { Icons } from "@/components/icons";
import { socialLinks } from "@/lib/site-config";
import { FileText, Mail } from "lucide-react";
import Link from "next/link";

export const SocialIcons = () => {
  const { gitHub, linkedIn, email, resume } = socialLinks;

  return (
    <>
      <Link
        href={gitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Icons.gitHub className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Icons.linkedIn className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href={email}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-6 w-6" />
        <span className="sr-only">Email</span>
      </Link>
      <Link
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <FileText className="h-6 w-6" />
        <span className="sr-only">Resume</span>
      </Link>
    </>
  );
};
