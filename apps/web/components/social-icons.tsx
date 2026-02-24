import { Mail } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { socialLinks } from "@/lib/site-config";

export const SocialIcons = () => {
  const { gitHub, linkedIn, email } = socialLinks;

  return (
    <>
      <Link
        href={gitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        <Icons.gitHub className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        <Icons.linkedIn className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href={email}
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        <Mail className="h-6 w-6" />
        <span className="sr-only">Email</span>
      </Link>
    </>
  );
};
