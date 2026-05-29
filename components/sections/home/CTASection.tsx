'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/Logo';

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="demo" className="relative overflow-hidden bg-brand-cream py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-20">
          <svg viewBox="0 0 800 400" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx={400} cy={400} rx={80 + i * 55} ry={40 + i * 25} stroke="#C9A84C" strokeWidth="0.75" opacity={1 - i * 0.07} />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-gold">
          {t('Building the future')}
        </p>
        <h2 className="text-4xl font-bold leading-tight text-neutral-950 sm:text-5xl lg:text-7xl">
          <em className="not-italic text-brand-gold">{t('Building the future')}</em>
          <br />
          {t('of healthcare in Latam')}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
          {t("Join hundreds of clinics already transforming their patients' experience with Konko.")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="xl" variant="default" asChild>
            <Link href="#demo">
              {t('Schedule Demo')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="#kora">
              {t('Try for free')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <Logo className="mx-auto opacity-40" />
        </div>
      </div>
    </section>
  );
}
