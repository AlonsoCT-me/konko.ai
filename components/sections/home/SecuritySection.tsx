'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const securityItems = [
  {
    title: 'SOC 2',
    description: 'Security and availability audit',
    image: 'soc-2.svg',
  },
  {
    title: 'GDPR',
    description: 'European data protection compliance',
    image: 'gdpr.svg',
  },
  {
    title: 'ISO 27001',
    description: 'Information security management',
    image: 'iso27.svg',
  },
  {
    title: 'LFPDPPP',
    description: 'Mexican data protection law compliance',
    image: 'lfpdppp.svg',
  },
  {
    title: 'HL7 FHIR',
    description: 'Health interoperability standards',
    image: 'hl7.svg',
  },
  {
    title: 'Encrypted',
    description: 'End-to-end encryption. AES-256 at rest. TLS 1.2+ in transit',
    image: 'cifrado.svg',
  },
];

export function SecuritySection() {
  const { t } = useTranslation();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="seguridad" data-navbar-theme="dark" className="w-full overflow-hidden">
      <div className="relative w-full overflow-hidden bg-brand-black">
        <div className="absolute inset-0 bg-[url('/images/bg-gold-pattern.png')] bg-cover bg-center brightness-[0.30] contrast-125 grayscale" />
        <div className="absolute inset-0 bg-brand-black/40" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 md:py-24 lg:px-20 lg:py-28">
          <div className="mb-10 max-w-[760px] md:mb-12">
            <h2 className="text-[32px] font-semibold leading-[39px] text-brand-gold md:text-[48px] md:leading-[58px]">
              {t('Security in every conversation')}
            </h2>

            <p className="mt-5 max-w-[700px] text-[20px] font-normal leading-6 text-brand-white md:text-[28px] md:leading-[34px]">
              {t(
                "Your patients' information is protected with the highest security standards",
              )}
            </p>
          </div>

          <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[20px] border border-neutral-700">
            <div className="grid grid-cols-2 md:grid-cols-3">
              {securityItems.map((item, index) => {
                const isFlipped = flippedIndex === index;

                return (
                  <article
                    key={item.title}
                    className="h-[152px] border-b border-r border-neutral-700 text-center md:h-[285px] md:text-left [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-b-0 [&:nth-child(n+5)]:border-b-0"
                  >
                    {/* Mobile flip card */}
                    <button
                      type="button"
                      className="block h-full w-full [perspective:1000px] md:hidden"
                      onClick={() =>
                        setFlippedIndex(isFlipped ? null : index)
                      }
                      aria-label={t(item.title)}
                    >
                      <div
                        className={[
                          'relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]',
                          isFlipped ? '[transform:rotateY(-180deg)]' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 [backface-visibility:hidden]">
                          <Image
                            src={`/images/${item.image}`}
                            alt={t(item.title)}
                            width={80}
                            height={80}
                            className="mb-3 h-20 w-20 object-contain"
                          />

                          <h3 className="text-base font-semibold leading-[19px] text-brand-white">
                            {t(item.title)}
                          </h3>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center px-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <p className="text-sm font-normal leading-5 text-neutral-300">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* Desktop card */}
                    <div className="hidden h-full flex-col items-start justify-start px-8 py-12 transition-colors duration-300 hover:bg-white/[0.02] md:flex">
                      <Image
                        src={`/images/${item.image}`}
                        alt={t(item.title)}
                        width={80}
                        height={80}
                        className="mb-8 h-20 w-20 object-contain"
                      />

                      <h3 className="text-[24px] font-semibold leading-[29px] text-brand-white">
                        {t(item.title)}
                      </h3>

                      <p className="mt-3 max-w-[260px] text-base font-normal leading-5 text-neutral-400">
                        {t(item.description)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}