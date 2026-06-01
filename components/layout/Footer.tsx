"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CtaButton } from "@/components/shared/buttons";

import { Logo } from "@/components/shared/Logo";

const footerLinks = [
  { label: "Cases", href: "https://www.konko.ai/#case-studies" },
  { label: "About Us", href: "https://www.konko.ai/about" },
  { label: "Blog", href: "https://www.konko.ai/blog" },
  { label: "Terms of Service", href: "https://www.konko.ai/terms" },
  { label: "Privacy Policy", href: "https://www.konko.ai/privacy-policy" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full overflow-hidden bg-brand-black text-brand-white">
      <div className="absolute inset-0 bg-[url('/images/bg-gold-pattern.png')] bg-cover bg-center brightness-[0.30] contrast-125 grayscale" />
      <div className="absolute inset-0 bg-brand-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[900px] max-w-7xl flex-col justify-between px-8 py-20 lg:px-20 lg:py-24">
        <section>
          <h2 className="max-w-[1080px] text-[40px] font-normal leading-[56px] md:text-[96px] md:leading-[96px]">
            <span className="text-brand-gold">{t("Building the future")}</span>
            <br />
            <span className="text-brand-white">
              {t("of healthcare in Latam")}
            </span>
          </h2>

          <div className="mt-14 flex flex-col gap-4 md:mt-16 md:flex-row md:gap-3">
            <CtaButton href="#demo">{t("Schedule Demo")}</CtaButton>

            <CtaButton href="#kora" variant="secondary">
              {t("Try for free")}
            </CtaButton>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <Logo variant="light" className="h-9 w-auto" />

          <nav className="mt-8 flex max-w-[620px] flex-wrap gap-x-14 gap-y-6 md:items-center md:gap-x-7">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal leading-4 text-brand-white transition-opacity hover:opacity-70"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="mt-20 flex items-center gap-3">
            <Image
              src="/images/world-lang.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
              aria-hidden="true"
            />
            <span className="text-sm font-normal leading-4 text-brand-white">
              {t("English")}
            </span>
          </div>

          <p className="mt-6 max-w-[343px] text-sm font-normal leading-4 text-brand-white md:max-w-none">
            {t("© {{year}} Konko AI, Inc. All rights reserved.", {
              year: new Date().getFullYear(),
            })}
          </p>
        </section>
      </div>
    </footer>
  );
}
