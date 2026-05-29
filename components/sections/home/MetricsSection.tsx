'use client';

import { useTranslation } from 'react-i18next';

export function MetricsSection() {
  const { t } = useTranslation();

  const stats = [
    { value: '120,000+', label: t('Consultations handled') },
    { value: '30 sec', label: t('Average response time') },
    { value: '99.9%', label: t('Reported satisfaction') },
    { value: '9/10', label: t('Patient NPS') },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-6xl font-bold leading-none text-neutral-950 lg:text-8xl">
              2,000,000
            </p>
            <p className="mt-3 text-lg text-neutral-500">
              {t('messages processed per month across the entire Konko platform')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="mb-4 h-px bg-neutral-200" />
                <p className="text-3xl font-bold text-neutral-950 lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 h-2 overflow-hidden rounded-3xl bg-neutral-100">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
            style={{ width: '78%' }}
          />
        </div>
      </div>
    </section>
  );
}
