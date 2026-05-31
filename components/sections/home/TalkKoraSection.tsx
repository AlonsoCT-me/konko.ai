"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

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

            <Link
              href="#demo"
              className="mt-8 inline-flex h-16 w-[234px] items-center justify-between gap-4 rounded-full bg-brand-black py-1 pl-7 pr-1 text-brand-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            >
              <span className="flex items-center gap-2 before:block before:h-6 before:w-6 before:bg-[url('/images/whatsapp.svg')] before:bg-contain before:bg-center before:bg-no-repeat">
                {t("Try Kora")}
              </span>

              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-white text-brand-black">
                <ArrowRight className="size-6" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
