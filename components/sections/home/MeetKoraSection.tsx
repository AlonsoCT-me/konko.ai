"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import s from "./styles/MeetKoraSection.module.css";

export function MeetKoraSection() {
  const { t } = useLocale();
  const section = t.meetKora;

  return (
    <section id="kora" className={s.meetSection}>
      <div className={s.meetContainer}>
        <div className={s.meetGrid}>
          {/* Columna izquierda — texto */}
          <div className={s.meetContent}>
            <h2 className={s.meetHeading}>
              {section.heading.pre}{" "}
              <span className="gold-underline">
                {section.heading.highlight}
              </span>
            </h2>
            <p className={s.meetDescription}>{section.description}</p>
            <Link href="#demo" className={s.cta}>
              {section.cta}
              <ArrowRight className={s.ctaIcon} />
            </Link>
          </div>

          {/* Columna derecha — imagen */}
          <div className={s.imageCol}>
            <div className={s.imageWrap}>
              <Image
                src="/images/kora.jpg"
                alt="Kora — Asistente IA de Konko"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating WhatsApp card */}
              <div className={s.floatingCard}>
                {/* Icono WhatsApp */}
                <div className={s.waIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.823L.057 23.428a.75.75 0 00.921.921l5.605-1.453A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 01-4.953-1.359l-.355-.212-3.676.953.977-3.574-.232-.368A9.691 9.691 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </div>
                <div>
                  <p className={s.cardTitle}>{section.floatingCard.title}</p>
                  <p className={s.cardSub}>{section.floatingCard.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
