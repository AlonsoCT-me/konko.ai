'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Carousel } from '@/components/shared/Carousel';

const specialties: { key: string; image: string; href?: string }[] = [
  { key: 'Internal Medicine', image: 'medicina-interna.png' },
  { key: 'Neonatology', image: 'neonatologia.png' },
  { key: 'Pediatrics', image: 'pediatria.png' },
  { key: 'Geriatrics', image: 'geriatria.png' },
  { key: 'Urology', image: 'urologia.png' },
  { key: 'Clinical Nutrition', image: 'nutricion-clinica.png' },
  { key: 'Hematology', image: 'hematologia.png' },
  { key: 'Cardiology', image: 'cardiologia.png' },
  { key: 'Pulmonology', image: 'neumologia.png' },
  { key: 'Gastroenterology', image: 'gastroenterologia.png' },
  { key: 'Nephrology', image: 'nefrologia.png' },
  { key: 'Endocrinology', image: 'endocrinologia.png' },
  { key: 'Rheumatology', image: 'reumatologia.png' },
  { key: 'Oncology', image: 'oncologia.png' },
  { key: 'General Medicine', image: 'medicina-general.png' },
  { key: 'Family Medicine', image: 'medicina-familiar.png' },
  { key: 'Gynecology', image: 'ginecologia.png' },
  { key: 'Obstetrics', image: 'obstetricia.png' },
  { key: 'Clinical Immunology', image: 'inmunologia-clinica.png' },
  { key: 'Allergology', image: 'alergologia.png' },
];

function SpecialtyCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href?: string;
}) {
  const content = (
    <article
      className={[
        'relative h-[190px] w-[190px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.04]',
        href ? 'cursor-pointer' : '',
      ].join(' ')}
    >
      <Image
        src={`/images/${image}`}
        alt={name}
        fill
        className="select-none object-cover"
        sizes="190px"
        draggable={false}
      />

      <span className="absolute bottom-4 left-4 text-sm font-medium text-brand-burgundy">
        {name}
      </span>
    </article>
  );

  if (href) return <Link href={href}>{content}</Link>;

  return content;
}

export function SpecialtiesSection() {
  const { t } = useTranslation();
  const [carouselsPaused, setCarouselsPaused] = useState(false);

  const firstRow = specialties.slice(0, 10);
  const secondRow = specialties.slice(10);

  return (
    <section
      id="especialidades"
      className="w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-14 max-w-[860px] lg:mb-20">
          <h2 className="text-[44px] font-semibold leading-[52px] text-brand-black md:text-[48px] md:leading-[58px]">
            {t('Designed for your')}{' '}
            <span className="gold-underline">{t('specialty')}</span>
          </h2>

          <p className="mt-4 max-w-[760px] text-[28px] font-normal leading-[34px] text-neutral-600">
            {t(
              'Kora adapts and understands the processes and complexities of each type of clinic',
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Carousel
          items={firstRow.map(({ key, image, href }) => (
            <SpecialtyCard key={key} name={t(key)} image={image} href={href} />
          ))}
          gap={13}
          speed={40}
          sharedPaused={carouselsPaused}
          onSharedPauseChange={setCarouselsPaused}
          pauseGroupOnHover
        />

        <Carousel
          items={secondRow.map(({ key, image, href }) => (
            <SpecialtyCard key={key} name={t(key)} image={image} href={href} />
          ))}
          gap={13}
          speed={40}
          sharedPaused={carouselsPaused}
          onSharedPauseChange={setCarouselsPaused}
          pauseGroupOnHover
        />
      </div>
    </section>
  );
}