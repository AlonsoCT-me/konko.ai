import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { AboutHero } from '@/components/sections/about-us/AboutHero';
import { AboutMission } from '@/components/sections/about-us/AboutMission';
import { AboutValues } from '@/components/sections/about-us/AboutValues';
import { AboutTeam } from '@/components/sections/about-us/AboutTeam';
import { AboutCulture } from '@/components/sections/about-us/AboutCulture';
import { AboutCTA } from '@/components/sections/about-us/AboutCTA';

export const metadata: Metadata = {
  title: 'Nosotros — Konko.ai',
  description:
    'Conoce al equipo detrás de Konko.ai, la plataforma de IA que transforma la atención al paciente en clínicas de toda Latinoamérica.',
  openGraph: {
    title: 'Nosotros — Konko.ai',
    description:
      'Automatizar. Simplificar. Elevar el potencial humano. Conoce el equipo y la misión detrás de Konko.',
    url: 'https://konko.ai/about-us',
  },
  alternates: {
    canonical: 'https://konko.ai/about-us',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ScrollReveal><AboutMission /></ScrollReveal>
      <ScrollReveal><AboutValues /></ScrollReveal>
      <ScrollReveal><AboutTeam /></ScrollReveal>
      <ScrollReveal><AboutCulture /></ScrollReveal>
      <ScrollReveal><AboutCTA /></ScrollReveal>
    </>
  );
}
