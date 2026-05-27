'use client';

import Image from 'next/image';
import { Shield } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutMission.module.css';

export function AboutMission() {
  const { tAbout } = useLocale();
  const section = tAbout.mission;

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.twoCol}>
          <div>
            <div className={s.eyebrow}>{section.eyebrow}</div>
            <h2 className={s.heading}>{section.heading}</h2>
            <div className={s.body}>
              <p>{section.body1}</p>
              <p>{section.body2}</p>
            </div>

            <div className={s.statsGrid}>
              {section.stats.map((stat, i) => (
                <div key={i} className={s.statCard}>
                  <div className={s.statValue}>
                    {stat.value}
                  </div>
                  <div className={s.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.imageCol}>
            <div className={s.imageStack}>
              <div className={s.imagePrimary}>
                <Image
                  src="https://images.pexels.com/photos/5207099/pexels-photo-5207099.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Konko team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className={s.imageSecondary}>
                <Image
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Konko clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>

              <div className={s.certBadge}>
                <div className={s.certIcon}>
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className={s.certText}>SOC II</p>
                  <p className={s.certSub}>Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
