import { Logo } from "@/components/landing/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/6 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/30">
            © {new Date().getFullYear()} Placeholder
          </p>
        </div>

        <div className="flex gap-8 text-sm text-white/35">
          <a href="#" className="transition-colors hover:text-white/70">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
