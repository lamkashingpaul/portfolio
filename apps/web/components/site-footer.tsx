export const SiteFooter = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary font-medium underline underline-offset-4 transition-colors"
            >
              Paul Lam
            </a>
            . The source code is available on{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/portfolio`}
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
    </footer>
  );
};
