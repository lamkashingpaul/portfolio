"use client";

import { personalInfo, socialLinks } from "@/lib/site-config";
import { Button } from "@workspace/ui/components/button";
import { ArrowUp } from "lucide-react";

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>

            <div className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left">
              {`© ${currentYear} `}
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary font-medium underline underline-offset-4 transition-colors"
              >
                {` ${personalInfo.name} `}
              </a>
              {"All rights reserved. The source code is available on "}
              <a
                href={`${socialLinks.gitHub}/portfolio`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary font-medium underline underline-offset-4 transition-colors"
              >
                GitHub
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
