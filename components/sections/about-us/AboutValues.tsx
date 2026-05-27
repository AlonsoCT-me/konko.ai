'use client';

import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutValues.module.css';

export function AboutValues() {
  const { tAbout } = useLocale();
  const section = tAbout.values;

  return (
    <section className={s.section}>
      <div className={s.bgDecor} aria-hidden="true" />
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.eyebrow}>{section.eyebrow}</div>
          <h2 className={s.heading}>{section.heading}</h2>
        </div>

        <div className={s.valuesGrid}>
          {section.list.map((value, i) => (
            <div key={i} className={s.card}>
              <div className={s.cardNumber}>0{i + 1}</div>
              <h3 className={s.cardTitle}>{value.title}</h3>
              <p className={s.cardDesc}>{value.description}</p>
              <div className={s.accent} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
