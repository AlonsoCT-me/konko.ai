'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const testimonialImages = [
  'https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=200',
];

export function RevolutionSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("Kora completely transformed appointment management at our clinic. We reduced cancellations by 60% in the first month."),
      name: "Dr. Carlos Méndez",
      role: t("Medical Director"),
      clinic: "Clínica Urología Avanzada",
    },
    {
      quote: t("The team can focus on patients instead of answering WhatsApps all day. Productivity increased incredibly."),
      name: "Dra. María Torres",
      role: t("Founder"),
      clinic: "ÉticaOral",
    },
    {
      quote: t("Konko's AI understands the medical context in a way other platforms simply can't. It's like having an expert receptionist 24/7."),
      name: "Dr. Juan Echandi",
      role: t("Director"),
      clinic: "Lab Echandi",
    },
  ];

  return (
    <section className="bg-brand-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 lg:text-5xl">
            {t('The healthcare revolution in Latam')}
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            {t('Told by its true protagonists')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="overflow-hidden rounded-3xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-lg">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={testimonialImages[i]}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(0,0,0,0.5),transparent)]" />
              </div>
              <div className="p-6">
                <svg className="mb-4 h-8 w-8 text-brand-gold" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.172C7.582 11.838 9.09 10.172 11 9.5L10 8zm16 0c-3.314 0-6 2.686-6 6v10h10V14h-6.828C23.582 11.838 25.09 10.172 27 9.5L26 8z" />
                </svg>
                <p className="mb-5 text-sm leading-relaxed text-neutral-600">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={testimonialImages[i]} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500">{testimonial.role} · {testimonial.clinic}</p>
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
