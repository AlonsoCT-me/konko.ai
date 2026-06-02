"use client";

import { useTranslation } from "react-i18next";

import { CtaButton } from "@/components/shared/buttons";
import { DEMO_URL, WHATSAPP_URL } from "@/constants/navigation";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-black before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:bg-brand-black/35 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-r after:from-brand-black/75 after:via-brand-black/35 after:to-transparent after:content-['']">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/hero_web_1920x1080.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <source src="/videos/hero_web_1440x1080.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-24 md:px-20">
        <div className="max-w-[980px]">
          <h1 className="text-[40px] font-medium leading-none tracking-[-0.03em] text-brand-white md:text-[88px] md:leading-[80px]">
            {t("More appointments")}
            <br />
            {t("Better care")}
            <br />
            {t("Less")}{" "}
            <span className="block md:inline">{t("operational load")}</span>
          </h1>

          <p className="mt-8 max-w-[720px] text-[14px] font-light leading-[18px] text-brand-white/80 md:mt-10 md:text-[20px] md:leading-[25px]">
            {t(
              "Convert and retain patients with personalized 24/7 care for your clinic, while freeing your team from operational chaos.",
            )}
          </p>

          <div className="mt-28 flex flex-col gap-3 px-1 md:mt-10 md:flex-row md:items-center md:gap-3 md:px-0">
            <CtaButton href={DEMO_URL}>{t("Schedule Demo")}</CtaButton>

            <CtaButton href={WHATSAPP_URL} variant="secondary">
              {t("Try for free")}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
