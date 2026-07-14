import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { SiteNav } from "@/components/landing/SiteNav";
import { CONTACT_EMAIL } from "@/features/landing/data";

export function ContactPageContent() {
  return (
    <div className="page-gradient text-foreground relative flex min-h-screen flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(132,193,38,0.1),transparent_42%),radial-gradient(ellipse_at_90%_20%,rgba(255,255,255,0.04),transparent_40%)]"
      />

      <SiteNav />

      <main className="relative z-10 flex flex-1 items-center px-6 pt-28 pb-24 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,28rem)] lg:items-start lg:gap-24">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[#84C126]/80 uppercase sm:text-sm">
              Contact
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(3.75rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-[0.02em]">
              Get In Touch
              <span className="text-[#84C126]">.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/50 sm:text-xl">
              Questions, feedback, or partnership opportunities, we&apos;re here
              to help. Whether you&apos;re an individual player, a club, or
              exploring what&apos;s possible with VectorOS, we&apos;d love to
              start the conversation.
            </p>

            <div className="mt-12">
              <p className="text-xs tracking-[0.16em] text-white/35 uppercase">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.02em] text-white transition-colors hover:text-[#84C126] sm:text-3xl"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:pt-14">
            <ContactForm />
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer showLogo={false} />
      </div>
    </div>
  );
}
