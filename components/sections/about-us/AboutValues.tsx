'use client';

import { useTranslation } from 'react-i18next';

export function AboutValues() {
  const { t } = useTranslation();

  const values = [
    { title: t('Intelligence with purpose'), description: t('We build AI that solves real problems, not technology for the sake of innovation. Every feature exists to reduce friction in the healthcare system.') },
    { title: t('Extraordinary standards'), description: t('We measure success by real impact on patients and clinics. Mediocre work has no place here — we aspire to excellence in everything we build.') },
    { title: t('Creative and courageous minds'), description: t('We look for people who think differently, question assumptions, and have the courage to propose solutions no one else would consider.') },
    { title: t('Systemic impact'), description: t('No patches. Structural solutions. We think about root problems and build tools that create lasting change in how healthcare works in Latam.') },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,168,76,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold [background-color:rgba(201,168,76,0.12)]">
            {t('What drives us')}
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
            {t('Our values')}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 transition-all duration-300 [background:rgba(255,255,255,0.03)] hover:[background:rgba(255,255,255,0.06)] hover:border-[rgba(201,168,76,0.25)] lg:p-8"
            >
              <div className="mb-6 select-none text-5xl font-bold leading-none [color:rgba(255,255,255,0.08)]">
                0{i + 1}
              </div>
              <h3 className="mb-3 text-base font-semibold leading-snug text-white">{value.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">{value.description}</p>
              <div
                className="absolute bottom-0 left-6 right-6 h-px [background:linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
