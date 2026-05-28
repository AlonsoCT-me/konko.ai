'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import s from './styles/HeroSection.module.css';

const avatarImages = [
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
];

export function HeroSection() {
  const { t } = useLocale();
  const hero = t.hero;

  return (
    <section className={s.heroSection}>
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.bgDecorInner}>
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 18 }).map((_, i) => (
              <circle key={i} cx={300 + i * 3} cy={300} r={40 + i * 18} stroke="#C9A84C" strokeWidth="0.5" opacity={1 - i * 0.05} />
            ))}
          </svg>
        </div>
      </div>

      <div className={s.heroContainer}>
        <div className={s.heroGrid}>
          <div className={s.heroContent}>
            <div className={s.heroBadge}>
              <span className={s.badgeDot} />
              {hero.badge}
            </div>

            <h1 className={s.heroHeading}>
              {hero.heading.line1}
              <br />
              {hero.heading.line2}
              <br />
              <span className={s.headingMuted}>{hero.heading.line3}</span>
              <br />
              <span className={s.headingMuted}>{hero.heading.line4}</span>
            </h1>

            <p className={s.heroDescription}>{hero.description}</p>

            <div className={s.ctas}>
              <Button size="xl" variant="default" asChild>
                <Link href="#demo">
                  {hero.cta.demo}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="#kora">
                  {hero.cta.try}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className={s.socialProof}>
              <div className={s.avatarStack}>
                {avatarImages.map((src, i) => (
                  <div key={i} className={s.avatar}>
                    <Image src={src} alt="Doctor" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className={s.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={s.starIcon} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={s.reviewCount}>{hero.socialProof}</p>
              </div>
            </div>
          </div>

          <div className={s.imageCol}>
            <div className={s.imageWrap}>
              <div className={s.imageInner}>
                <Image
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kora - Konko AI Assistant"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={s.imageOverlay} />
              </div>

              <div className={s.floatingCardLeft}>
                <div className={s.floatingCardLeftIcon}>
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className={s.floatingCardLeftTitle}>{hero.floatingCard.left.title}</p>
                  <p className={s.floatingCardLeftSub}>{hero.floatingCard.left.subtitle}</p>
                </div>
              </div>

              <div className={s.floatingCardRight}>
                <p className={s.floatingCardRightLabel}>{hero.floatingCard.right.title}</p>
                <p className={s.floatingCardRightValue}>{hero.floatingCard.right.subtitle}</p>
                <div className={s.barsWrap}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={s.bar} style={{ opacity: 0.4 + i * 0.15 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
