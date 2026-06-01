"use client";

import { useTranslation } from "react-i18next";

export function AILatamSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="w-full bg-[url('/images/bg-IA-section.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto overflow-hidden px-8 py-20 after:pointer-events-none after:absolute after:bottom-[-30px] after:right-[-40px] after:z-[1] after:h-[260px] after:w-[160px] after:bg-[url('/images/world.svg')] after:bg-contain after:bg-no-repeat after:content-[''] md:min-h-[380px] md:px-10 md:py-0 md:after:bottom-0 md:after:right-0 md:after:top-0 md:after:h-[430px] md:after:w-[230px] lg:min-h-[400px] lg:px-20">
          {/* overlay oscuro */}
          <div className="absolute inset-0 z-0 bg-neutral-950/15" />

          <div className="relative z-10 max-w-[680px] md:flex md:min-h-[380px] md:max-w-[900px] md:flex-col md:justify-center lg:min-h-[400px]">
            <h2 className="text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-brand-gold md:max-w-[760px] md:text-[48px]">
              {t("AI for clinics in Latam")}
            </h2>

            <p className="mt-7 max-w-[920px] text-[28px] leading-[1.22] tracking-[-0.02em] text-white md:mt-5 md:text-[28px] md:leading-[1.28]">
              {t(
                "Kora is not a generic AI, it was trained with millions of conversations to understand clinical complexity.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
