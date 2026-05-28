import Image from "next/image";

import { cn } from "@/lib/utils";

import styles from "./styles/Logo.module.css";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo-konko.svg"
        alt="Konko AI"
        width={140}
        height={40}
        priority
        className={cn(
          "h-8 w-auto transition-all duration-300",
          variant === "light" && styles.logoWhite,
        )}
      />
    </div>
  );
}
