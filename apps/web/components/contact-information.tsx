import { Icons } from "@/components/icons";
import { personalInfo, socialLinks } from "@/lib/site-config";
import { cn } from "@workspace/ui/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactInformationProps {
  className?: string;
}

export const ContactInformation = (props: ContactInformationProps) => {
  const { className } = props;

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Contact Information</h3>
        <p className="text-muted-foreground">
          Feel free to reach out through the contact form or directly via email
          or phone. I&rsquo;m always open to discussing new projects, creative
          ideas, or opportunities to be part of your vision.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-2">
              <Mail className="text-primary size-5" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href={socialLinks.email}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-2">
              <Phone className="text-primary size-5" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href={socialLinks.phone}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-2">
              <MapPin className="text-primary size-5" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-medium">Connect With Me</h3>
        <div className="flex gap-4">
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-primary/10 rounded-full p-3 transition-colors"
            aria-label="LinkedIn"
          >
            <Icons.linkedIn className="text-primary size-5" />
          </a>
          <a
            href={socialLinks.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-primary/10 rounded-full p-3 transition-colors"
            aria-label="GitHub"
          >
            <Icons.gitHub className="text-primary size-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
