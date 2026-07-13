import { Footer } from "@/components/landing/Footer";
import { Logo } from "@/components/landing/Logo";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="page-gradient text-foreground flex min-h-screen flex-col">
      <header className="px-6 py-8 sm:px-10 lg:px-16">
        <Logo href="/" priority />
      </header>

      <main className="flex-1 px-6 pb-16 sm:px-10 lg:px-16">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-white/35">Last updated: {lastUpdated}</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-wide uppercase sm:text-5xl">
            {title}
          </h1>
          <div className="mt-12 space-y-10 text-base leading-relaxed text-white/60">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
