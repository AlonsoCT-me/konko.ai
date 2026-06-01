"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
} & React.ComponentPropsWithoutRef<"a">;

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: CtaButtonProps) {
  const isPrimary = variant === "primary";
  const isWhatsapp = variant === "whatsapp";

  return (
    <Link
      href={href}
      {...props}
      className={[
        "inline-flex h-16 items-center justify-between rounded-full transition-transform hover:scale-[1.02]",
        "focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2",
        isPrimary &&
          "border border-brand-gold bg-brand-black py-1 pl-7 pr-1 text-brand-white md:min-w-[220px]",
        variant === "secondary" &&
          "bg-neutral-100 py-2.5 pl-7 pr-3 text-brand-black md:min-w-[220px]",
        isWhatsapp &&
          "w-full bg-brand-black py-1 pl-7 pr-1 text-brand-white md:w-[234px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="mx-auto flex items-center gap-2 text-base font-medium leading-5">
        {isWhatsapp && (
          <Image
            src="/images/whatsapp.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
          />
        )}

        {children}
      </span>

      <span
        className={[
          "flex shrink-0 items-center justify-center rounded-full text-brand-black",
          isPrimary || isWhatsapp
            ? "size-14 bg-brand-white"
            : "size-11 bg-neutral-100",
        ].join(" ")}
      >
        <ArrowRight className="size-6" strokeWidth={2.4} />
      </span>
    </Link>
  );
}
