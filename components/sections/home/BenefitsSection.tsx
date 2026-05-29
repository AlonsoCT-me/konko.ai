"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-neutral py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Card 1: Convierte */}
          <div className="relative flex h-[558px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[#F5F5F5] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,#FFD255_0%,#EDE4D0_100%)] after:opacity-30 after:content-[''] after:[clip-path:polygon(0_35%,100%_72%,100%_100%,0_100%)] md:h-[660px]">
            <div className="relative z-10 p-8">
              <h3 className="card-title">
                {t("Convierte más mensajes en citas programadas")}
              </h3>

              <p className="mt-3 card-body">
                {t(
                  "No pierdas más pacientes por no responder a tiempo. Kora contesta al instante, 24/7 y hace seguimiento hasta lograr una cita.",
                )}
              </p>
            </div>

            <div className="relative z-10 mx-6 mb-6 flex-1 overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/images/datepicker.png"
                alt="Calendario de citas"
                fill
                className="object-contain object-center p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Card 2: Fideliza */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-brand-border bg-[linear-gradient(to_bottom,#F5F5F5_0%,#F5F5F5_48%,#F8EFCF_48%,#F8EFCF_100%)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_42%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_100%)] after:content-['']">
            <div className="relative z-10 p-8 pb-6">
              <h3 className="card-title">
                {t("Fideliza a tus pacientes con la mejor atención")}
              </h3>

              <p className="mt-4 card-body">
                {t(
                  "Brinda una experiencia memorable a cada paciente con una respuesta oportuna, consistente, humana y en su idioma.",
                )}
              </p>
            </div>

            <div
              className="relative z-10 mx-6 mb-6 flex-1 overflow-hidden rounded-[32px] bg-[#F8F6F1] shadow-sm"
              style={{ minHeight: 240 }}
            >
              <Image
                src="/images/mensaje.png"
                alt="Mensajes con pacientes"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Card 3: Libera — full width */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-neutral-50 md:col-span-2 lg:flex-row">
            <div className="flex flex-col justify-center p-8 lg:w-5/12 lg:p-12">
              <h3 className="card-title">
                {t("Libera a tu equipo del caos operacional")}
              </h3>
              <p className="mt-3 card-body">
                {t(
                  "Más tiempo para lo que en verdad importa. Kora resuelve lo repetitivo, tu equipo se concentra en los casos complejos.",
                )}
              </p>
            </div>
            <div
              className={cn(
                "relative flex-1 overflow-hidden",
                "mx-6 mb-6 rounded-2xl lg:mx-0 lg:mb-0 lg:rounded-none lg:rounded-r-3xl",
              )}
              style={{ minHeight: 280 }}
            >
              <Image
                src="/images/steps.png"
                alt="Flujo de atención automatizado"
                fill
                className="object-contain object-center p-6"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
