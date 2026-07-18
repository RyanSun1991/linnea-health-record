import Link from "next/link";

const navItems = [
  ["Privacy", "/privacy"],
  ["Health data", "/consumer-health"],
  ["AI notices", "/disclaimers"],
  ["Terms", "/terms"],
  ["Support", "/support"],
] as const;

export function SiteShell({
  activePath,
  children,
}: Readonly<{
  activePath: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="nav-mast">
        <p className="nav-mast__line">Personal health companion · Public documents</p>
        <Link className="nav-mast__name" href="/" aria-label="Linnea home">
          Linnea
        </Link>
        <nav className="nav-mast__nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link
              aria-current={activePath === href ? "page" : undefined}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-mast__rule" aria-hidden="true" />
      </header>
      {children}
      <footer className="foot-line">
        <p>
          © 2026 Linnea · <Link href="/privacy">Privacy</Link> ·{" "}
          <Link href="/consumer-health">Consumer health data</Link> ·{" "}
          <Link href="/disclaimers">AI notices</Link> ·{" "}
          <Link href="/terms">Terms</Link> · <Link href="/support">Support</Link>
        </p>
      </footer>
    </div>
  );
}
