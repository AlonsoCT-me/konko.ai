'use client';

import Image from 'next/image';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AboutMission() {
  const { t } = useTranslation();

  const stats = [
    { value: '2M+', label: t('Conversations processed') },
    { value: '15', label: t('Countries in Latam') },
    { value: '127+', label: t('Medical specialties covered') },
    { value: '2019', label: t('Founded') },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold-dark [background-color:rgba(201,168,76,0.1)]">
              {t('Our mission')}
            </div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-neutral-950 lg:text-4xl">
              <span className="bg-gradient-to-br from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
                {t("We don't digitalize chaos. We solve it.")}
              </span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-neutral-600 lg:text-lg">
              <p>{t('Traditional medical software only turned paper bureaucracy into digital bureaucracy — without solving the root problems. You fill out forms on a screen instead of on paper. The process remains just as inefficient.')}</p>
              <p>{t('At Konko.ai we build AI that amplifies clinical staff capabilities instead of replacing them. Every tool we create is designed to eliminate systemic friction and give back time to the people who save lives.')}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-neutral-100 bg-brand-off-white p-6">
                  <div className="text-3xl font-bold tracking-tight text-neutral-950 lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[520px]">
              <div className="absolute right-0 top-0 h-[360px] w-4/5 overflow-hidden rounded-3xl shadow-card-xl">
                <Image
                  src="https://images.pexels.com/photos/5207099/pexels-photo-5207099.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Konko team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[260px] w-3/5 overflow-hidden rounded-3xl border-4 border-white shadow-card-lg">
                <Image
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Konko clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>

              <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card-lg">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-brand-gold [background-color:rgba(201,168,76,0.1)]">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900">SOC II</p>
                  <p className="mt-0.5 text-2xs text-neutral-400">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
