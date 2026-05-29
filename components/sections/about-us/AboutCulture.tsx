'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Search, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pillarIcons = [
  <Zap key="zap" className="h-4 w-4" />,
  <Search key="search" className="h-4 w-4" />,
  <Star key="star" className="h-4 w-4" />,
];

export function AboutCulture() {
  const { t } = useTranslation();

  const pillars = [
    { title: t('High performance'), description: t('Rewards are based on performance. Every team member has autonomy and accountability for their impact.') },
    { title: t('Systemic resolution'), description: t("We don't do routine work just for the sake of it. We question every process and look for the smartest solution.") },
    { title: t('Elevated standards'), description: t("Work that doesn't meet our standards doesn't go out into the world. Quality is non-negotiable.") },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold-dark [background-color:rgba(201,168,76,0.1)]">
              {t('Culture')}
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-950 lg:text-4xl">
              {t('Work with us')}
            </h2>
            <p className="mb-10 text-base leading-relaxed text-neutral-500 lg:text-lg">
              {t("We look for creative and intelligent minds, passionate about building solutions that users truly value. If you're motivated by high-impact work and don't settle for the ordinary, you're one of us.")}
            </p>
            <Link href="/careers" className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800">
              {t('See open positions')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6 transition-all duration-300 hover:border-[rgba(201,168,76,0.2)] hover:bg-brand-off-white"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-brand-gold [background-color:rgba(201,168,76,0.1)]">
                    {pillarIcons[i]}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900">{pillar.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
