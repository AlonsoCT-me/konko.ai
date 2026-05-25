'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/locale-context';
import s from './styles/FounderSection.module.css';

export function FounderSection() {
  const { t } = useLocale();
  const section = t.founder;

  return (
    <section id="nosotros" className={s.founderSection}>
      <div className={s.founderContainer}>
        <div className={s.founderGrid}>
          <div>
            <div className={s.eyebrowWrap}>{section.eyebrow}</div>
            <h2 className={s.founderHeading}>{section.heading}</h2>
            <div className={s.bodyText}>
              <p>{section.body1}</p>
              <p>{section.body2}</p>
            </div>

            <div className={s.authorRow}>
              <div className={s.authorAvatar}>
                <Image
                  src="https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=120"
                  alt={section.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className={s.authorName}>{section.author.name}</p>
                <p className={s.authorRole}>{section.author.role}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={s.imageGrid}>
              <div className={s.imageLeft}>
                <Image
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={section.imageAlts.team}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={s.imageRight}>
                <Image
                  src="https://images.pexels.com/photos/5207099/pexels-photo-5207099.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={section.imageAlts.working}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className={s.floatingCard}>
              <p className={s.floatingYear}>{section.floatingCard.year}</p>
              <p className={s.floatingLabel}>{section.floatingCard.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
