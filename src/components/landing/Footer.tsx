import Link from "next/link";
import { Logo } from "@/components/landing/Logo";
import { SOCIAL_LINKS } from "@/features/landing/data";

type FooterProps = {
  showLogo?: boolean;
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.3-1.5 1.6-1.5H17V4.1C16.7 4.1 15.8 4 14.7 4 12.3 4 10.7 5.5 10.7 8.2V10.5H8v3h2.7V20h3.3v-6.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
      <path d="M17.5 6.3a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0z" />
      <path d="M12 2.2c-2.7 0-3.04.01-4.1.06-2.7.12-4.12 1.52-4.24 4.24-.05 1.06-.06 1.4-.06 4.1s.01 3.04.06 4.1c.12 2.71 1.54 4.12 4.24 4.24 1.06.05 1.4.06 4.1.06s3.04-.01 4.1-.06c2.71-.12 4.12-1.54 4.24-4.24.05-1.06.06-1.4.06-4.1s-.01-3.04-.06-4.1c-.12-2.72-1.53-4.12-4.24-4.24-1.06-.05-1.4-.06-4.1-.06zm0 1.62c2.65 0 2.96.01 4.01.06 1.98.09 3.03 1.12 3.12 3.12.05 1.05.06 1.36.06 4.01s-.01 2.96-.06 4.01c-.09 1.98-1.14 3.03-3.12 3.12-1.05.05-1.36.06-4.01.06s-2.96-.01-4.01-.06c-1.99-.09-3.03-1.14-3.12-3.12-.05-1.05-.06-1.36-.06-4.01s.01-2.96.06-4.01c.09-1.99 1.13-3.03 3.12-3.12 1.05-.05 1.36-.06 4.01-.06z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M19.27 5.33A16.8 16.8 0 0 0 14.94 4c-.2.36-.43.85-.59 1.23a15.4 15.4 0 0 0-4.7 0A10.3 10.3 0 0 0 9.06 4a16.9 16.9 0 0 0-4.34 1.34C1.97 9.05 1.4 12.67 1.68 16.24a16.97 16.97 0 0 0 5.17 2.63c.42-.57.79-1.17 1.11-1.8-.61-.23-1.19-.51-1.74-.84.15-.11.29-.22.43-.33a12.1 12.1 0 0 0 10.7 0c.14.11.28.22.43.33-.55.33-1.13.61-1.74.84.32.63.69 1.23 1.11 1.8a16.9 16.9 0 0 0 5.17-2.63c.33-4.14-.56-7.73-2.35-10.91zM8.7 14.3c-.94 0-1.71-.87-1.71-1.93s.75-1.93 1.71-1.93 1.73.87 1.71 1.93c0 1.06-.75 1.93-1.71 1.93zm6.6 0c-.94 0-1.71-.87-1.71-1.93s.75-1.93 1.71-1.93 1.73.87 1.71 1.93c0 1.06-.76 1.93-1.71 1.93z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Discord: DiscordIcon,
} as const;

export function Footer({ showLogo = true }: FooterProps) {
  return (
    <footer className="bg-[#84C126] px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {showLogo ? (
            <Logo
              href="/"
              variant="white"
              imageClassName="h-11 w-auto sm:h-14"
            />
          ) : null}
          <p
            className={
              showLogo
                ? "mt-4 text-sm text-[#000000]"
                : "text-sm text-[#000000]"
            }
          >
            © {new Date().getFullYear()} Vector Darts
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = SOCIAL_ICONS[item.label];

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#000000] transition-colors hover:border-black/40 hover:bg-black/5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="flex gap-8 text-sm text-[#000000]">
            <Link
              href="/privacy"
              className="transition-colors hover:text-black/70"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-black/70"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-black/70"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
