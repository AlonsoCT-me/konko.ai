'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const founders = [
  {
    name: 'Jean Marc Goguikian',
    roleKey: 'CEO & Co-Founder' as const,
    bioKey: 'Clinic owner with experience at BCG, JP Morgan, and Harvard Business School. Built Konko from the frustration of managing his own clinic.' as const,
    image: 'https://images.pexels.com/photos/5207088/pexels-photo-5207088.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Michael Haddad',
    roleKey: 'CTO & Co-Founder' as const,
    bioKey: 'AI/ML expert with experience at C3 AI, Tesla, and Harvard Business School. Leads the technical architecture of all Konko products.' as const,
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
];

const technical = [
  {
    name: 'Oleksandr Danshyn',
    roleKey: 'AI/ML Engineer' as const,
    bioKey: 'AI/ML systems engineer. Experience at DataRobot and neu.ro.' as const,
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Oscar Argueta',
    roleKey: 'AI/ML Expert' as const,
    bioKey: 'AI/ML expert. Georgia Tech graduate.' as const,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Ivan Zubenko',
    roleKey: 'AI/ML Systems Engineer' as const,
    bioKey: 'AI/ML systems engineer with experience at neu.ro.' as const,
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
];

export function AboutTeam() {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1.5 text-sm font-medium text-brand-gold-dark [background-color:rgba(201,168,76,0.1)]">
            {t('The team')}
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-neutral-950 lg:text-4xl">
            {t('The people behind Konko')}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-500 lg:text-lg">
            {t('A world-class multidisciplinary team with expertise in AI, healthcare, business, and technology.')}
          </p>
        </div>

        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {t('Co-founders')}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {founders.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-lg">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(10,10,10,0.7)_0%,transparent_50%)]" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-950">{member.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-brand-gold">{t(member.roleKey)}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{t(member.bioKey)}</p>
                <a href={member.linkedin} className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-3.5 w-3.5" />
                  {t('LinkedIn')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 mt-14 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {t('Technical leads')}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technical.map((member) => (
            <div
              key={member.name}
              className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-card-sm transition-all duration-300 hover:shadow-card hover:border-[rgba(201,168,76,0.2)]"
            >
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">{member.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-brand-gold">{t(member.roleKey)}</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">{t(member.bioKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
