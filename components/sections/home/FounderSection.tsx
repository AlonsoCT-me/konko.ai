"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      data-navbar-theme="light"
      className="relative w-full overflow-hidden border-y border-brand-border bg-white"
    >
      <div className="absolute bottom-0 left-0 hidden h-[420px] w-full bg-gradient-to-r from-brand-cream-warm to-brand-gold-vivid opacity-30 [clip-path:polygon(0_0,100%_65%,100%_100%,0_100%)] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 md:min-h-[900px] lg:grid-cols-[1fr_480px] lg:px-20 lg:py-28">
        <div className="max-w-[630px]">
          <h2 className="relative inline-flex flex-row items-start text-3xl font-bold leading-tight tracking-[-0.03em] text-brand-black lg:text-5xl">
            {t("Made with love")}
            <span className="ml-3 mt-1 inline-block h-9 w-9 animate-pulse bg-[url('/images/heart-svg.svg')] bg-contain bg-center bg-no-repeat md:h-10 md:w-10" />
          </h2>

          <div className="mt-6 space-y-8 text-lg font-normal leading-relaxed tracking-[-0.01em] text-neutral-600 lg:text-[22px]">
            <p>
              {t(
                "Konko was born after seeing Juliana sacrifice entire nights and weekends to keep her clinic moving forward.",
              )}
            </p>

            <p>
              {t(
                "Our mission is to give time and freedom back to the people behind every clinic, so they can focus on what truly matters.",
              )}
            </p>
          </div>

          <div className="mt-14">
            <p className="text-[20px] font-semibold leading-[27px] text-brand-black">
              Jean Marc Goguikian
            </p>
            <p className="mt-1 text-[18px] font-normal leading-[27px] text-neutral-500">
              {t("Husband of Dr. Vallejo & CEO of Konko AI")}
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[330px] w-[300px] md:h-[520px] md:w-[470px]">
          <div className="absolute left-5 top-4 h-[291px] w-[261px] rotate-[-5.93deg] overflow-hidden rounded-lg border-2 border-white shadow-card-lg transition-transform duration-500 hover:rotate-[-8deg] md:h-[481px] md:w-[431px] md:rounded-xl md:border-[3px]" />

          <Image
            src="/images/jean&julie.png"
            alt={t("Jean Marc and Juliana")}
            fill
            className="absolute z-10 h-[291px] w-[261px] rounded-lg border-2 border-white object-cover shadow-card-xl transition-transform duration-500 hover:scale-[1.02] md:h-[481px] md:w-[431px] md:rounded-xl md:border-[3px]"
            sizes="(max-width: 768px) 261px, 431px"
          />
        </div>
      </div>
    </section>
  );
}
