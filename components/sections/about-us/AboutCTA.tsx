'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

export function AboutCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-brand-off-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-30">
          <svg viewBox="0 0 800 400" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <ellipse
                key={i}
                cx={400} cy={400}
                rx={80 + i * 60} ry={40 + i * 28}
                stroke="#C9A84C" strokeWidth="0.75"
                opacity={1 - i * 0.08}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
          {t("Ready to transform your clinic?")}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-neutral-500 lg:text-lg">
          {t("Join hundreds of clinics already using Konko to automate their operations and improve their patients' experience.")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="xl" variant="default" asChild>
            <Link href="#demo">
              {t('Schedule Demo')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="/">
              {t('Learn about the product')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
