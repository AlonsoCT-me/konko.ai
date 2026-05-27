'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutCTA.module.css';

export function AboutCTA() {
  const { tAbout } = useLocale();
  const section = tAbout.cta;

  return (
    <section className={s.section}>
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.bgDecorInner}>
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

      <div className={s.container}>
        <h2 className={s.heading}>{section.heading}</h2>
        <p className={s.description}>{section.description}</p>
        <div className={s.ctas}>
          <Button size="xl" variant="default" asChild>
            <Link href="#demo">
              {section.primaryBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="/">
              {section.secondaryBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
