'use client';

import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40 [background:linear-gradient(160deg,#F9F7F3_0%,#FFFFFF_60%)]">
      <div className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] opacity-20 [background:radial-gradient(circle_at_70%_30%,#C9A84C_0%,transparent_60%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#0A0A0A_1px,transparent_1px),linear-gradient(90deg,#0A0A0A_1px,transparent_1px)] [background-size:80px_80px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold-dark [background-color:rgba(201,168,76,0.1)]">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-brand-gold" />
            {t('Our story')}
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            <em className="not-italic bg-gradient-to-br from-brand-gold to-brand-gold-light bg-clip-text text-transparent">{t('Automate.')}</em>
            <br />
            <em className="not-italic bg-gradient-to-br from-brand-gold to-brand-gold-light bg-clip-text text-transparent">{t('Simplify.')}</em>
            <br />
            <span className="text-neutral-400">{t('Elevate human potential.')}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-500 lg:text-xl">
            {t('Konko.ai develops autonomous digital workers for medical clinics in Latin America. Our mission is to give back time to healthcare teams so they can focus on what matters most: the patient.')}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-100 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-card">
            <MapPin className="h-4 w-4 text-brand-gold" />
            {t('Founded in 2019 · Costa Rica')}
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 text-xs text-neutral-400" aria-hidden="true">
            <div className="h-12 w-px bg-gradient-to-b from-neutral-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
