import { SiteShell } from "./site-shell";

export function DocumentPage({
  activePath,
  title,
  version,
  children,
}: Readonly<{
  activePath: string;
  title: string;
  version: string;
  children: React.ReactNode;
}>) {
  return (
    <SiteShell activePath={activePath}>
      <main className="legal-document" id="main-content">
        <header className="legal-document__header">
          <p className="document-meta">Version {version} · Effective 19 July 2026</p>
          <h1>{title}</h1>
        </header>
        <article className="legal-prose">{children}</article>
      </main>
    </SiteShell>
  );
}
