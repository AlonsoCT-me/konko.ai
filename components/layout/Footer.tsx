"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import {
  CTA_LABELS,
  DEMO_URL,
  FOOTER_LINKS,
  WHATSAPP_URL,
} from "@/constants/navigation";

import { CtaButton } from "@/components/shared/buttons";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      data-navbar-theme="dark"
      data-navbar-glass="none"
      className="relative w-full overflow-hidden bg-brand-black text-brand-white"
    >
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
            <CtaButton href={DEMO_URL}>{t(CTA_LABELS.demo)}</CtaButton>

            <CtaButton href={WHATSAPP_URL} variant="secondary">
              {t(CTA_LABELS.koraFree)}
            </CtaButton>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <Logo variant="light" className="h-9 w-auto" />

          <nav className="mt-8 flex max-w-[620px] flex-wrap gap-x-14 gap-y-6 md:items-center md:gap-x-7">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal leading-4 text-brand-white transition-opacity hover:opacity-70"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="mt-20">
            <LanguageSwitcher variant="footer" />
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
