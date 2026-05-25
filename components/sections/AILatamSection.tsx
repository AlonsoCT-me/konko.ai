'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AILatamSection.module.css';

export function AILatamSection() {
  const { t } = useLocale();
  const section = t.aiLatam;
  const stats = [section.stats.specialties, section.stats.satisfaction, section.stats.conversations, section.stats.responseTime];

  return (
    <section className={s.aiSection}>
      <div className={s.aiContainer}>
        <div className={s.aiGrid}>
          <div>
            <div className={s.aiBadge}>
              <span className={s.badgeDot} />
              {section.badge}
            </div>
            <h2 className={s.aiHeading}>{section.heading}</h2>
            <p className={s.aiDescription}>{section.description}</p>
            <div className={s.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={s.statCard}>
                  <div className={s.statValue}>{stat.value}</div>
                  <div className={s.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.imageCol}>
            <div className={s.imageWrap}>
              <Image
                src="https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Latin America map - AI for healthcare"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={s.imageOverlay} />
              <div className={s.imageCopy}>
                <div className="text-center">
                  <p className={s.imageCopyTitle}>{section.imageSection.label}</p>
                  <p className={s.imageCopySubtitle}>{section.imageSection.sublabel}</p>
                </div>
              </div>
            </div>

            <div className={s.locationCard}>
              <div className={s.locationCardInner}>
                <div className={s.locationIcon}>
                  <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className={s.locationTitle}>{section.locationCard.available}</p>
                  <p className={s.locationSub}>{section.locationCard.countries}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
