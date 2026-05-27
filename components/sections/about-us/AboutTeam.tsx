'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import s from './styles/AboutTeam.module.css';

export function AboutTeam() {
  const { tAbout } = useLocale();
  const section = tAbout.team;

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.eyebrow}>{section.eyebrow}</div>
          <h2 className={s.heading}>{section.heading}</h2>
          <p className={s.description}>{section.description}</p>
        </div>

        <p className={s.groupLabel}>{section.founders.label}</p>
        <div className={s.foundersGrid}>
          {section.founders.members.map((member, i) => (
            <div key={i} className={s.founderCard}>
              <div className={s.founderImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className={s.founderImageOverlay} />
              </div>
              <div className={s.founderBody}>
                <h3 className={s.founderName}>{member.name}</h3>
                <p className={s.founderRole}>{member.role}</p>
                <p className={s.founderBio}>{member.bio}</p>
                <a href={member.linkedin} className={s.founderLinkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={s.groupLabel}>{section.technical.label}</p>
        <div className={s.techGrid}>
          {section.technical.members.map((member, i) => (
            <div key={i} className={s.techCard}>
              <div className={s.techAvatar}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h3 className={s.techName}>{member.name}</h3>
                <p className={s.techRole}>{member.role}</p>
                <p className={s.techBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
