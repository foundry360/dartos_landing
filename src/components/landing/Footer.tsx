import Link from "next/link";
import { Logo } from "@/components/landing/Logo";

type FooterProps = {
  showLogo?: boolean;
};

export function Footer({ showLogo = true }: FooterProps) {
  return (
    <footer className="bg-[#84C126] px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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
              showLogo ? "mt-4 text-sm text-white/75" : "text-sm text-white/75"
            }
          >
            © {new Date().getFullYear()} Vector Darts
          </p>
        </div>

        <div className="flex gap-8 text-sm text-white/80">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
