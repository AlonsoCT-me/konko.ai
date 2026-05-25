'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/locale-context';
import s from './styles/SpecialtiesSection.module.css';

const specialtyImages = [
  'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const specialtyKeys = ['dentistry', 'gastroenterology', 'urology', 'cardiology', 'pediatrics', 'dermatology', 'ophthalmology', 'orthopedics'] as const;

export function SpecialtiesSection() {
  const { t } = useLocale();
  const section = t.specialties;

  return (
    <section id="especialidades" className={s.specSection}>
      <div className={s.specContainer}>
        <div className={s.specHeader}>
          <div>
            <h2 className={s.specHeading}>{section.heading}</h2>
            <p className={s.specDescription}>{section.description}</p>
          </div>
          <div className={s.count}>{section.countBadge}</div>
        </div>

        <div className={s.specGrid}>
          {specialtyKeys.map((key, i) => (
            <div key={key} className={`${s.specCard} group`}>
              <Image
                src={specialtyImages[i]}
                alt={section.list[key]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className={s.cardOverlay} />
              <div className={s.cardLabel}>
                <p className={s.cardLabelText}>{section.list[key]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
