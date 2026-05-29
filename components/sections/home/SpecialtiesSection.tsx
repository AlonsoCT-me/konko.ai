'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

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

export function SpecialtiesSection() {
  const { t } = useTranslation();

  const specialties = [
    t('Dentistry'),
    t('Gastroenterology'),
    t('Urology'),
    t('Cardiology'),
    t('Pediatrics'),
    t('Dermatology'),
    t('Ophthalmology'),
    t('Orthopedics'),
  ];

  return (
    <section id="especialidades" className="overflow-hidden bg-brand-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-neutral-950 lg:text-5xl">
              {t('Designed for your specialty')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              {t("Kora adapts and understands the patients of each type of clinic. From dentistry to cardiology, Kora speaks your specialty's language.")}
            </p>
          </div>
          <div className="hidden text-right text-sm font-medium text-neutral-400 lg:block">
            {t('+127 specialties available')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {specialties.map((name, i) => (
            <div key={name} className="group relative h-48 cursor-pointer overflow-hidden rounded-2xl">
              <Image
                src={specialtyImages[i]}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.1),transparent)]" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
