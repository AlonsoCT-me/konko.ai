"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CtaButton } from "@/components/shared/buttons";

export function TalkToKoraSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="w-full bg-[url('/images/gold-bg-section.jpg')] bg-cover bg-center">
        <div className="mx-auto flex min-h-[360px] max-w-7xl items-center px-6 py-12 md:min-h-[400px] md:px-10 lg:px-20">
          <div className="max-w-[620px]">
            <h2 className="text-4xl font-semibold leading-[46px] text-brand-black md:text-[48px] md:leading-[58px]">
              {t("Talk to Kora!")}
            </h2>

            <p className="mt-4 max-w-[560px] text-2xl font-normal leading-[30px] text-neutral-600 md:text-[28px] md:leading-[34px]">
              {t("Experience firsthand what you can offer your patients")}
            </p>

            <CtaButton className="mt-8" href="#demo" variant="whatsapp">
              {t("Try Kora")}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
