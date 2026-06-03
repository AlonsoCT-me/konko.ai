"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export function MetaPartnerSection() {
  const { t, i18n } = useTranslation();
  const isES = i18n.language?.startsWith("es");

  return (
    <section
      data-navbar-theme="light"
      className="w-full border-y border-brand-border bg-white"
    >
      <div className="mx-auto flex min-h-[525px] max-w-7xl flex-col justify-center gap-14 px-8 py-16 md:min-h-[450px] md:flex-row md:items-center md:gap-20 md:px-20 md:py-20">
        <div className="shrink-0">
          <Image
            src="/images/metab2b.png"
            alt={t("Meta Business Partner")}
            width={324}
            height={188}
            className="h-auto w-[170px] md:w-[324px]"
            priority={false}
          />
        </div>

        <div className="max-w-[860px]">
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-brand-black lg:text-5xl">
            {isES ? (
              <>
                Somos partners
                <br />
                oficiales de Meta
              </>
            ) : (
              t("We are official Meta partners")
            )}
          </h2>

          <p className="mt-5 max-w-[900px] text-[20px] font-normal leading-6 text-neutral-600 md:text-[22px] md:leading-[1.4]">
            {t(
              "We use the official WhatsApp Business API infrastructure to guarantee speed, stability, and a reliable experience for every patient.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
