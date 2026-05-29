'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export function AILatamSection() {
  const { t } = useTranslation();

  const stats = [
    { value: '127+', label: t('Medical specialties') },
    { value: '98%', label: t('Satisfaction rate') },
    { value: '2M+', label: t('Conversations processed') },
    { value: '30 sec', label: t('Response time') },
  ];

  return (
    <section className="overflow-hidden bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.25)] px-3 py-1.5 text-sm font-medium text-brand-gold [background-color:rgba(201,168,76,0.15)]">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-brand-gold" />
              {t('AI for clinics in Latam')}
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              {t('We process millions of conversations to understand clinical complexity')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 lg:text-lg">
              {t('Culturally sensitive cases and scale and volume of care. Kora understands the Latin American medical context like no other AI.')}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-neutral-900 p-5">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Latin America map - AI for healthcare"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 [background:linear-gradient(to_bottom_right,rgba(201,168,76,0.2),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-white">{t('Latam')}</p>
                  <p className="mt-2 text-lg text-brand-gold">{t('Our region')}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 max-w-[220px] rounded-2xl bg-white p-4 shadow-card-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full [background-color:rgba(201,168,76,0.1)]">
                  <svg className="h-5 w-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900">{t('Available in')}</p>
                  <p className="text-xs text-neutral-500">{t('15 countries in Latam')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
