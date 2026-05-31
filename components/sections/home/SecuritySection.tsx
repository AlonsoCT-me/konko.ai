"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const securityItems = [
  {
    title: "SOC 2",
    description: "SOC 2 Description",
    image: "soc-2.svg",
  },
  {
    title: "GDPR",
    description: "GDPR Description",
    image: "gdpr.svg",
  },
  {
    title: "ISO 27001",
    description: "ISO 27001 Description",
    image: "iso27.svg",
  },
  {
    title: "LFPDPPP",
    description: "LFPDPPP Description",
    image: "lfpdppp.svg",
  },
  {
    title: "HL7 FHIR",
    description: "HL7 FHIR Description",
    image: "hl7.svg",
  },
  {
    title: "Encrypted",
    description: "Encrypted Description",
    image: "cifrado.svg",
  },
];

export function SecuritySection() {
  const { t } = useTranslation();

  return (
    <section id="seguridad" className="w-full overflow-hidden">
      <div className="relative w-full overflow-hidden bg-brand-black">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/images/bg-gold-pattern.png')] bg-cover bg-center brightness-[0.30] contrast-125 grayscale" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 md:py-24 lg:px-20 lg:py-28">
          {/* Header */}
          <div className="mb-10 max-w-[760px] md:mb-12">
            <h2 className="text-[32px] font-semibold leading-[39px] text-brand-gold md:text-[48px] md:leading-[58px]">
              {t("Security in every conversation")}
            </h2>

            <p className="mt-5 max-w-[700px] text-[20px] font-normal leading-6 text-brand-white md:text-[28px] md:leading-[34px]">
              {t(
                "Your patients' information is protected with the highest security standards",
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[20px] border border-neutral-700">
            <div className="grid grid-cols-2 md:grid-cols-3">
              {securityItems.map((item) => (
                <article
                  key={item.title}
                  className="flex h-[152px] flex-col items-center justify-center border-b border-r border-neutral-700 px-4 text-center transition-colors duration-300 hover:bg-white/[0.02] md:h-[285px] md:items-start md:justify-start md:px-8 md:py-12 md:text-left [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-b-0 [&:nth-child(n+5)]:border-b-0"
                >
                  <Image
                    src={`/images/${item.image}`}
                    alt={t(item.title)}
                    width={80}
                    height={80}
                    className="mb-3 h-20 w-20 object-contain md:mb-8"
                  />

                  <h3 className="text-base font-semibold leading-[19px] text-brand-white md:text-[24px] md:leading-[29px]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 hidden max-w-[260px] text-base font-normal leading-5 text-neutral-400 md:block">
                    {t(item.description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
