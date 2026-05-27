import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedBySection } from '@/components/sections/TrustedBySection';
import { MeetKoraSection } from '@/components/sections/MeetKoraSection';
import { AILatamSection } from '@/components/sections/AILatamSection';
import { RevolutionSection } from '@/components/sections/RevolutionSection';
import { TalkToKoraSection } from '@/components/sections/TalkToKoraSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { MetaPartnerSection } from '@/components/sections/MetaPartnerSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <MeetKoraSection />
      <AILatamSection />
      <RevolutionSection />
      <TalkToKoraSection />
      <SpecialtiesSection />
      <SecuritySection />
      <MetaPartnerSection />
      <FounderSection />
      <MetricsSection />
      <CTASection />
    </>
  );
}
