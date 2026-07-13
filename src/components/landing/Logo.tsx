import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0", className)}
      aria-label="VectorDarts home"
    >
      <Image
        src="/vector-logo.png"
        alt="VectorDarts"
        width={220}
        height={48}
        priority={priority}
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
