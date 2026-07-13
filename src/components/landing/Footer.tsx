import Link from "next/link";
import { Logo } from "@/components/landing/Logo";
import { LEGAL_CONTACT_EMAIL } from "@/features/legal/constants";

export function Footer() {
  return (
    <footer className="section-shell section-tone-deep section-wash-soft px-6 py-14 sm:px-10 lg:px-16">
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo href="/" />
          <p className="mt-4 text-sm text-white/30">
            © {new Date().getFullYear()} Vector Darts
          </p>
        </div>

        <div className="flex gap-8 text-sm text-white/35">
          <Link
            href="/privacy"
            className="transition-colors hover:text-white/70"
          >
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white/70">
            Terms
          </Link>
          <a
            href={`mailto:${LEGAL_CONTACT_EMAIL}`}
            className="transition-colors hover:text-white/70"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
