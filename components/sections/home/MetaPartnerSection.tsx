'use client';

import { useTranslation } from 'react-i18next';

export function MetaPartnerSection() {
  const { t } = useTranslation();

  const checkItems = [
    t('Official API'),
    t('99.9% Uptime'),
    t('No number bans'),
  ];

  return (
    <section className="border-y border-neutral-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 rounded-2xl border border-neutral-100 bg-white p-5 shadow-card">
              <svg viewBox="0 0 80 24" className="h-8 w-auto" aria-label="Meta">
                <text x="0" y="20" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#0082FB">
                  Meta
                </text>
              </svg>
              <p className="mt-1 text-xs font-medium text-neutral-500">{t('Business Partner')}</p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                {t('Official Partner')}
              </div>
              <h2 className="text-2xl font-bold leading-tight text-neutral-950 lg:text-3xl">
                {t('We are official Meta partners')}
              </h2>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-neutral-600">
              {t('We use the official WhatsApp Business API infrastructure to guarantee speed, stability, and a reliable experience for every patient.')}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {checkItems.map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
