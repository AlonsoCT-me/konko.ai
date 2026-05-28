'use client';

import { useLocale } from '@/lib/locale-context';
import s from './styles/MetaPartnerSection.module.css';

export function MetaPartnerSection() {
  const { t } = useLocale();
  const section = t.metaPartner;
  const checkItems = [section.checkItems.api, section.checkItems.uptime, section.checkItems.noBan];

  return (
    <section className={s.metaSection}>
      <div className={s.metaContainer}>
        <div className={s.metaGrid}>
          <div className={s.badgeWrap}>
            <div className={s.badgeCard}>
              <svg viewBox="0 0 80 24" className="h-8 w-auto" aria-label={section.logoText}>
                <text x="0" y="20" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#0082FB">
                  {section.logoText}
                </text>
              </svg>
              <p className={s.badgeTagline}>{section.badgeTagline}</p>
            </div>
            <div>
              <div className={s.eyebrow}>{section.eyebrow}</div>
              <h2 className={s.metaHeading}>{section.heading}</h2>
            </div>
          </div>

          <div>
            <p className={s.metaDescription}>{section.description}</p>
            <div className={s.checkList}>
              {checkItems.map((label) => (
                <div key={label} className={s.checkItem}>
                  <div className={s.checkIcon}>
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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
