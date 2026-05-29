"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function MeetKoraSection() {
  const { t } = useTranslation();

  return (
    <section id="kora" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold leading-tight text-neutral-950 lg:text-5xl">
              {t("Meet")}{" "}
              <span className="gold-underline">Kora</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-500">
              {t("The new AI assistant that will help you transform your clinic with technology from the best in the world.")}
            </p>
            <Link href="#demo" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-brand-gold">
              {t("Try Kora")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex justify-end">
            <div
              className="relative w-full overflow-hidden rounded-3xl [aspect-ratio:4/4.2] [background-color:#ede6d6]"
              style={{ maxWidth: 540 }}
            >
              <Image
                src="/images/kora.jpg"
                alt="Kora — Asistente IA de Konko"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute bottom-5 left-5 flex max-w-[260px] items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.6)] px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] [background:rgba(255,255,255,0.55)] [backdrop-filter:blur(12px)]">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full [background-color:#25d366]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.823L.057 23.428a.75.75 0 00.921.921l5.605-1.453A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 01-4.953-1.359l-.355-.212-3.676.953.977-3.574-.232-.368A9.691 9.691 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t("Hi, I'm Kora!")}</p>
                  <p className="text-xs text-neutral-500">{t("How can I help you today?")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
