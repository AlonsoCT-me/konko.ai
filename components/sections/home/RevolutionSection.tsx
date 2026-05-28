'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/locale-context';
import s from './styles/RevolutionSection.module.css';

const testimonialImages = [
  'https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=200',
];

export function RevolutionSection() {
  const { t } = useLocale();
  const section = t.revolution;

  return (
    <section className={s.revSection}>
      <div className={s.revContainer}>
        <div className={s.revHeader}>
          <h2 className={s.revHeading}>{section.heading}</h2>
          <p className={s.subheading}>{section.subheading}</p>
        </div>

        <div className={s.revGrid}>
          {section.testimonials.map((testimonial, i) => (
            <div key={i} className={s.revCard}>
              <div className={s.cardImage}>
                <Image
                  src={testimonialImages[i]}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={s.cardImageOverlay} />
              </div>
              <div className={s.cardBody}>
                <svg className={s.quoteIcon} fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.172C7.582 11.838 9.09 10.172 11 9.5L10 8zm16 0c-3.314 0-6 2.686-6 6v10h10V14h-6.828C23.582 11.838 25.09 10.172 27 9.5L26 8z" />
                </svg>
                <p className={s.quote}>{testimonial.quote}</p>
                <div className={s.authorRow}>
                  <div className={s.authorAvatar}>
                    <Image src={testimonialImages[i]} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className={s.authorName}>{testimonial.name}</p>
                    <p className={s.authorRole}>{testimonial.role} · {testimonial.clinic}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
