import { cn } from "@workspace/ui/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Icons } from "@/components/icons";
import { personalInfo, socialLinks } from "@/lib/site-config";

interface ContactInformationProps {
  className?: string;
}

export const ContactInformation = (props: ContactInformationProps) => {
  const { className } = props;

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-6">
        <h3 className="font-medium text-xl">Contact Information</h3>
        <p className="text-muted-foreground">
          Feel free to reach out through the contact form or directly via email
          or phone. I&rsquo;m always open to discussing new projects, creative
          ideas, or opportunities to be part of your vision.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2">
              <Mail className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href={socialLinks.email}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2">
              <Phone className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href={socialLinks.phone}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2">
              <MapPin className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-xl">Connect With Me</h3>
        <div className="flex gap-4">
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 transition-colors hover:bg-primary/10"
            aria-label="LinkedIn"
          >
            <Icons.linkedIn className="size-5 text-primary" />
          </a>
          <a
            href={socialLinks.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 transition-colors hover:bg-primary/10"
            aria-label="GitHub"
          >
            <Icons.gitHub className="size-5 text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};
