'use client';

import { Shield, Lock, CircleCheck as CheckCircle } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import s from './styles/SecuritySection.module.css';

const certIcons = [
  <svg key="soc2" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3l10.5 5.25v9.5C26.5 23.5 21.75 28 16 29 10.25 28 5.5 23.5 5.5 17.75v-9.5L16 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l3.5 3.5 6.5-6.5" />
  </svg>,
  <svg key="gdpr" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <rect x="6" y="10" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 10V7a6 6 0 0112 0v3" />
    <circle cx="16" cy="18" r="2" />
  </svg>,
  <svg key="iso" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="16" cy="16" r="11" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 9v7l4 3" />
  </svg>,
  <svg key="liveness" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="16" cy="12" r="5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" />
  </svg>,
  <svg key="hl7" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h6M22 16h6M16 4v6M16 22v6" />
    <circle cx="16" cy="16" r="5" />
  </svg>,
  <svg key="fhir" className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h16M8 12h10M8 18h12M8 24h8" />
  </svg>,
];

const bottomIcons = [
  <Lock key="enc" className="w-5 h-5" />,
  <Shield key="ret" className="w-5 h-5" />,
  <CheckCircle key="aud" className="w-5 h-5" />,
];

const certKeys = ['soc2', 'gdpr', 'iso', 'liveness', 'hl7', 'fhir'] as const;
const bottomKeys = ['encryption', 'noRetention', 'audits'] as const;

export function SecuritySection() {
  const { t } = useLocale();
  const section = t.security;

  return (
    <section id="seguridad" className={s.secSection}>
      <div className={s.secContainer}>
        <div className={s.secHeader}>
          <div className={s.iconWrap}>
            <Shield className="w-7 h-7 text-brand-gold" />
          </div>
          <h2 className={s.secHeading}>{section.heading}</h2>
          <p className={s.secDescription}>{section.description}</p>
        </div>

        <div className={s.certGrid}>
          {certKeys.map((key, i) => (
            <div key={key} className={s.certCard}>
              <div className={s.certIconWrap}>{certIcons[i]}</div>
              <h3 className={s.certName}>{section.certifications[key].name}</h3>
              <p className={s.certDesc}>{section.certifications[key].description}</p>
            </div>
          ))}
        </div>

        <div className={s.bottomPanel}>
          <div className={s.bottomPanelGrid}>
            {bottomKeys.map((key, i) => (
              <div key={key} className={s.bottomPanelItem}>
                <div className={s.bottomIconWrap}>{bottomIcons[i]}</div>
                <div>
                  <h4 className={s.bottomTitle}>{section.bottomItems[key].title}</h4>
                  <p className={s.bottomDesc}>{section.bottomItems[key].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
