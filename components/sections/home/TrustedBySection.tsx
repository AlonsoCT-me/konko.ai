'use client';

import { useTranslation } from 'react-i18next';

const clinics = [
  { name: 'ÉticaOral', tagline: 'Dentistry with responsibility' },
  { name: 'Lab Echandi' },
  { name: 'Urología Avanzada', tagline: 'Dr. Mario González' },
  { name: 'TeraMed' },
  { name: 'Clínica Dental Plus' },
  { name: 'MedCare' },
];

export function TrustedBySection() {
  const { t } = useTranslation();

  const doubled = [...clinics, ...clinics];

  return (
    <section className="overflow-hidden border-y border-neutral-100 bg-[#F8F9FB] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium text-neutral-400">
          {t('Hundreds of clinics already trust us')}
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee items-center gap-16">
          {doubled.map((clinic, i) => (
            <div key={i} className="flex flex-shrink-0 flex-col items-center gap-0.5">
              <span className="whitespace-nowrap text-base font-bold text-neutral-700">{clinic.name}</span>
              {clinic.tagline && (
                <span className="whitespace-nowrap text-2xs text-neutral-400">{t(clinic.tagline as Parameters<typeof t>[0])}</span>
              )}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-20 bg-gradient-to-r from-[#F8F9FB] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-20 bg-gradient-to-l from-[#F8F9FB] to-transparent" />
      </div>
    </section>
  );
}
