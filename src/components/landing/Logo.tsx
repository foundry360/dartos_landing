import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  href?: string;
  variant?: "default" | "white";
};

export function Logo({
  className,
  imageClassName,
  priority = false,
  href = "/",
  variant = "default",
}: LogoProps) {
  const src =
    variant === "white" ? "/vector-logo-white.png" : "/vector-logo.png";

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0", className)}
      aria-label="VectorDarts home"
    >
      <Image
        src={src}
        alt="VectorDarts"
        width={220}
        height={48}
        priority={priority}
        className={cn("h-8 w-auto sm:h-9", imageClassName)}
      />
    </Link>
  );
}
