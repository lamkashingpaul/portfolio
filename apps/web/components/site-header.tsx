"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-switcher";
import { sections } from "@/lib/site-config";
import Link from "next/link";

export const SiteHeader = () => {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href === "#" ? "top" : href.substring(1);
    const element =
      targetId === "top"
        ? document.documentElement
        : document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center justify-between gap-2 md:gap-4">
          <Link
            href={sections.home.href}
            onClick={(e) => handleScrollToSection(e, sections.home.href)}
            className="flex items-center gap-2"
          >
            <Icons.logo className="h-6" />
            <Icons.name className="h-4" />
          </Link>

          <nav className="hidden items-center justify-center gap-4 md:flex lg:gap-6">
            {Object.values(sections).map((section) => (
              <Link
                key={section.title}
                href={section.href}
                onClick={(e) => handleScrollToSection(e, section.href)}
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                {section.title}
              </Link>
            ))}
          </nav>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
