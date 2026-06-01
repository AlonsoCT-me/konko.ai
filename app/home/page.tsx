import { SafeSection } from "@/components/shared/SafeSection";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { MeetKoraSection } from "@/components/sections/home/MeetKoraSection";
import { BenefitsSection } from "@/components/sections/home/BenefitsSection";
import { AILatamSection } from "@/components/sections/home/AILatamSection";
import { RevolutionSection } from "@/components/sections/home/RevolutionSection";
import { TalkToKoraSection } from "@/components/sections/home/TalkKoraSection";
import { SpecialtiesSection } from "@/components/sections/home/SpecialtiesSectionCarrusel";
import { SecuritySection } from "@/components/sections/home/SecuritySection";
import { MetaPartnerSection } from "@/components/sections/home/MetaPartnerSection";
import { FounderSection } from "@/components/sections/home/FounderSection";
import { MetricsSection } from "@/components/sections/home/MetricsSection";
import { LogosCarousel } from "@/components/sections/home/LogosCarousel";

export default function HomePage() {
  return (
    <>
      <SafeSection><HeroSection /></SafeSection>
      <SafeSection><LogosCarousel /></SafeSection>
      <SafeSection><ScrollReveal><MeetKoraSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><BenefitsSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><AILatamSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><RevolutionSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><TalkToKoraSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><SpecialtiesSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><SecuritySection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><MetaPartnerSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><FounderSection /></ScrollReveal></SafeSection>
      <SafeSection><ScrollReveal><MetricsSection /></ScrollReveal></SafeSection>
    </>
  );
}
