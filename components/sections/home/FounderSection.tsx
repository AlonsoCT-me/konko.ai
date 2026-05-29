'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section id="nosotros" className="bg-brand-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold-dark [background-color:rgba(201,168,76,0.1)]">
              {t('Made with love')}
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-950 lg:text-4xl">
              {t('Made with love')}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600">
              <p>{t("At Konko.ai we won't sacrifice your nights and entire weekends trying to make your clinic run better.")}</p>
              <p>{t('Our mission is to give back time and simplicity to every clinic, so you can focus on what matters most.')}</p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[rgba(201,168,76,0.2)]">
                <Image
                  src="https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=120"
                  alt="Juan Marc Guglielmi"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Juan Marc Guglielmi</p>
                <p className="text-xs text-neutral-500">{t('Co-founder & CEO, Konko.ai')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-3xl">
                <Image
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t('Konko team')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative mt-8 h-64 overflow-hidden rounded-3xl">
                <Image
                  src="https://images.pexels.com/photos/5207099/pexels-photo-5207099.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t('Konko team working')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 w-56 -translate-x-1/2 rounded-2xl bg-white p-4 text-center shadow-card-lg">
              <p className="text-3xl font-bold text-neutral-950">2019</p>
              <p className="mt-1 text-xs text-neutral-500">{t('Founded in Costa Rica')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
