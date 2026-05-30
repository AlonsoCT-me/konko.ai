"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-neutral py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-12">
          {/* Card 1 */}
          <div className="relative flex h-[558px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[#ffff] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,#FFD255_0%,#EDE4D0_100%)] after:opacity-30 after:content-[''] after:[clip-path:polygon(0_35%,100%_72%,100%_100%,0_100%)] md:col-span-6 md:h-[660px]">
            <div className="relative z-10 p-9">
              <h3 className="card-title">
                {t("Convert more messages into scheduled appointments")}
              </h3>

              <p className="card-body mt-3">
                {t(
                  "Don't lose patients by not responding in time. Kora replies instantly on WhatsApp and automatically schedules appointments.",
                )}
              </p>
            </div>

            <div className="relative z-10 mx-6 mb-6 flex flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <div className="relative h-full w-full max-w-[400px]">
                <Image
                  src="/images/datepicker.png"
                  alt="Appointment calendar"
                  fill
                  className="object-contain object-center p-4"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex h-[558px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[linear-gradient(to_bottom,#ffff_0%,#ffff_48%,#ffff_48%,#F8EFCF_100%)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_42%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_100%)] after:content-[''] md:col-span-6 md:h-[660px]">
            <div className="relative z-10 p-9">
              <h3 className="card-title">
                {t("Build patient loyalty with the best care")}
              </h3>

              <p className="card-body mt-4">
                {t(
                  "Kora remembers every detail, sends personalized reminders, and follows up post-consultation automatically.",
                )}
              </p>
            </div>

            <div
              className="relative z-10 mx-6 mb-6 flex flex-1 items-center justify-center overflow-hidden rounded-[32px]"
              style={{ minHeight: 240 }}
            >
              <div className="align-start relative flex h-full w-full max-w-[290px]">
                <Image
                  src="/images/mensaje.png"
                  alt="Patient messages"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 200px, 200px"
                />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[linear-gradient(to_bottom,#ffff_0%,#ffff_55%,#F8EFCF_100%)] md:col-span-12 lg:min-h-[400px] lg:flex-row lg:bg-[linear-gradient(to_bottom,#ffff_0%,#ffff_58%,#F8EFCF_100%)]">
            <div className="relative z-10 p-9 pb-4 lg:flex lg:w-5/12 lg:flex-col lg:justify-start">
              <h3 className="card-title">
                {t("Free your team from operational chaos")}
              </h3>

              <p className="card-body mt-3">
                {t(
                  "Your staff stops answering repetitive WhatsApps and focuses on what matters most: the patient in front of them.",
                )}
              </p>
            </div>

            <div
              className="align-center relative z-10 flex flex-1 justify-center overflow-hidden lg:w-7/12"
              style={{ minHeight: 360 }}
            >
              <div className="relative flex h-full w-full max-w-[300px] items-start">
                <Image
                  src="/images/steps.png"
                  alt="Automated care flow"
                  width={300}
                  height={500}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex h-[558px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[#ffff] after:pointer-events-none after:absolute after:bottom-[0px] after:left-[100px ] after:right-[0] after:top-[30%] after:h-[135%] after:w-[120%] after:rounded-full after:border-[100px] after:border-[#F8EFCF] after:opacity-70 after:content-[''] md:col-span-8 md:h-[660px] md:after:bottom-[0] md:after:h-[135%] md:after:w-[120%] md:after:border-[100px]">
            <div className="relative z-10 p-9">
              <h3 className="card-title">
                {t("Gain full visibility and control")}
              </h3>

              <p className="card-body mt-3">
                {t(
                  "Measure real intent, consultation reasons, and channel performance to understand what generates appointments and what blocks conversions.",
                )}
              </p>
            </div>

            <div className="relative z-10 mx-6 mb-6 flex flex-1 justify-center overflow-hidden rounded-2xl">
              <div className="relative flex h-full w-full max-w-[400px] justify-center">
                <Image
                  src="/images/mensaje-wa.png"
                  alt="WhatsApp patient message"
                  fill
                  className="object-contain object-center p-4"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative flex h-[558px] flex-col overflow-hidden rounded-xl border border-brand-border bg-[#ffff] after:pointer-events-none after:absolute after:bottom-[-180px] after:left-1/2 after:h-[520px] after:w-[520px] after:-translate-x-1/2 after:rounded-full after:border-[72px] after:border-[#F8EFCF] after:opacity-70 after:content-[''] md:col-span-4 md:h-[660px] md:after:bottom-[-330px] md:after:h-[760px] md:after:w-[760px] md:after:border-[100px]">
            <div className="relative z-10 p-9">
              <h3 className="card-title">
                {t("Ready in days and improving every day")}
              </h3>

              <p className="card-body mt-4">
                {t(
                  "Our team will support you at every stage. Kora learns from each conversation and evolves with your clinic.",
                )}
              </p>
            </div>

            <div
              className="relative z-10 mx-6 mb-6 flex-1 overflow-hidden rounded-[32px]"
              style={{ minHeight: 240 }}
            >
              <div className="relative h-full w-full max-w-[320px]">
                <Image
                  src="/images/graphic.png"
                  alt="Growth analytics chart"
                  fill
                  className="object-contain object-bottom p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
