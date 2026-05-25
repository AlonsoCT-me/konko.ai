'use client';

import { useLocale } from '@/lib/locale-context';
import s from './styles/TrustedBySection.module.css';

const clinicKeys = ['eticaOral', 'labEchandi', 'urologiaAvanzada', 'teraMed', 'clinicaDentalPlus', 'medCare'] as const;

export function TrustedBySection() {
  const { t } = useLocale();
  const section = t.trustedBy;
  type ClinicEntry = { name: string; tagline?: string };
  const clinics: ClinicEntry[] = clinicKeys.map((key) => section.clinics[key]);

  return (
    <section className={s.trustedSection}>
      <div className={s.trustedContainer}>
        <p className={s.trustedLabel}>{section.label}</p>
        <div className={s.trustedTrack}>
          <div className={s.marquee}>
            {[...clinics, ...clinics].map((clinic, i) => (
              <div key={i} className={s.trustedItem}>
                <span className={s.itemName}>{clinic.name}</span>
                {clinic.tagline && (
                  <span className={s.itemTagline}>{clinic.tagline}</span>
                )}
              </div>
            ))}
          </div>
          <div className={s.fadeLeft} />
          <div className={s.fadeRight} />
        </div>
      </div>
    </section>
  );
}
