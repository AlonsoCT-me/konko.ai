'use client';

import { MapPin } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutHero.module.css';

export function AboutHero() {
  const { tAbout } = useLocale();
  const hero = tAbout.hero;

  return (
    <section className={s.section}>
      <div className={s.bgOrb} aria-hidden="true" />
      <div className={s.bgLines} aria-hidden="true" />

      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.eyebrow}>
            <span className={s.eyebrowDot} />
            {hero.eyebrow}
          </div>

          <h1 className={s.heading}>
            <em className={s.headingGold}>{hero.heading.line1}</em>
            <br />
            <em className={s.headingGold}>{hero.heading.line2}</em>
            <br />
            <span className={s.headingMuted}>{hero.heading.line3}</span>
          </h1>

          <p className={s.description}>{hero.description}</p>

          <div className={s.badge}>
            <MapPin className={s.badgeIcon} />
            {hero.badge}
          </div>

          <div className={s.scrollIndicator} aria-hidden="true">
            <div className={s.scrollLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
