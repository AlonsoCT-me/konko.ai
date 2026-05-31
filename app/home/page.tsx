import { HeroSection } from "@/components/sections/home/HeroSection";
import { MeetKoraSection } from "@/components/sections/home/MeetKoraSection";
import { BenefitsSection } from "@/components/sections/home/BenefitsSection";
import { AILatamSection } from "@/components/sections/home/AILatamSection";
import { RevolutionSection } from "@/components/sections/home/RevolutionSection";
import { TalkToKoraSection } from "@/components/sections/home/TalkKoraSection";
import { SpecialtiesSection } from "@/components/sections/home/SpecialtiesSection";
import { SecuritySection } from "@/components/sections/home/SecuritySection";
import { MetaPartnerSection } from "@/components/sections/home/MetaPartnerSection";
import { FounderSection } from "@/components/sections/home/FounderSection";
import { MetricsSection } from "@/components/sections/home/MetricsSection";
import { LogosCarousel } from "@/components/sections/home/LogosCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosCarousel />
      <MeetKoraSection />
      <BenefitsSection />
      <AILatamSection />
      <RevolutionSection />
      <TalkToKoraSection />
      <SpecialtiesSection />
      <SecuritySection />
      <MetaPartnerSection />
      <FounderSection />
      <MetricsSection />
    </>
  );
}
