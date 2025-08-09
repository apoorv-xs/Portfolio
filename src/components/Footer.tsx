const Footer = () => {
  const year = new Date().getFullYear();
  const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env || {};
  const LINKEDIN = env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/apoorv-a-s/";
  const BEHANCE = env.VITE_BEHANCE_URL || "https://www.behance.net/apoorvxs";
  const GITHUB = env.VITE_GITHUB_URL || "https://github.com/apoorv-xs";

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/60">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <nav aria-label="social links" className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            title="Open LinkedIn profile"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">in</span>
            <span>LinkedIn</span>
          </a>
          <a
            href={BEHANCE}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Behance profile"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">Be</span>
            <span>Behance</span>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            title="Open GitHub profile"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">GH</span>
            <span>GitHub</span>
          </a>
        </nav>

        <p className="text-muted-foreground text-xs text-center">
          © {year} Apoorv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;