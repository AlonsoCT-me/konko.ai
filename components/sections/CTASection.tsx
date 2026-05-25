'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/Logo';
import { useLocale } from '@/lib/locale-context';
import s from './styles/CTASection.module.css';

export function CTASection() {
  const { t } = useLocale();
  const section = t.cta;

  return (
    <section id="demo" className={s.ctaSection}>
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.bgDecorInner}>
          <svg viewBox="0 0 800 400" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx={400} cy={400} rx={80 + i * 55} ry={40 + i * 25} stroke="#C9A84C" strokeWidth="0.75" opacity={1 - i * 0.07} />
            ))}
          </svg>
        </div>
      </div>

      <div className={s.ctaContainer}>
        <p className={s.eyebrow}>{section.eyebrow}</p>
        <h2 className={s.ctaHeading}>
          <em className={s.headingGold}>{section.heading.line1}</em>
          <br />
          {section.heading.line2}
        </h2>
        <p className={s.ctaDescription}>{section.description}</p>

        <div className={s.ctas}>
          <Button size="xl" variant="default" asChild>
            <Link href="#demo">
              {section.buttons.demo}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="#kora">
              {section.buttons.free}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className={s.logoWrap}>
          <Logo className="mx-auto opacity-40" />
        </div>
      </div>
    </section>
  );
}
