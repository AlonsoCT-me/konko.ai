'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Search, Star } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutCulture.module.css';

const pillarIcons = [
  <Zap key="zap" className="w-4 h-4" />,
  <Search key="search" className="w-4 h-4" />,
  <Star key="star" className="w-4 h-4" />,
];

export function AboutCulture() {
  const { tAbout } = useLocale();
  const section = tAbout.culture;

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.twoCol}>
          <div>
            <div className={s.eyebrow}>{section.eyebrow}</div>
            <h2 className={s.heading}>{section.heading}</h2>
            <p className={s.description}>{section.description}</p>
            <Link href="/careers" className={s.cta}>
              {section.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className={s.pillars}>
            {section.pillars.map((pillar, i) => (
              <div key={i} className={s.pillar}>
                <div className={s.pillarHeader}>
                  <div className={s.pillarIcon}>
                    {pillarIcons[i]}
                  </div>
                  <h3 className={s.pillarTitle}>{pillar.title}</h3>
                </div>
                <p className={s.pillarDesc}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
