
import HeroSection from '@/components/sections/hero-section';
import JourneySection from '@/components/sections/journey-section'; // New import for merged section
import AiProjectsShowcase from '@/components/sections/ai-projects-showcase';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import SkillsSection from '@/components/sections/skills-section';
import KeyProjectsSection from '@/components/sections/key-projects-section';
import PositionsSection from '@/components/sections/positions-section';
import AwardsSection from '@/components/sections/awards-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <JourneySection /> {/* Use the new JourneySection */}
      <Separator />
      <PositionsSection />
       <Separator />
      <KeyProjectsSection />
      <Separator />
      <AiProjectsShowcase />
       <Separator />
      <AwardsSection />
      <Separator />
      <ContactSection />
    </div>
  );
}

