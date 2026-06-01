"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CtaButton } from "@/components/shared/buttons";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white before:pointer-events-none before:absolute before:inset-0 before:opacity-60 before:content-[''] before:[background-image:radial-gradient(circle,#d4d4d4_1px,transparent_1px)] before:[background-size:28px_28px]">
      <div className="pointer-events-none absolute right-[-260px] top-[70px] h-[620px] w-[620px] bg-[url('/images/hero-bg-form.svg')] bg-contain bg-center bg-no-repeat md:right-[-120px] md:top-[-40px] md:h-[820px] md:w-[820px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-26 pb-0 md:px-20">
        <div className="max-w-[980px]">
          <h1 className="text-[40px] font-medium leading-none tracking-[-0.03em] text-brand-black md:text-[88px] md:leading-[80px]">
            {t("More appointments")}
            <br />
            {t("Better care")}
            <br />
            {t("Less")}{" "}
            <span className="block md:inline">{t("operational load")}</span>
          </h1>

          <p className="mt-8 max-w-[720px] text-[14px] font-light leading-[18px] text-neutral-600 md:mt-10 md:text-[20px] md:leading-[25px]">
            {t(
              "Convert and retain patients with personalized 24/7 care for your clinic, while freeing your team from operational chaos.",
            )}
          </p>

          <div className="mt-28 flex flex-col gap-3 px-1 md:mt-10 md:flex-row md:items-center md:gap-3 md:px-0">
            <div className="mt-28 flex flex-col gap-3 px-1 md:mt-10 md:flex-row md:items-center md:gap-3 md:px-0">
              <CtaButton href="#demo">{t("Schedule Demo")}</CtaButton>

              <CtaButton href="#kora" variant="secondary">
                {t("Try for free")}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
